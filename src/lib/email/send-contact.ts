import { Resend } from "resend";

import { getEmailConfig } from "@/lib/env";
import {
  buildAutoReplyHtml,
  buildAutoReplySubject,
  buildInternalEmailHtml,
  buildInternalEmailSubject,
  buildInternalEmailText,
} from "@/lib/email/templates";
import type { ContactFormValues } from "@/lib/schemas/contact-form";

type SendContactEmailsInput = {
  data: ContactFormValues;
  sourcePage?: string;
};

export async function sendContactEmails({ data, sourcePage }: SendContactEmailsInput) {
  const config = getEmailConfig();

  if (!config.resendApiKey) {
    throw new Error("Email service is not configured. Please contact us by phone or email.");
  }

  const resend = new Resend(config.resendApiKey);
  const submittedAt = new Date().toLocaleString("en-CA", {
    timeZone: "America/Vancouver",
    dateStyle: "full",
    timeStyle: "short",
  });

  const meta = { submittedAt, sourcePage };

  const internalResult = await resend.emails.send({
    from: config.fromEmail,
    to: config.contactEmail,
    replyTo: data.email,
    subject: buildInternalEmailSubject(data),
    html: buildInternalEmailHtml(data, meta),
    text: buildInternalEmailText(data, meta),
  });

  if (internalResult.error) {
    throw new Error(internalResult.error.message);
  }

  const autoReplyResult = await resend.emails.send({
    from: config.fromEmail,
    to: data.email,
    subject: buildAutoReplySubject(),
    html: buildAutoReplyHtml(data),
    text: `Hi ${data.name},\n\nWe have received your inquiry and will respond as soon as possible.\n\nGlobal Training Network\n604-727-6553\ninfo@globaltrainingnetwork.org`,
  });

  if (autoReplyResult.error) {
    console.error("Auto-reply failed:", autoReplyResult.error.message);
  }

  return {
    internalId: internalResult.data?.id,
    autoReplyId: autoReplyResult.data?.id,
  };
}
