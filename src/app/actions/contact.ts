"use server";

import { headers } from "next/headers";

import { sendContactEmails } from "@/lib/email/send-contact";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import {
  contactFormSchema,
  normalizeContactFormValues,
  type ContactFormInput,
  type ContactFormValues,
} from "@/lib/schemas/contact-form";

export type ContactFormActionResult =
  | { ok: true }
  | { ok: false; message: string }
  | { ok: false; fieldErrors: Partial<Record<keyof ContactFormValues, string>> };

export async function submitContactForm(
  values: ContactFormInput,
  sourcePage?: string,
): Promise<ContactFormActionResult> {
  if (values.honeypot) {
    return { ok: true };
  }

  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<string, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return { ok: false, fieldErrors: fieldErrors as Partial<Record<keyof ContactFormValues, string>> };
  }

  const data = normalizeContactFormValues(parsed.data);

  const headerStore = await headers();
  const ip = getClientIp(headerStore.get("x-forwarded-for"));
  const rateLimit = checkRateLimit(`contact:${ip}`);

  if (!rateLimit.allowed) {
    const minutes = rateLimit.retryAfterMs
      ? Math.ceil(rateLimit.retryAfterMs / 60000)
      : 60;
    return {
      ok: false,
      message: `Too many submissions. Please try again in about ${minutes} minute${minutes === 1 ? "" : "s"}.`,
    };
  }

  try {
    await sendContactEmails({
      data,
      sourcePage,
    });
    return { ok: true };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return {
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please try again or call us directly.",
    };
  }
}
