import React from "react";
import Image from 'next/image';

/**
 * A responsive picture component that generates WebP sources with fallback.
 * Creates a srcset of WebP images based on min/max/step width parameters.
 *
 * @param alt       - [optional] Alt text for the image (default: "")
 * @param base      - Base path for the image without extension (e.g., "/images/photo" if you have "/images/photo-100w.webp" and "/images/photo-200w.webp" etc)
 * @param className - [optional] Additional CSS class for the picture element (default: "")
 * @param loading   - [optional] Loading strategy for the image (default: "lazy")
 * @param max       - Maximum width in pixels for responsive images
 * @param min       - Minimum width in pixels for responsive images
 * @param sizes     - [optional] Sizes attribute for responsive images (default: "100vw")
 * @param step      - Width increment between generated image sizes
 */
export default function Picture({
  alt = "",
  base,
  className = "",
  loading = "lazy",
  max,
  min,
  sizes = "100vw",
  step,
}) {
  //Create srcset string for WebP images

  let webpSrcset = [];

  for (let width = parseInt(min); width <= parseInt(max); width += parseInt(step)) {
    webpSrcset.push(`${base}-${width}w.webp ${width}w`);
  }

  webpSrcset = webpSrcset.join(", ");



  return <picture className={className}>
    <source
      srcSet={webpSrcset}
      sizes={sizes}
      type="image/webp"
    />
    <Image
      src={`${base}.png`}
      alt={alt}
      loading={loading}
    />
  </picture>;
}

