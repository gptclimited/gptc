"use client";

import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { consultationHref } from "@/lib/constants";
import { motionDurations, motionEase } from "@/lib/motion/constants";

const DISMISS_KEY = "gtn-sticky-cta-dismissed";

function readDismissedState(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return sessionStorage.getItem(DISMISS_KEY) === "true";
}

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(readDismissedState);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setVisible(!entry.isIntersecting);
        }
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "true");
  }

  const show = visible && !dismissed;

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: motionDurations.normal, ease: motionEase }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          role="complementary"
          aria-label="Book a consultation"
        >
          <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-end gap-2">
            <ButtonLink
              href={consultationHref}
              variant="accent"
              size="lg"
              className="shadow-lg"
              analyticsLabel="sticky_cta"
            >
              Book Consultation
            </ButtonLink>
            <button
              type="button"
              onClick={handleDismiss}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground shadow-lg transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Dismiss consultation reminder"
            >
              <XIcon className="size-4" aria-hidden />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
