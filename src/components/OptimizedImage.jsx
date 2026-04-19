/**
 * OptimizedImage — lazy-loaded, WebP-aware image component
 *
 * Features:
 *  - Native lazy loading (loading="lazy")
 *  - Tiny 4px base64 blur placeholder while loading
 *  - Smooth fade-in on load
 *  - Optional aspect-ratio container to prevent layout shift (CLS)
 *  - decoding="async" to keep main thread free
 */

import { useState } from "react";

/* ── Tiny 4×4 light-gray placeholder (base64 WebP) ── */
const PLACEHOLDER =
  "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoEAAQAAUAmJZQCdAEO/ht0AAD++H3P9z" +
  "T/////pWK/Q//5rPf/Sf//5z9+Lf//5z//f5oAAA==";

/**
 * @param {string}  src          - Image source URL
 * @param {string}  alt          - Alt text
 * @param {string}  className    - CSS classes for the <img>
 * @param {object}  style        - Inline styles for the <img>
 * @param {string}  aspect       - Aspect ratio wrapper, e.g. "16/9" or "4/3" (optional)
 * @param {boolean} eager        - Force eager loading (hero images above the fold)
 * @param {string}  wrapClass    - CSS classes for the wrapper div (when aspect is set)
 */
export default function OptimizedImage({
  src,
  alt = "",
  className = "",
  style = {},
  aspect,
  eager = false,
  wrapClass = "",
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  const img = (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchpriority={eager ? "high" : "auto"}
      className={className}
      style={{
        transition: "opacity 0.4s ease",
        opacity: loaded ? 1 : 0,
        ...style,
      }}
      onLoad={() => setLoaded(true)}
      {...rest}
    />
  );

  if (!aspect) return img;

  /* Aspect-ratio wrapper prevents layout shift */
  const [w, h] = aspect.split("/").map(Number);
  return (
    <div
      className={wrapClass}
      style={{
        position: "relative",
        width: "100%",
        paddingTop: `${(h / w) * 100}%`,
        overflow: "hidden",
        background: `url(${PLACEHOLDER}) center/cover no-repeat`,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={eager ? "high" : "auto"}
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease",
          opacity: loaded ? 1 : 0,
          ...style,
        }}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </div>
  );
}

/**
 * Unsplash URL optimizer — adds WebP format + responsive width
 * Use this helper anywhere you have an Unsplash URL
 *
 * @param {string} url      - Base Unsplash URL
 * @param {number} width    - Desired width in px
 * @param {number} quality  - Quality 1-100 (default 80)
 */
export function optimizeUnsplash(url, width = 800, quality = 80) {
  // Strip existing params
  const base = url.split("?")[0];
  return `${base}?w=${width}&q=${quality}&auto=format&fm=webp&fit=crop`;
}
