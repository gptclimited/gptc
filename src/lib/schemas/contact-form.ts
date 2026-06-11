import { z } from "zod";

import { serviceCategories } from "@/types/service";

export const inquiryTypeValues = [
  "general",
  "consultation",
  "information",
  "partnership",
] as const;

export type InquiryType = (typeof inquiryTypeValues)[number];

export const inquiryTypeLabels: Record<InquiryType, string> = {
  general: "General Inquiry",
  consultation: "Book a Consultation",
  information: "Request Information",
  partnership: "Partner With Us",
};

export const inquiryTypeOptions = inquiryTypeValues.map((value) => ({
  value,
  label: inquiryTypeLabels[value],
}));

export const contactMethodValues = ["email", "phone"] as const;

export type ContactMethod = (typeof contactMethodValues)[number];

export const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
] as const;

export const serviceInterestOptions = [
  { value: "", label: "Select a service area (optional)" },
  ...serviceCategories.map((category) => ({
    value: category,
    label: category,
  })),
];

export const contactFormSchema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters"),
    email: z.string().trim().email("Please enter a valid email address"),
    phone: z
      .string()
      .trim()
      .optional()
      .refine(
        (value) => !value || value.replace(/\D/g, "").length >= 7,
        "Please enter a valid phone number",
      ),
    inquiryType: z.enum(inquiryTypeValues, {
      message: "Please select an inquiry type",
    }),
    preferredContactMethod: z.string().optional(),
    serviceInterest: z.string().optional(),
    message: z
      .string()
      .trim()
      .min(20, "Message must be at least 20 characters")
      .max(2000, "Message must be 2000 characters or less"),
    honeypot: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.inquiryType === "consultation") {
      if (
        !data.preferredContactMethod ||
        !contactMethodValues.includes(data.preferredContactMethod as ContactMethod)
      ) {
        ctx.addIssue({
          code: "custom",
          message: "Please select a preferred contact method",
          path: ["preferredContactMethod"],
        });
      }
    }
  });

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  inquiryType: InquiryType;
  preferredContactMethod?: ContactMethod;
  serviceInterest?: string;
  message: string;
  honeypot?: string;
};

export function normalizeContactFormValues(input: ContactFormInput): ContactFormValues {
  const preferredContactMethod = contactMethodValues.includes(
    input.preferredContactMethod as ContactMethod,
  )
    ? (input.preferredContactMethod as ContactMethod)
    : undefined;

  return {
    name: input.name,
    email: input.email,
    phone: input.phone || undefined,
    inquiryType: input.inquiryType,
    preferredContactMethod,
    serviceInterest: input.serviceInterest || undefined,
    message: input.message,
    honeypot: input.honeypot || undefined,
  };
}

export function parseInquiryType(value: string | undefined): InquiryType | undefined {
  if (!value) return undefined;
  return inquiryTypeValues.includes(value as InquiryType)
    ? (value as InquiryType)
    : undefined;
}

export function formatInquiryType(type: InquiryType): string {
  return inquiryTypeLabels[type];
}
