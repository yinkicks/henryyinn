"use client"

import { useRouter, usePathname } from "next/navigation"

const navLinks = [
  { label: "About", href: "about" },
  { label: "Work", href: "work" },
  { label: "Musings", href: "musings" },
]

function smoothScrollTo(id: string | null, delay = 120) {
  setTimeout(() => {
    const target = id ? document.getElementById(id) : null
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, delay)
}

export default function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === "/"

  function handleLogoClick(e: React.MouseEvent) {
    e.preventDefault()
    if (isHome) {
      smoothScrollTo(null)
    } else {
      router.push("/")
    }
  }

  function handleNavClick(e: React.MouseEvent, id: string) {
    e.preventDefault()
    if (isHome) {
      smoothScrollTo(id)
    } else {
      router.push(`/#${id}`)
    }
  }

  function handleContactClick(e: React.MouseEvent) {
    e.preventDefault()
    if (isHome) {
      smoothScrollTo("contact")
    } else {
      router.push("/#contact")
    }
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        {/* Logo + nav pills */}
        <div className="flex items-center gap-16">
          <a
            href="/"
            onClick={handleLogoClick}
            className="type-nav-brand cursor-pointer"
          >
            HENRY'S ROOM
          </a>

          {/* Pills — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={`/#${href}`}
                onClick={(e) => handleNavClick(e, href)}
                className="type-label px-2 py-2 bg-white/10 backdrop-blur-[200px] hover:bg-[#f5f5f5]/100 transition-colors cursor-pointer"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="/#contact"
          onClick={handleContactClick}
          className="type-label hover:opacity-60 transition-opacity cursor-pointer"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
