import { SharpImage } from "@/components/ui/SharpImage";
import type { FedExVisual } from "@/lib/case-studies/fedex/types";
import { CASE_STUDY_HERO_IMAGE_SIZES } from "@/lib/image-sizes";

export function FedExStoryImage({
  visual,
  className = "",
  aspect = "aspect-[16/9]",
  dark = false,
  priority = false,
  sizes = CASE_STUDY_HERO_IMAGE_SIZES,
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
        {/* High-resolution source assets are required for Retina displays; Next.js optimization cannot upscale beyond the source dimensions. */}
        <SharpImage
          src={visual.src}
          alt={visual.alt}
          fill
          priority={priority}
          quality={90}
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
