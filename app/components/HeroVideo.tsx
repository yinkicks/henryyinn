"use client"

import { useEffect, useRef, useState } from "react"

// Module-level flag: false on hard reload (module re-evaluates), true after
// first client-side mount — so subsequent SPA navigations skip the video overlay.
let heroHasPlayed = false

export default function HeroVideo() {
  // Read before setting — first mount sees false (hard load), later mounts see true (client nav)
  const [isClientNav] = useState(() => {
    const wasPlayed = heroHasPlayed
    heroHasPlayed = true
    return wasPlayed
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const whiteRef = useRef<HTMLDivElement>(null)

  // On client nav: video overlay is skipped entirely, in-page video is immediately visible
  const [overlayRemoved, setOverlayRemoved] = useState(isClientNav)
  const [inPageVisible, setInPageVisible] = useState(isClientNav)
  const [whiteRemoved, setWhiteRemoved] = useState(false)

  useEffect(() => {
    // Skip all animation for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOverlayRemoved(true)
      setInPageVisible(true)
      setWhiteRemoved(true)
      return
    }

    let shrinkTimer: ReturnType<typeof setTimeout>
    let fadeTimer: ReturnType<typeof setTimeout>
    let removeTimer: ReturnType<typeof setTimeout>
    let whiteRemoveTimer: ReturnType<typeof setTimeout>

    // Always: fade out the white overlay (blur-to-clear)
    const white = whiteRef.current
    if (white) {
      requestAnimationFrame(() => {
        white.style.transition = "opacity 0.7s ease, backdrop-filter 0.7s ease"
        white.style.opacity = "0"
        white.style.backdropFilter = "blur(0px)"
      })
      whiteRemoveTimer = setTimeout(() => setWhiteRemoved(true), 750)
    }

    // Hard load only: fullscreen video shrinks into container
    if (!isClientNav) {
      shrinkTimer = setTimeout(() => {
        const container = containerRef.current
        const overlay = overlayRef.current
        if (!container || !overlay) return

        const rect = container.getBoundingClientRect()

        overlay.style.transition = [
          "top 1s cubic-bezier(0.76, 0, 0.24, 1)",
          "left 1s cubic-bezier(0.76, 0, 0.24, 1)",
          "width 1s cubic-bezier(0.76, 0, 0.24, 1)",
          "height 1s cubic-bezier(0.76, 0, 0.24, 1)",
          "border-radius 1s cubic-bezier(0.76, 0, 0.24, 1)",
        ].join(", ")

        requestAnimationFrame(() => {
          overlay.style.top = `${rect.top}px`
          overlay.style.left = `${rect.left}px`
          overlay.style.width = `${rect.width}px`
          overlay.style.height = `${rect.height}px`
          overlay.style.borderRadius = "4px"
        })

        fadeTimer = setTimeout(() => {
          const overlay = overlayRef.current
          if (overlay) {
            overlay.style.transition = "opacity 0.25s ease"
            overlay.style.opacity = "0"
          }
          setInPageVisible(true)

          removeTimer = setTimeout(() => {
            setOverlayRemoved(true)
          }, 250)
        }, 1000)
      }, 800)
    }

    return () => {
      clearTimeout(shrinkTimer)
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      clearTimeout(whiteRemoveTimer)
    }
  }, [isClientNav])

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-[4px] bg-surface-card w-full aspect-video relative"
    >
      {/* In-page video — always mounted so it buffers; fades in after overlay leaves */}
      <video
        src="/videos/Henrysroom_HeroVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: inPageVisible ? 1 : 0,
          transition: inPageVisible ? "opacity 0.25s ease" : "none",
          willChange: "transform",
        }}
      />

      {/* Fixed fullscreen video overlay — hard load only */}
      {!overlayRemoved && (
        <div
          ref={overlayRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 100,
            overflow: "hidden",
            borderRadius: 8,
            willChange: "top, left, width, height, border-radius",
          }}
        >
          <video
            src="/videos/Henrysroom_HeroVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* White blurred intro — always shown, fades out on every visit */}
      {!whiteRemoved && (
        <div
          ref={whiteRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 101,
            background: "white",
            backdropFilter: "blur(20px)",
            opacity: 1,
          }}
        />
      )}
    </div>
  )
}
