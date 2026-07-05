"use client";

import type { ProductMockupId } from "@/lib/data";

export function ProductMockup({ id }: { id: ProductMockupId }) {
  switch (id) {
    case "readylead":
      return <ReadyLeadMockup />;
    case "ahead":
      return <AheadMockup />;
    case "aheadIos":
      return <AheadIosMockup />;
    case "fedex":
      return <FedExMockup />;
    case "probeiq":
      return <ProbeIQMockup />;
    case "pmos":
      return <PMOSMockup />;
    case "pepper":
      return <PepperMockup />;
    case "borrow":
      return <BorrowMockup />;
    case "aiDesignSystem":
      return <AiDesignSystemMockup />;
  }
}

function ReadyLeadMockup() {
  return (
    <div className="flex h-full items-center justify-center p-6 md:p-8">
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-[0_16px_40px_rgba(10,10,10,0.06)]">
        <div className="border-b border-border bg-canvas-warm px-4 py-3">
          <p className="text-label text-[9px]">ReadyLead</p>
          <p className="mt-1 text-sm font-medium text-ink">Lead prioritization</p>
        </div>
        <div className="space-y-2 p-4">
          {[
            { name: "Acme Corp", score: "94", signal: "Hiring + funding" },
            { name: "Northwind", score: "87", signal: "Product expansion" },
            { name: "Helio Labs", score: "81", signal: "Intent spike" },
          ].map((lead) => (
            <div
              key={lead.name}
              className="flex items-center justify-between rounded-lg border border-border bg-canvas-warm px-3 py-2.5"
            >
              <div>
                <p className="text-[11px] font-medium text-ink">{lead.name}</p>
                <p className="text-[9px] text-muted">{lead.signal}</p>
              </div>
              <span className="font-mono text-[11px] text-accent">{lead.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[46%] min-w-[140px] max-w-[200px] rounded-[1.75rem] border-[6px] border-ink/90 bg-ink p-1 shadow-[0_20px_50px_rgba(10,10,10,0.15)]">
      <div className="overflow-hidden rounded-[1.25rem] bg-surface">{children}</div>
    </div>
  );
}

function AheadMockup() {
  return (
    <div className="flex h-full items-center justify-center gap-4 px-6 py-8">
      <PhoneFrame>
        <div className="bg-[#f7f9f8] p-3">
          <p className="text-[9px] font-medium text-ink">Ahead</p>
          <p className="mt-3 text-[8px] text-muted">Safe to spend</p>
          <p className="font-serif-brand text-xl text-ink">$1,240</p>
          <div className="mt-4 space-y-2">
            <div className="h-8 rounded-md bg-white shadow-sm" />
            <div className="h-8 rounded-md bg-white shadow-sm" />
          </div>
          <div className="mt-4 rounded-full bg-ink px-2 py-1.5 text-center text-[7px] text-white">
            Ask Ahead
          </div>
        </div>
      </PhoneFrame>
      <PhoneFrame>
        <div className="bg-ink p-3 text-white">
          <p className="text-[8px] text-white/70">Agent</p>
          <p className="mt-2 text-[8px] leading-relaxed">
            Based on your goals, you can spend $340 this week.
          </p>
        </div>
      </PhoneFrame>
    </div>
  );
}

function AheadIosMockup() {
  return (
    <div className="flex h-full items-center justify-center gap-4 px-6 py-8">
      <PhoneFrame>
        <div className="bg-[#f7f9f8] p-3">
          <p className="text-[9px] font-medium text-ink">Ahead</p>
          <p className="mt-3 text-[8px] text-muted">Safe to spend</p>
          <p className="font-serif-brand text-xl text-ink">$1,240</p>
          <div className="mt-4 space-y-2">
            <div className="h-8 rounded-md bg-white shadow-sm" />
            <div className="h-8 rounded-md bg-white shadow-sm" />
          </div>
          <div className="mt-4 rounded-full bg-ink px-2 py-1.5 text-center text-[7px] text-white">
            Weekly budget
          </div>
        </div>
      </PhoneFrame>
      <PhoneFrame>
        <div className="bg-[#f7f9f8] p-3">
          <p className="text-[9px] font-medium text-ink">Goals</p>
          <p className="mt-3 text-[8px] text-muted">Emergency fund</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
            <div className="h-full w-[68%] rounded-full bg-ink/80" />
          </div>
          <p className="mt-4 text-[8px] text-muted">This week</p>
          <p className="font-serif-brand text-lg text-ink">$340 left</p>
          <div className="mt-4 space-y-1.5">
            <div className="flex items-center justify-between rounded-md bg-white px-2 py-1.5 text-[7px] text-body">
              <span>Groceries</span>
              <span className="text-ink">$42</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-white px-2 py-1.5 text-[7px] text-body">
              <span>Transit</span>
              <span className="text-ink">$18</span>
            </div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function FedExMockup() {
  return (
    <div className="flex h-full items-center justify-center p-6 md:p-8">
      <div className="ui-window w-full max-w-md overflow-hidden rounded-lg">
        <div className="border-b border-border bg-canvas-warm px-3 py-2">
          <p className="text-[10px] font-medium text-ink">FedEx AI Concierge</p>
        </div>
        <div className="grid grid-cols-2 gap-0">
          <div className="border-r border-border bg-canvas-warm p-3">
            <p className="text-label text-[8px]">Agents</p>
            <ul className="mt-2 space-y-1.5 text-[9px] text-body">
              <li>✓ Context</li>
              <li>✓ Routing</li>
              <li className="font-medium text-ink">○ Onboarding</li>
            </ul>
          </div>
          <div className="p-3">
            <p className="text-[9px] text-body">Map handoff states…</p>
            <p className="mt-2 font-mono text-[8px] text-accent">
              agents/flow.ts +96
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProbeIQMockup() {
  return (
    <div className="flex h-full items-center justify-center p-6 md:p-8">
      <div className="w-full max-w-md rounded-xl border border-border bg-surface p-4 shadow-[0_16px_40px_rgba(10,10,10,0.06)]">
        <p className="text-label text-[9px]">ProbeIQ</p>
        <p className="mt-3 text-sm font-medium text-ink">Research synthesis</p>
        <div className="mt-4 space-y-2">
          {["Source cluster A", "Source cluster B", "Insight draft"].map(
            (row) => (
              <div
                key={row}
                className="flex items-center justify-between rounded-lg border border-border bg-canvas-warm px-3 py-2"
              >
                <span className="text-[10px] text-body">{row}</span>
                <span className="text-[9px] text-accent">→</span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function PMOSMockup() {
  return (
    <div className="flex h-full items-center justify-center p-6 md:p-8">
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-[0_16px_40px_rgba(10,10,10,0.06)]">
        <div className="grid grid-cols-3 border-b border-border text-[9px]">
          {["Backlog", "Build", "Ship"].map((col, i) => (
            <div
              key={col}
              className={`p-3 ${i < 2 ? "border-r border-border" : ""} ${
                i === 1 ? "bg-canvas-warm font-medium text-ink" : "text-muted"
              }`}
            >
              {col}
            </div>
          ))}
        </div>
        <div className="space-y-2 p-3">
          {["Spec draft", "Agent task", "Review"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-border bg-canvas-warm px-3 py-2 text-[10px] text-body"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PepperMockup() {
  return (
    <div className="flex h-full items-center justify-center gap-3 p-6 md:p-8">
      {["Button", "Input", "Card", "Drawer"].map((comp) => (
        <div
          key={comp}
          className="flex h-24 w-[22%] min-w-[72px] flex-col items-center justify-center rounded-lg border border-border bg-surface shadow-sm"
        >
          <div className="mb-2 h-2 w-8 rounded-full bg-ink/80" />
          <span className="text-[9px] text-muted">{comp}</span>
        </div>
      ))}
    </div>
  );
}

function AiDesignSystemMockup() {
  const steps = [
    "Design Tokens",
    "React Components",
    "AI Components",
    "Cursor",
    "Production",
  ];

  return (
    <div className="flex h-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-[220px]">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-center text-[11px] font-medium tracking-tight text-ink shadow-[0_8px_24px_rgba(10,10,10,0.04)]">
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="py-2 text-sm text-muted-soft" aria-hidden>
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function BorrowMockup() {
  return (
    <div className="flex h-full items-center justify-center p-6 md:p-8">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-6 shadow-[0_16px_40px_rgba(10,10,10,0.06)]">
        <p className="text-label text-[9px]">Secure sign in</p>
        <p className="mt-4 text-lg font-medium text-ink">Verify identity</p>
        <div className="mt-5 h-10 rounded-md border border-border bg-canvas-warm" />
        <div className="mt-3 h-10 rounded-md border border-border bg-canvas-warm" />
        <div className="mt-5 rounded-full bg-ink py-2.5 text-center text-[11px] font-medium text-white">
          Continue
        </div>
      </div>
    </div>
  );
}
