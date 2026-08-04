import { FloatingScreenVideo } from "@/components/ui/FloatingScreenComposition";

export type VideoGalleryItem = {
  title: string;
  description?: string;
  src: string;
  poster?: string;
};

type VideoGalleryProps = {
  heading?: string;
  description?: string;
  items: readonly VideoGalleryItem[];
  layout?: "stack" | "grid" | "pair";
  /** @deprecated Device frames removed — floating screens only */
  deviceFrame?: boolean;
};

export function VideoGallery({
  heading,
  description,
  items,
  layout = "stack",
}: VideoGalleryProps) {
  const isGrid = layout === "grid";
  const isPair = layout === "pair";
  const pairCaptionWidthClass = "max-w-[280px] sm:max-w-[300px]";

  return (
    <div>
      {heading && (
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">
          {heading}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
          {description}
        </p>
      )}

      <div
        className={
          isPair
            ? "mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-8"
            : isGrid
              ? "mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              : "mt-10 space-y-14 md:space-y-20"
        }
      >
        {items.map((item, index) => (
          <figure
            key={item.src}
            className={
              isPair
                ? "flex flex-col items-center"
                : isGrid
                  ? "overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_40px_rgba(10,10,10,0.06)]"
                  : "grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-center lg:gap-12"
            }
          >
            {!isGrid && !isPair && (
              <div>
                <p className="text-label mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <figcaption className="text-[1.125rem] font-medium leading-snug tracking-tight text-ink md:text-[1.25rem]">
                  {item.title}
                </figcaption>
                {item.description && (
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                    {item.description}
                  </p>
                )}
              </div>
            )}

            <div className={isGrid ? "bg-canvas-warm px-4 py-8" : ""}>
              <FloatingScreenVideo
                src={item.src}
                poster={item.poster}
                ariaLabel={item.title}
                size={isPair ? "pair" : "default"}
              />
            </div>

            {isPair && (
              <figcaption
                className={`mt-5 text-center ${pairCaptionWidthClass} mx-auto`}
              >
                <p className="text-[1.0625rem] font-medium leading-snug tracking-tight text-ink">
                  {item.title}
                </p>
                {item.description && (
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                    {item.description}
                  </p>
                )}
              </figcaption>
            )}

            {isGrid && (
              <figcaption className="px-5 py-4">
                <p className="text-[0.9375rem] font-medium text-ink">
                  {item.title}
                </p>
                {item.description && (
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-body">
                    {item.description}
                  </p>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
