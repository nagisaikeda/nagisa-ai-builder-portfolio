import Image, { type ImageProps } from "next/image";

type SharpImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fill?: boolean;
};

function isSvgSrc(src: string) {
  return src.split("?")[0]?.toLowerCase().endsWith(".svg") ?? false;
}

/** Renders SVGs with a native img so vectors stay crisp at any DPR. */
export function SharpImage({
  src,
  alt,
  className,
  fill,
  sizes,
  unoptimized,
  quality,
  ...rest
}: SharpImageProps) {
  if (isSvgSrc(src)) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full ${className ?? ""}`}
          decoding="async"
          draggable={false}
        />
      );
    }

    const width = typeof rest.width === "number" ? rest.width : undefined;
    const height = typeof rest.height === "number" ? rest.height : undefined;

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        decoding="async"
        draggable={false}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      unoptimized={unoptimized}
      quality={quality}
      {...rest}
    />
  );
}
