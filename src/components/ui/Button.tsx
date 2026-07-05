import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium tracking-tight transition-all duration-200";
  const styles = {
    primary: "bg-ink text-canvas-warm hover:bg-ink-soft",
    secondary:
      "border border-border-strong bg-surface text-ink hover:bg-canvas-warm",
    ghost: "text-ink hover:opacity-60",
  }[variant];

  const className = `${base} ${styles}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
