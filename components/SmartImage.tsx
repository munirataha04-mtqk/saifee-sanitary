"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; alt: string; className?: string; priority?: boolean };

// Shows the photo if it exists. If the file is missing, shows a neat navy box with the label.
export default function SmartImage({ src, alt, className = "", priority = false }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-[#0d2b4d] to-[#06172B] p-3 text-center text-xs text-[#E9AD43]/70 ${className}`}
      >
        {alt}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}