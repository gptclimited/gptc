function getEnv(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

export function getEmailConfig() {
  return {
    resendApiKey: getEnv("RESEND_API_KEY"),
    contactEmail: getEnv("CONTACT_EMAIL") ?? "info@globaltrainingnetwork.org",
    fromEmail:
      getEnv("RESEND_FROM_EMAIL") ??
      "Global Training Network <onboarding@resend.dev>",
    siteUrl: getEnv("NEXT_PUBLIC_SITE_URL") ?? "https://globaltrainingnetwork.org",
  };
}

export function isEmailConfigured(): boolean {
  return Boolean(getEmailConfig().resendApiKey);
}
