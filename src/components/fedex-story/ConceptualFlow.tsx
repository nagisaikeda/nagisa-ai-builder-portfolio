import type { FedExFlowStep } from "@/lib/case-studies/fedex/types";

export function ConceptualFlow({
  steps,
  dark = false,
}: {
  steps: readonly FedExFlowStep[];
  dark?: boolean;
}) {
  const cols =
    steps.length <= 3
      ? "md:grid-cols-3"
      : steps.length === 4
        ? "md:grid-cols-4"
        : "md:grid-cols-5";

  return (
    <ol className={`grid gap-3 ${cols}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <div
            className={`h-full rounded-xl border px-4 py-5 ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-border bg-surface"
            }`}
          >
            <p
              className={`font-mono text-[0.6875rem] tracking-wide ${
                dark ? "text-white/40" : "text-muted"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3
              className={`mt-3 text-[0.9375rem] font-medium ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                dark ? "text-white/55" : "text-body"
              }`}
            >
              {step.description}
            </p>
          </div>
          {index < steps.length - 1 && (
            <span
              className={`pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-sm md:block ${
                dark ? "text-white/25" : "text-muted-soft"
              }`}
              aria-hidden
            >
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
