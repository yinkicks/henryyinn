"use client"

import { useState, useEffect, useCallback } from "react"

interface GallerySection {
  images: string[]
  layout?: "grid" | "featured-then-pair" | "three-col"
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-[4px]"
        style={{ animation: "lightbox-in 0.2s ease" }}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 type-body text-white hover:opacity-60 transition-opacity"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  )
}

export default function WorkGallery({ section }: { section: GallerySection }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const close = useCallback(() => setLightboxSrc(null), [])

  const imgClass = "w-full h-auto bg-surface-card rounded-[4px] cursor-zoom-in hover:opacity-90 transition-opacity"

  if (section.layout === "featured-then-pair") {
    const [first, ...rest] = section.images
    return (
      <>
        <div className="flex flex-col gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={first} alt="" className={imgClass} onClick={() => setLightboxSrc(first)} />
          {rest.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {rest.map((src, j) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={j} src={src} alt="" className={imgClass} onClick={() => setLightboxSrc(src)} />
              ))}
            </div>
          )}
        </div>
        {lightboxSrc && <Lightbox src={lightboxSrc} onClose={close} />}
      </>
    )
  }

  if (section.layout === "three-col") {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {section.images.map((src, j) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={j} src={src} alt="" className={imgClass} onClick={() => setLightboxSrc(src)} />
          ))}
        </div>
        {lightboxSrc && <Lightbox src={lightboxSrc} onClose={close} />}
      </>
    )
  }

  return (
    <>
      <div className={`grid gap-3 ${section.images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        {section.images.map((src, j) => (
          <div key={j} className="bg-surface-card overflow-hidden h-[500px] rounded-[4px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
              onClick={() => setLightboxSrc(src)}
            />
          </div>
        ))}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={close} />}
    </>
  )
}
