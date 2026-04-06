"use client"

import { useEffect } from "react"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Prevent browser scroll restoration from landing mid-page on reload.
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return <>{children}</>
}
