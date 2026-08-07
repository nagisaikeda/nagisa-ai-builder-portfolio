"use client";

type FedExStoryVideoProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  className?: string;
  aspect?: string;
};

export function FedExStoryVideo({
  src,
  poster,
  ariaLabel,
  className = "",
  aspect = "aspect-[16/9]",
}: FedExStoryVideoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-black shadow-[0_12px_40px_rgba(10,10,10,0.06)] ${aspect} ${className}`}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={ariaLabel}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
