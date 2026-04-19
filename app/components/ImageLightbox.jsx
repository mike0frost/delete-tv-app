'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function ImageLightbox({
  images,
  altPrefix = 'Image',
  gridClassName = 'grid-cols-3',
  // aspectClassName is used only when natural={false}
  aspectClassName = 'aspect-square',
  sizes = '33vw',
  // natural=true: images show at their own aspect ratio (no forced crop)
  natural = false,
}) {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);

  const prev = useCallback(() =>
    setOpen((i) => (i > 0 ? i - 1 : images.length - 1)), [images.length]);

  const next = useCallback(() =>
    setOpen((i) => (i < images.length - 1 ? i + 1 : 0)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = open !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const hoverClasses =
    'rounded-2xl overflow-hidden border border-cyan-500/20 group cursor-zoom-in ' +
    'hover:ring-1 hover:ring-cyan-400/60 hover:shadow-[0_0_18px_rgba(34,211,238,0.35)] transition-all duration-300';

  return (
    <>
      <div className={`grid ${gridClassName} gap-3`}>
        {images.map((src, i) =>
          natural ? (
            /* Natural ratio — image drives the height */
            <button key={i} onClick={() => setOpen(i)} className={hoverClasses}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ) : (
            /* Fixed aspect ratio — image is cropped to fill */
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`relative ${aspectClassName} ${hoverClasses}`}
            >
              <Image
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes={sizes}
              />
            </button>
          )
        )}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex flex-col"
          onClick={close}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 shrink-0">
            <span className="text-cyan-500 text-xs tracking-[0.3em] uppercase">
              {open + 1} / {images.length}
            </span>
            <button
              onClick={close}
              className="text-cyan-400 text-xs tracking-[0.3em] uppercase hover:text-cyan-100 transition-colors"
            >
              ✕ Close
            </button>
          </div>

          {/* Image area */}
          <div
            className="flex-1 min-h-0 flex items-center justify-center relative overflow-hidden px-14"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-2 text-cyan-400 text-3xl hover:text-cyan-100 transition-colors z-10 px-3 py-6"
              >
                ‹
              </button>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[open]}
              alt={`${altPrefix} ${open + 1}`}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_60px_rgba(34,211,238,0.15)] ring-1 ring-cyan-500/30"
            />

            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-2 text-cyan-400 text-3xl hover:text-cyan-100 transition-colors z-10 px-3 py-6"
              >
                ›
              </button>
            )}
          </div>

          {/* Bottom padding */}
          <div className="shrink-0 h-4" />

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-cyan-400 text-2xl hover:text-cyan-100 transition-colors z-10 px-3 py-6"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
