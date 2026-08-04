"use client";

import type { AtlasPattern } from "@/lib/case-studies/design-system/types";

const statusStyles = {
  experimental: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  draft: "border-amber-500/30 bg-amber-500/10 text-amber-200",
  planned: "border-border bg-muted/30 text-muted-foreground",
} as const;

function PreviewShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/10 bg-[#0c0c0c] p-4 ${className}`}
    >
      {children}
    </div>
  );
}

function AgentStatusPreview() {
  return (
    <PreviewShell>
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-medium text-white">Reporting Agent</p>
          <p className="text-[11px] text-white/50">Operations analyst</p>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
          Executing
        </span>
      </div>
      <p className="text-[11px] font-medium text-white/70">
        Assemble Q2 operational report
      </p>
      <p className="mt-2 text-xs leading-relaxed text-white/55">
        Retrieving revenue and fulfillment metrics from connected systems.
      </p>
      <div className="mt-3">
        <div className="mb-1 flex justify-between text-[10px] text-white/45">
          <span>Report assembly</span>
          <span>58%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[58%] rounded-full bg-emerald-400" />
        </div>
      </div>
      <div className="mt-3 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-2">
        <p className="font-mono text-[10px] text-white/45">
          finance_data_api · running
        </p>
      </div>
    </PreviewShell>
  );
}

function PlanPreviewUI() {
  const steps = [
    { label: "Extract contract terms", done: true },
    { label: "Compare against policy baseline", done: true },
    { label: "Draft risk summary", active: true },
    { label: "Request legal review", done: false },
  ];

  return (
    <PreviewShell>
      <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-white/40">
        Proposed plan
      </p>
      <ol className="space-y-2">
        {steps.map((step, index) => (
          <li key={step.label} className="flex items-start gap-2 text-xs">
            <span
              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                step.done
                  ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                  : step.active
                    ? "border-amber-500/50 bg-amber-500/10 text-amber-300"
                    : "border-white/15 text-white/30"
              }`}
            >
              {step.done ? "✓" : index + 1}
            </span>
            <span
              className={
                step.done
                  ? "text-white/40 line-through"
                  : step.active
                    ? "text-white"
                    : "text-white/45"
              }
            >
              {step.label}
            </span>
          </li>
        ))}
      </ol>
    </PreviewShell>
  );
}

function HumanApprovalPreview() {
  return (
    <PreviewShell className="border-amber-500/20">
      <div className="mb-3 flex items-start gap-2">
        <span className="text-amber-300">⚠</span>
        <div>
          <p className="text-sm font-medium text-white">
            Approve contract amendment?
          </p>
          <p className="mt-1 text-[11px] text-white/50">
            Agent wants to submit revised terms to the vendor portal.
          </p>
        </div>
      </div>
      <div className="mb-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-white/45">
        POST /vendors/acme/contracts/amend
      </div>
      <div className="flex gap-2">
        <span className="flex-1 rounded-md bg-white px-3 py-1.5 text-center text-[11px] font-medium text-black">
          Approve
        </span>
        <span className="flex-1 rounded-md border border-white/15 px-3 py-1.5 text-center text-[11px] text-white/70">
          Reject
        </span>
      </div>
    </PreviewShell>
  );
}

function StreamingResponsePreview() {
  return (
    <PreviewShell>
      <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-white/40">
        Agent response
      </p>
      <div className="space-y-2 text-xs leading-relaxed text-white/70">
        <p>
          Based on Q2 revenue data, fulfillment variance is concentrated in the
          West region—
        </p>
        <p className="text-white/35">
          <span className="inline-block h-3 w-24 animate-pulse rounded bg-white/10" />
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-white/40">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Streaming partial results…
      </div>
    </PreviewShell>
  );
}

function MemoryPreview() {
  const memories = [
    { key: "Vendor policy", value: "Net-30 required for Tier 1" },
    { key: "Last review", value: "Q1 2026 — approved with exceptions" },
    { key: "Open issue", value: "Liability cap unresolved" },
  ];

  return (
    <PreviewShell>
      <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-white/40">
        Retrieved context
      </p>
      <dl className="space-y-2">
        {memories.map((memory) => (
          <div
            key={memory.key}
            className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2"
          >
            <dt className="text-[10px] text-white/40">{memory.key}</dt>
            <dd className="text-xs text-white/80">{memory.value}</dd>
          </div>
        ))}
      </dl>
    </PreviewShell>
  );
}

function ToolCallPreview() {
  return (
    <PreviewShell>
      <div className="mb-2 flex items-center gap-2">
        <span className="font-mono text-xs text-white">search_contracts</span>
        <span className="ml-auto rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[9px] text-emerald-300">
          success
        </span>
      </div>
      <pre className="overflow-x-auto rounded-md border border-white/10 bg-white/[0.03] p-2.5 font-mono text-[10px] leading-relaxed text-white/50">
        {`{
  "vendor": "acme",
  "status": "active",
  "limit": 5
}`}
      </pre>
    </PreviewShell>
  );
}

const previewMap = {
  "agent-status": AgentStatusPreview,
  "plan-preview": PlanPreviewUI,
  "human-approval": HumanApprovalPreview,
  "streaming-response": StreamingResponsePreview,
  memory: MemoryPreview,
  "tool-call": ToolCallPreview,
} as const;

export function AtlasPatternPreview({ patternId }: { patternId: string }) {
  const Preview =
    previewMap[patternId as keyof typeof previewMap] ?? AgentStatusPreview;
  return <Preview />;
}

export function AtlasPatternCard({ pattern }: { pattern: AtlasPattern }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-[#111111]">
      <div className="h-[320px] shrink-0 border-b border-white/10 p-5 md:p-6">
        <div className="flex h-full items-center">
          <div className="w-full">
            <AtlasPatternPreview patternId={pattern.id} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium tracking-tight text-white">
            {pattern.name}
          </h3>
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${statusStyles[pattern.status]}`}
          >
            {pattern.status}
          </span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/60">
          {pattern.purpose}
        </p>
        <div className="mt-auto pt-4">
          <p className="text-mono-sm line-clamp-2 text-white/40">
            {pattern.stateExample}
          </p>
          <p
            className={`mt-3 line-clamp-2 text-xs leading-relaxed text-white/35 ${
              pattern.implementation ? "" : "min-h-[2.5rem]"
            }`}
          >
            {pattern.implementation ?? "\u00A0"}
          </p>
        </div>
      </div>
    </article>
  );
}
