import { FloatingScreenComposition } from "@/components/ui/FloatingScreenComposition";

type CardVideoGalleryProps = {
  videos: readonly string[];
  posters?: readonly (string | undefined)[];
  compact?: boolean;
  /**
   * When false, videos already include device chrome — no outer white screen frame.
   * Defaults to true (floating screen / framed presentation).
   */
  deviceFrame?: boolean;
};

export function CardVideoGallery({
  videos,
  posters,
  compact,
  deviceFrame = true,
}: CardVideoGalleryProps) {
  return (
    <div
      className={`flex h-full min-h-0 w-full max-w-full items-center justify-center overflow-hidden bg-white ${
        compact ? "min-h-[280px]" : "min-h-[340px] md:min-h-[400px]"
      }`}
    >
      <FloatingScreenComposition
        videos={videos}
        posters={posters}
        compact={compact}
        deviceFrame={deviceFrame}
      />
    </div>
  );
}
