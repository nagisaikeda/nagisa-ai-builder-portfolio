export function AssetPlaceholder({
  label,
  className = "",
  aspect = "aspect-[16/10]",
  dark = false,
}: {
  label: string;
  className?: string;
  aspect?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex ${aspect} w-full items-center justify-center rounded-2xl border border-dashed px-6 text-center ${
        dark
          ? "border-white/20 bg-white/[0.04]"
          : "border-border-strong bg-canvas-warm/60"
      } ${className}`}
      role="img"
      aria-label={label}
    >
      <p
        className={`max-w-md font-mono text-[0.6875rem] leading-relaxed tracking-wide md:text-[0.75rem] ${
          dark ? "text-white/45" : "text-muted"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
