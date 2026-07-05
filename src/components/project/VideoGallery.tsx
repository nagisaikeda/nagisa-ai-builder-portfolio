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
  /** When false, videos render without an outer device bezel (use for screen recordings that already include the phone UI). */
  deviceFrame?: boolean;
};

/** iPhone display aspect ratio (~19.5:9). */
const IPHONE_ASPECT = "9 / 19.5";

function VideoPanel({
  children,
  deviceFrame,
  size = "default",
}: {
  children: React.ReactNode;
  deviceFrame: boolean;
  size?: "default" | "pair" | "card";
}) {
  const framelessWidthClass =
    size === "pair"
      ? "w-full max-w-[220px] sm:max-w-[240px]"
      : size === "card"
        ? "w-full max-w-[180px] sm:max-w-[200px]"
        : "w-full max-w-[300px] sm:max-w-[320px]";

  if (!deviceFrame) {
    return (
      <div className="flex w-full justify-center">
        <div className={framelessWidthClass}>{children}</div>
      </div>
    );
  }

  const widthClass =
    size === "pair"
      ? "h-[min(400px,52vh)] w-[min(194px,calc(min(400px,52vh)*9/19.5))] sm:h-[min(420px,55vh)] sm:w-[min(206px,calc(min(420px,55vh)*9/19.5))]"
      : size === "card"
        ? "w-full max-w-[160px] sm:max-w-[180px]"
        : "w-full max-w-[300px] sm:max-w-[320px]";

  const maxHeight = size === "card" ? 340 : undefined;

  const inner = (
    <div
      className={`relative ${size === "pair" ? "h-full w-full" : "w-full"} rounded-[1.25rem] bg-black`}
      style={size === "pair" ? undefined : { aspectRatio: IPHONE_ASPECT, maxHeight }}
    >
      {children}
    </div>
  );

  return (
    <div className="flex w-full justify-center">
      <div className={widthClass}>
        <div className="overflow-hidden rounded-[2rem] border-[8px] border-ink/90 bg-ink p-1 shadow-[0_24px_60px_rgba(10,10,10,0.12)]">
          {inner}
        </div>
      </div>
    </div>
  );
}

export function VideoGallery({
  heading,
  description,
  items,
  layout = "stack",
  deviceFrame = true,
}: VideoGalleryProps) {
  const isGrid = layout === "grid";
  const isPair = layout === "pair";
  const pairCaptionWidthClass = deviceFrame
    ? "max-w-[206px]"
    : "max-w-[220px] sm:max-w-[240px]";

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
              <VideoPanel
                deviceFrame={deviceFrame}
                size={isPair ? "pair" : "default"}
              >
                <video
                  className={
                    deviceFrame
                      ? "absolute inset-0 h-full w-full object-contain"
                      : "block h-auto w-full max-h-[min(420px,55vh)] object-contain"
                  }
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={!isPair}
                  preload="metadata"
                  poster={item.poster}
                  aria-label={item.title}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </VideoPanel>
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
