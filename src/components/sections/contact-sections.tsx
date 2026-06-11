import Link from "next/link";

import { formatAddress } from "@/lib/constants";
import { mapDirectionsUrl } from "@/lib/content/about";
import { cn } from "@/lib/utils";

type ContactMapProps = {
  embedUrl: string;
  className?: string;
};

export function ContactMap({ embedUrl, className }: ContactMapProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-muted shadow-sm", className)}>
      <iframe
        title="Global Training Network office location"
        src={embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[16/10] w-full border-0 sm:aspect-[16/9]"
        allowFullScreen
      />
      <div className="border-t border-border bg-white px-4 py-3 sm:px-6">
        <p className="text-sm text-muted-foreground">
          {formatAddress()}{" "}
          <Link
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gtn-secondary hover:underline"
          >
            Open in Google Maps
          </Link>
        </p>
      </div>
    </div>
  );
}

type ContactInfoProps = {
  phone: string;
  email: string;
};

export function ContactInfoPanel({ phone, email }: ContactInfoProps) {
  return (
    <div className="space-y-6 rounded-xl border border-border bg-gtn-neutral-50 p-6 lg:p-8">
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gtn-primary">Contact Information</h2>
        <p className="text-sm text-muted-foreground">
          Reach out by phone, email, or the form below. We respond to all inquiries promptly.
        </p>
      </div>
      <dl className="space-y-4 text-sm">
        <div>
          <dt className="font-medium text-foreground">Address</dt>
          <dd className="mt-1 text-muted-foreground">{formatAddress()}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Phone</dt>
          <dd className="mt-1">
            <a href={`tel:${phone}`} className="text-gtn-secondary hover:underline">
              {phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Email</dt>
          <dd className="mt-1">
            <a href={`mailto:${email}`} className="text-gtn-secondary hover:underline">
              {email}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}

type OfficeInfoProps = {
  hours: string;
  directions: string;
  parking: string;
};

export function OfficeInfoPanel({ hours, directions, parking }: OfficeInfoProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-6 lg:p-8">
      <h2 className="mb-4 text-lg font-semibold text-gtn-primary">Office Information</h2>
      <dl className="space-y-4 text-sm">
        <div>
          <dt className="font-medium text-foreground">Hours</dt>
          <dd className="mt-1 text-muted-foreground">{hours}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Directions</dt>
          <dd className="mt-1 text-muted-foreground">{directions}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Parking & Accessibility</dt>
          <dd className="mt-1 text-muted-foreground">{parking}</dd>
        </div>
      </dl>
    </div>
  );
}
