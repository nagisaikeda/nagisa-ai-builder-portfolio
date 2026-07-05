type CardVideoGalleryProps = {
  videos: readonly string[];
  posters?: readonly (string | undefined)[];
  compact?: boolean;
  deviceFrame?: boolean;
};

function CardVideo({
  src,
  poster,
  deviceFrame,
}: {
  src: string;
  poster?: string;
  deviceFrame: boolean;
}) {
  if (!deviceFrame) {
    return (
      <div className="flex min-h-0 flex-1 justify-center">
        <video
          className="block h-auto w-full max-w-[180px] max-h-[min(320px,42vh)] object-contain sm:max-w-[200px] sm:max-h-[min(340px,45vh)]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  const sizeClass =
    "h-[min(320px,42vh)] w-[min(155px,calc(min(320px,42vh)*9/19.5))] sm:h-[min(340px,45vh)] sm:w-[min(165px,calc(min(340px,45vh)*9/19.5))]";

  return (
    <div className="flex min-h-0 flex-1 justify-center">
      <div className={sizeClass}>
        <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-black shadow-[0_12px_32px_rgba(10,10,10,0.1)]">
          <video
            className="absolute inset-0 h-full w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            aria-hidden
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export function CardVideoGallery({
  videos,
  posters,
  compact,
  deviceFrame = true,
}: CardVideoGalleryProps) {
  const minH = deviceFrame
    ? compact
      ? "md:min-h-[280px]"
      : "md:min-h-[340px]"
    : compact
      ? "md:min-h-[240px]"
      : "md:min-h-[280px]";

  return (
    <div
      className={`flex min-h-[200px] self-stretch items-center justify-center bg-white px-4 py-6 sm:px-6 md:px-8 ${minH}`}
    >
      <div className="flex w-full max-w-[400px] flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row sm:gap-5">
        {videos.slice(0, 2).map((src, index) => (
          <CardVideo
            key={src}
            src={src}
            poster={posters?.[index]}
            deviceFrame={deviceFrame}
          />
        ))}
      </div>
    </div>
  );
}
