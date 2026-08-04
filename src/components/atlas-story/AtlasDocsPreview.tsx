"use client";

export function AtlasDocsPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
      {/* Primary preview — docs layout */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] shadow-[0_24px_80px_rgba(0,0,0,0.25)] lg:col-span-7 lg:row-span-2">
        <div className="flex h-full min-h-[320px]">
          <aside className="hidden w-44 shrink-0 border-r border-white/10 p-4 sm:block">
            <p className="text-[9px] font-medium uppercase tracking-wider text-white/35">
              Documentation
            </p>
            <nav className="mt-4 space-y-1">
              {[
                "Introduction",
                "Principles",
                "Components",
                "Agent Status",
                "Patterns",
              ].map((item) => (
                <p
                  key={item}
                  className={`rounded-md px-2 py-1.5 text-[11px] ${
                    item === "Agent Status"
                      ? "bg-white/10 font-medium text-white"
                      : "text-white/45"
                  }`}
                >
                  {item}
                </p>
              ))}
            </nav>
          </aside>
          <div className="min-w-0 flex-1 p-5 md:p-6">
            <p className="text-[10px] font-medium uppercase tracking-wider text-emerald-400/80">
              Experimental
            </p>
            <h4 className="mt-2 text-lg font-medium text-white">Agent Status</h4>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/50">
              A structured status surface for enterprise workflows where agency,
              intent, and accountability must remain visible.
            </p>
            <div className="mt-5 rounded-lg border border-white/10 bg-[#111] p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-medium text-white">Reporting Agent</p>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] text-emerald-300">
                  Executing
                </span>
              </div>
              <p className="text-[11px] text-white/55">
                Retrieving revenue metrics from connected systems.
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[58%] rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playground */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] p-4 md:p-5 lg:col-span-5">
        <p className="text-[9px] font-medium uppercase tracking-wider text-white/35">
          Component playground
        </p>
        <div className="mt-3 space-y-2">
          {[
            { label: "State", value: "executing" },
            { label: "Progress", value: "58%" },
            { label: "Show tools", value: "on" },
          ].map((control) => (
            <div
              key={control.label}
              className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-2"
            >
              <span className="text-[11px] text-white/50">{control.label}</span>
              <span className="rounded border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/70">
                {control.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Registry */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] p-4 md:p-5 lg:col-span-5">
        <p className="text-[9px] font-medium uppercase tracking-wider text-white/35">
          Component registry
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-[10px] leading-relaxed text-white/50">
          {`{
  "id": "agent-status",
  "status": "experimental",
  "states": [
    "idle", "planning",
    "executing", "failed"
  ]
}`}
        </pre>
      </div>

      {/* Code example */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] p-4 md:p-5 lg:col-span-12">
        <p className="text-[9px] font-medium uppercase tracking-wider text-white/35">
          Implementation
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-[10px] leading-relaxed text-white/55">
          {`<AgentStatus
  data={{
    agent: { name: "Reporting Agent" },
    state: "executing",
    progress: { kind: "determinate", value: 58 },
  }}
/>`}
        </pre>
      </div>
    </div>
  );
}
