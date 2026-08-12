"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FedExStoryTemplate } from "@/components/fedex-story/FedExStoryTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PasswordGateModal } from "@/components/PasswordGateModal";
import { fedexAiConciergeStory } from "@/lib/case-studies/fedex/fedex-ai-concierge";
import {
  FEDEX_AI_CONCIERGE_PASSWORD,
  grantFedExAiConciergeAccess,
  hasFedExAiConciergeAccess,
} from "@/lib/fedex-ai-concierge-access";

export function FedExAiConciergePageClient() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAuthorized(hasFedExAiConciergeAccess());
    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  if (!authorized) {
    return (
      <>
        <Header />
        <main className="mx-auto flex min-h-[60vh] max-w-[1120px] items-center justify-center px-6 md:px-8">
          <p className="text-[0.9375rem] text-muted">
            This case study requires a passcode.
          </p>
        </main>
        <Footer />
        <PasswordGateModal
          open
          password={FEDEX_AI_CONCIERGE_PASSWORD}
          onClose={() => router.push("/#ai-products")}
          onSuccess={() => {
            grantFedExAiConciergeAccess();
            setAuthorized(true);
          }}
          title={fedexAiConciergeStory.title}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <FedExStoryTemplate story={fedexAiConciergeStory} />
      </main>
      <Footer />
    </>
  );
}
