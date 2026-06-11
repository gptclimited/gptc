import type { ContactFormValues } from "@/lib/schemas/contact-form";
import { formatInquiryType } from "@/lib/schemas/contact-form";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#0B3C5D;vertical-align:top;width:160px;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#1F2937;">${escapeHtml(value)}</td>
    </tr>
  `;
}

export function buildInternalEmailHtml(
  data: ContactFormValues,
  meta: { submittedAt: string; sourcePage?: string },
): string {
  const inquiryLabel = formatInquiryType(data.inquiryType);

  return `
<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#F8FAFC;font-family:Inter,Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F8FAFC;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#0B3C5D;color:#ffffff;padding:20px 24px;">
                <h1 style="margin:0;font-size:20px;">New Website Inquiry</h1>
                <p style="margin:8px 0 0;font-size:14px;opacity:0.9;">Global Training Network</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 16px;color:#1F2937;font-size:15px;">
                  A new <strong>${escapeHtml(inquiryLabel)}</strong> was submitted through the website contact form.
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;">
                  ${row("Name", data.name)}
                  ${row("Email", data.email)}
                  ${row("Phone", data.phone || "Not provided")}
                  ${row("Inquiry Type", inquiryLabel)}
                  ${row(
                    "Preferred Contact",
                    data.preferredContactMethod
                      ? data.preferredContactMethod === "email"
                        ? "Email"
                        : "Phone"
                      : undefined,
                  )}
                  ${row("Service Interest", data.serviceInterest || undefined)}
                  ${row("Submitted At", meta.submittedAt)}
                  ${row("Source Page", meta.sourcePage || "Contact page")}
                </table>
                <div style="margin-top:20px;padding:16px;background:#F8FAFC;border-radius:8px;">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#0B3C5D;">Message</p>
                  <p style="margin:0;white-space:pre-wrap;color:#1F2937;font-size:14px;line-height:1.6;">${escapeHtml(data.message)}</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildAutoReplyHtml(data: ContactFormValues): string {
  const inquiryLabel = formatInquiryType(data.inquiryType);

  return `
<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#F8FAFC;font-family:Inter,Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F8FAFC;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#0B3C5D;color:#ffffff;padding:20px 24px;">
                <h1 style="margin:0;font-size:20px;">Thank you for contacting GTN</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;color:#1F2937;font-size:15px;line-height:1.6;">
                <p style="margin:0 0 16px;">Hi ${escapeHtml(data.name)},</p>
                <p style="margin:0 0 16px;">
                  We have received your <strong>${escapeHtml(inquiryLabel)}</strong> and a member of our team will respond as soon as possible.
                </p>
                <p style="margin:0 0 16px;">
                  If your matter is urgent, you can reach us directly at
                  <a href="tel:604-727-6553" style="color:#1D70B8;">604-727-6553</a>
                  or
                  <a href="mailto:info@globaltrainingnetwork.org" style="color:#1D70B8;">info@globaltrainingnetwork.org</a>.
                </p>
                <p style="margin:0;">Warm regards,<br />Global Training Network</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildInternalEmailSubject(data: ContactFormValues): string {
  return `[GTN Website] New ${formatInquiryType(data.inquiryType)} from ${data.name}`;
}

export function buildAutoReplySubject(): string {
  return `We received your message — Global Training Network`;
}

export function buildInternalEmailText(
  data: ContactFormValues,
  meta: { submittedAt: string; sourcePage?: string },
): string {
  return [
    `New ${formatInquiryType(data.inquiryType)}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Preferred Contact: ${data.preferredContactMethod || "N/A"}`,
    `Service Interest: ${data.serviceInterest || "N/A"}`,
    `Submitted At: ${meta.submittedAt}`,
    `Source Page: ${meta.sourcePage || "Contact page"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}
