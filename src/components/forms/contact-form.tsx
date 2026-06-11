"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";

import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackFormSubmit } from "@/lib/analytics/events";
import {
  contactFormSchema,
  contactMethodOptions,
  inquiryTypeOptions,
  serviceInterestOptions,
  type ContactFormInput,
  type InquiryType,
} from "@/lib/schemas/contact-form";
import { cn } from "@/lib/utils";

const selectClassName =
  "flex h-9 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20";

type ContactFormProps = {
  defaultInquiryType?: InquiryType;
};

export function ContactForm({ defaultInquiryType = "general" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: defaultInquiryType,
      preferredContactMethod: undefined,
      serviceInterest: "",
      message: "",
      honeypot: "",
    },
  });

  const inquiryType = watch("inquiryType");
  const showConsultationFields = inquiryType === "consultation";

  useEffect(() => {
    if (submitted) {
      successRef.current?.focus();
    }
  }, [submitted]);

  async function onSubmit(data: ContactFormInput) {
    setFormError(null);

    const result = await submitContactForm(
      data,
      window.location.pathname + window.location.search,
    );

    if (result.ok) {
      trackFormSubmit(data.inquiryType);
      setSubmitted(true);
      return;
    }

    if ("fieldErrors" in result && result.fieldErrors) {
      for (const [field, message] of Object.entries(result.fieldErrors)) {
        if (message) {
          setError(field as keyof ContactFormInput, { message });
        }
      }
      errorRef.current?.focus();
      return;
    }

    if ("message" in result) {
      setFormError(result.message ?? "Unable to send your message. Please try again.");
      errorRef.current?.focus();
    }
  }

  function handleSendAnother() {
    setSubmitted(false);
    setFormError(null);
    reset({
      name: "",
      email: "",
      phone: "",
      inquiryType: defaultInquiryType,
      preferredContactMethod: undefined,
      serviceInterest: "",
      message: "",
      honeypot: "",
    });
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-xl border border-border bg-gtn-neutral-50 p-6 outline-none lg:p-8"
        role="status"
        aria-live="polite"
      >
        <h2 className="mb-2 text-lg font-semibold text-gtn-primary">Thank you for your message</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Your inquiry has been sent to our team. You should receive a confirmation email shortly,
          and we will respond as soon as possible.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={handleSendAnother}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl border border-border bg-white p-6 lg:p-8"
      noValidate
    >
      <div>
        <h2 className="text-lg font-semibold text-gtn-primary">Send us a message</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      {formError ? (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive outline-none"
        >
          {formError}
        </div>
      ) : null}

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("honeypot")}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2 sm:max-w-md">
          <Label htmlFor="inquiryType">Inquiry Type</Label>
          <select
            id="inquiryType"
            className={cn(selectClassName, errors.inquiryType && "border-destructive")}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
            {...register("inquiryType")}
          >
            {inquiryTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.inquiryType ? (
            <p id="inquiryType-error" className="text-sm text-destructive">
              {errors.inquiryType.message}
            </p>
          ) : null}
        </div>

        {showConsultationFields ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="preferredContactMethod">Preferred Contact Method</Label>
              <select
                id="preferredContactMethod"
                className={cn(
                  selectClassName,
                  errors.preferredContactMethod && "border-destructive",
                )}
                aria-invalid={!!errors.preferredContactMethod}
                aria-describedby={
                  errors.preferredContactMethod ? "preferredContactMethod-error" : undefined
                }
                defaultValue=""
                {...register("preferredContactMethod")}
              >
                <option value="" disabled>
                  Select contact method
                </option>
                {contactMethodOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.preferredContactMethod ? (
                <p id="preferredContactMethod-error" className="text-sm text-destructive">
                  {errors.preferredContactMethod.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceInterest">
                Service Interest{" "}
                <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <select
                id="serviceInterest"
                className={selectClassName}
                {...register("serviceInterest")}
              >
                {serviceInterestOptions.map((option) => (
                  <option key={option.value || "none"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : null}

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-destructive">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2 sm:col-span-2 sm:max-w-md">
          <Label htmlFor="phone">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" className="text-sm text-destructive">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className="text-sm text-destructive">
              {errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2Icon className="animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
