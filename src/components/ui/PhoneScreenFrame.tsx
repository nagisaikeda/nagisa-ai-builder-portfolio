import { SharpImage } from "@/components/ui/SharpImage";

/** Native export dimensions for Healthii hero screenshots. */
const SCREEN_WIDTH = 472;
const SCREEN_HEIGHT = 1024;

type PhoneScreenFrameProps = {
  height: string;
  cornerRadius?: number;
  className?: string;
  children: React.ReactNode;
};

/** Clips media to a rounded phone screen—white backing prevents black transparent-edge artifacts. */
export function PhoneScreenFrame({
  height,
  cornerRadius = 32,
  className,
  children,
}: PhoneScreenFrameProps) {
  return (
    <figure
      className={`relative shrink-0 overflow-hidden bg-white shadow-[0_2px_8px_rgba(10,10,10,0.04),0_12px_40px_rgba(10,10,10,0.08),0_32px_64px_rgba(10,10,10,0.05)] ${className ?? ""}`}
      style={{
        height,
        aspectRatio: `${SCREEN_WIDTH} / ${SCREEN_HEIGHT}`,
        borderRadius: cornerRadius,
        isolation: "isolate",
      }}
    >
      {children}
    </figure>
  );
}

type PhoneScreenshotProps = {
  src: string;
  alt: string;
  height?: string;
  cornerRadius?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function PhoneScreenshot({
  src,
  alt,
  height = "clamp(480px, 72vh, 680px)",
  cornerRadius = 32,
  priority,
  sizes = "(max-width: 1024px) 44vw, 310px",
  className,
}: PhoneScreenshotProps) {
  return (
    <PhoneScreenFrame
      height={height}
      cornerRadius={cornerRadius}
      className={className}
    >
      <SharpImage
        src={src}
        alt={alt}
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
        priority={priority}
        className="absolute inset-0 h-full w-full bg-white object-contain object-top"
        sizes={sizes}
      />
    </PhoneScreenFrame>
  );
}

type PhoneScreenVideoProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  height?: string;
  cornerRadius?: number;
  className?: string;
};

export function PhoneScreenVideo({
  src,
  poster,
  ariaLabel,
  height = "clamp(480px, 54vh, 620px)",
  cornerRadius = 32,
  className,
}: PhoneScreenVideoProps) {
  return (
    <PhoneScreenFrame
      height={height}
      cornerRadius={cornerRadius}
      className={className}
    >
      <video
        className="absolute inset-0 h-full w-full bg-white object-contain object-top"
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
    </PhoneScreenFrame>
  );
}
