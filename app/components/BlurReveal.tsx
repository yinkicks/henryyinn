"use client"

import { useEffect, useRef } from "react"

export default function BlurReveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.filter = "blur(0px)"
          el.style.opacity = "1"
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        filter: "blur(8px)",
        opacity: 0,
        transition: "filter 0.5s ease, opacity 0.5s ease",
      }}
    >
      {children}
    </div>
  )
}
