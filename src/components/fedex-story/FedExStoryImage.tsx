import { SharpImage } from "@/components/ui/SharpImage";
import type { FedExVisual } from "@/lib/case-studies/fedex/types";

export function FedExStoryImage({
  visual,
  className = "",
  aspect = "aspect-[16/9]",
  dark = false,
  priority = false,
  sizes = "(max-width: 1120px) 100vw, 1120px",
}: {
  visual: FedExVisual;
  className?: string;
  aspect?: string;
  dark?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-2xl border shadow-[0_12px_40px_rgba(10,10,10,0.06)] ${aspect} ${
          dark ? "border-white/10" : "border-border"
        }`}
      >
        <SharpImage
          src={visual.src}
          alt={visual.alt}
          fill
          priority={priority}
          unoptimized
          className="object-cover object-top"
          sizes={sizes}
        />
      </div>
      {visual.caption && (
        <figcaption
          className={`mt-3 text-mono-sm ${dark ? "text-white/40" : "text-muted"}`}
        >
          {visual.caption}
        </figcaption>
      )}
    </figure>
  );
}
