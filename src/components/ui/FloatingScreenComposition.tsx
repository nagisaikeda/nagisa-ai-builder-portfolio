import { PhoneScreenVideo } from "@/components/ui/PhoneScreenFrame";

const FLOATING_SHADOW =
  "shadow-[0_2px_8px_rgba(10,10,10,0.04),0_12px_40px_rgba(10,10,10,0.08),0_32px_64px_rgba(10,10,10,0.05)]";

type FloatingScreenCompositionProps = {
  videos: readonly string[];
  posters?: readonly (string | undefined)[];
  ariaLabels?: readonly string[];
  compact?: boolean;
  /** Equal-sized screens side by side (default for 2+ videos). */
  layout?: "equal" | "editorial";
  /**
   * When false, videos already include device chrome — render them directly
   * at equal height with no outer white screen frame.
   */
  deviceFrame?: boolean;
};

/** Videos that already include the phone body — size to the asset, no white mock. */
function EqualNativePhonePair({
  videos,
  posters,
  ariaLabels,
  compact,
}: {
  videos: readonly string[];
  posters?: readonly (string | undefined)[];
  ariaLabels?: readonly string[];
  compact?: boolean;
}) {
  const heightClass = compact
    ? "h-[min(260px,36vh)]"
    : "h-[min(360px,46vh)] md:h-[min(380px,48vh)]";

  return (
    <div
      className={`flex h-full w-full items-center justify-center gap-5 sm:gap-7 ${
        compact ? "px-4 py-8" : "px-6 py-10 md:px-10 md:py-12"
      }`}
    >
      {videos.slice(0, 2).map((src, index) => (
        <video
          key={src}
          className={`${heightClass} w-auto max-w-[min(200px,44%)] object-contain drop-shadow-[0_12px_32px_rgba(10,10,10,0.12)]`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posters?.[index]}
          aria-label={ariaLabels?.[index] ?? "App preview"}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}

function EqualScreenPair({
  videos,
  posters,
  ariaLabels,
  compact,
}: {
  videos: readonly string[];
  posters?: readonly (string | undefined)[];
  ariaLabels?: readonly string[];
  compact?: boolean;
}) {
  const height = compact
    ? "clamp(220px, 32vh, 300px)"
    : "clamp(300px, 42vh, 420px)";

  return (
    <div
      className={`flex h-full w-full items-center justify-center gap-4 sm:gap-6 ${
        compact ? "px-4 py-8" : "px-6 py-10 md:px-10 md:py-12"
      }`}
    >
      {videos.slice(0, 2).map((src, index) => (
        <PhoneScreenVideo
          key={src}
          src={src}
          poster={posters?.[index]}
          ariaLabel={ariaLabels?.[index] ?? "App preview"}
          height={height}
          cornerRadius={30}
          className={FLOATING_SHADOW}
        />
      ))}
    </div>
  );
}

function screenHeights(compact?: boolean) {
  return {
    hero: compact
      ? "clamp(260px, 36vh, 360px)"
      : "clamp(360px, 48vh, 520px)",
    supporting: compact
      ? "clamp(180px, 26vh, 260px)"
      : "clamp(220px, 32vh, 340px)",
    tertiary: compact
      ? "clamp(150px, 22vh, 220px)"
      : "clamp(190px, 28vh, 280px)",
  };
}

export function FloatingScreenComposition({
  videos,
  posters,
  ariaLabels,
  compact,
  layout = "equal",
  deviceFrame = true,
}: FloatingScreenCompositionProps) {
  const heights = screenHeights(compact);
  const [hero, second, third] = videos;

  if (!hero) return null;

  if (videos.length === 1) {
    if (!deviceFrame) {
      return (
        <EqualNativePhonePair
          videos={videos}
          posters={posters}
          ariaLabels={ariaLabels}
          compact={compact}
        />
      );
    }

    return (
      <div
        className={`flex w-full items-center justify-center ${
          compact ? "px-4 py-8" : "px-8 py-12 md:px-12 md:py-14"
        }`}
      >
        <PhoneScreenVideo
          src={hero}
          poster={posters?.[0]}
          ariaLabel={ariaLabels?.[0] ?? "App preview"}
          height={heights.hero}
          cornerRadius={30}
          className={FLOATING_SHADOW}
        />
      </div>
    );
  }

  if (layout === "equal") {
    if (!deviceFrame) {
      return (
        <EqualNativePhonePair
          videos={videos}
          posters={posters}
          ariaLabels={ariaLabels}
          compact={compact}
        />
      );
    }

    return (
      <EqualScreenPair
        videos={videos}
        posters={posters}
        ariaLabels={ariaLabels}
        compact={compact}
      />
    );
  }

  return (
    <div
      className={`relative mx-auto w-full ${
        compact
          ? "max-w-[360px] px-4 py-8 min-h-[min(320px,42vh)]"
          : "max-w-[620px] px-8 py-12 md:max-w-[680px] md:px-10 md:py-14 min-h-[min(440px,52vh)]"
      }`}
    >
      <div className="relative z-10 flex justify-start pl-[2%] md:pl-[4%]">
        <PhoneScreenVideo
          src={hero}
          poster={posters?.[0]}
          ariaLabel={ariaLabels?.[0] ?? "App preview"}
          height={heights.hero}
          cornerRadius={30}
          className={FLOATING_SHADOW}
        />
      </div>

      {second && (
        <div
          className={`absolute z-20 ${
            compact
              ? "right-[0%] bottom-[6%]"
              : "right-[2%] bottom-[8%] md:right-[4%] md:bottom-[10%]"
          }`}
        >
          <PhoneScreenVideo
            src={second}
            poster={posters?.[1]}
            ariaLabel={ariaLabels?.[1] ?? "App preview"}
            height={heights.supporting}
            cornerRadius={28}
            className={`${FLOATING_SHADOW} ring-1 ring-white/90`}
          />
        </div>
      )}

      {third && (
        <div
          className={`absolute z-[15] hidden sm:block ${
            compact
              ? "right-[22%] top-[4%]"
              : "right-[20%] top-[6%] md:right-[24%]"
          }`}
        >
          <PhoneScreenVideo
            src={third}
            poster={posters?.[2]}
            ariaLabel={ariaLabels?.[2] ?? "App preview"}
            height={heights.tertiary}
            cornerRadius={28}
            className={`${FLOATING_SHADOW} opacity-[0.92] ring-1 ring-white/70`}
          />
        </div>
      )}
    </div>
  );
}

/** Single floating screen for case study sections and grids. */
export function FloatingScreenVideo({
  src,
  poster,
  ariaLabel,
  size = "default",
}: {
  src: string;
  poster?: string;
  ariaLabel: string;
  size?: "default" | "pair" | "card";
}) {
  const height =
    size === "card"
      ? "clamp(280px, 38vh, 400px)"
      : size === "pair"
        ? "clamp(340px, 46vh, 480px)"
        : "clamp(380px, 52vh, 560px)";

  return (
    <div className="flex w-full justify-center px-2 py-2">
      <PhoneScreenVideo
        src={src}
        poster={poster}
        ariaLabel={ariaLabel}
        height={height}
        cornerRadius={30}
        className={FLOATING_SHADOW}
      />
    </div>
  );
}
