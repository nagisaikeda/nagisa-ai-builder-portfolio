"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PasswordGateModal } from "@/components/PasswordGateModal";
import { ProductStoryTemplate } from "@/components/product-story/ProductStoryTemplate";
import {
  grantConnectedWealthAccess,
  hasConnectedWealthAccess,
} from "@/lib/connected-wealth-access";
import { connectedWealthStory } from "@/lib/case-studies/connected-wealth";

export function ConnectedWealthPageClient() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAuthorized(hasConnectedWealthAccess());
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
          onClose={() => router.push("/#product-design")}
          onSuccess={() => {
            grantConnectedWealthAccess();
            setAuthorized(true);
          }}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <ProductStoryTemplate story={connectedWealthStory} />
      </main>
      <Footer />
    </>
  );
}
