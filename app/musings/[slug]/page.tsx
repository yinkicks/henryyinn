import { notFound } from "next/navigation"
import { musings } from "@/data/musings"
import type { MusingSection } from "@/data/musings"
import BlurReveal from "@/app/components/BlurReveal"

export function generateStaticParams() {
  return musings.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const musing = musings.find((m) => m.slug === slug)
  if (!musing) return {}
  return { title: `${musing.title} — Henry Yin` }
}

function RuleSection({ section }: { section: MusingSection }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="type-label">{section.heading}</p>
      <ul className="flex flex-col gap-1">
        {section.bullets.map((bullet, i) => (
          <li key={i} className="type-body">{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default async function MusingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const musing = musings.find((m) => m.slug === slug)
  if (!musing) notFound()

  return (
    <main>
      {/* -- Header -------------------------------------------------- */}
      <BlurReveal>
        <section className="px-6 py-16 md:px-12 flex flex-col items-center text-center">
          <span className="type-caption mb-4">Musings{musing.date ? ` - ${musing.date}` : ""}</span>
          <h1 className="type-display text-center">{musing.title}</h1>
          <p className="type-body max-w-[500px] text-center mt-4">{musing.subtitle}</p>
        </section>
      </BlurReveal>

      {/* -- Hero image ---------------------------------------------- */}
      <BlurReveal>
        <section className="px-6 pb-8 md:px-12 lg:px-20">
          <div className="bg-surface-card h-64 md:h-96 lg:h-[480px] overflow-hidden w-full md:w-2/4 mx-auto rounded-[4px]">
            {musing.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={musing.coverImage}
                alt={musing.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </section>
      </BlurReveal>

      {/* -- Body paragraphs ----------------------------------------- */}
      {musing.body.length > 0 && (
        <BlurReveal>
          <section className="px-6 py-8 md:px-12 lg:px-20">
            <div className="w-full md:w-2/4 mx-auto flex flex-col gap-4">
              {musing.body.map((paragraph, i) => (
                <p key={i} className="type-body">{paragraph}</p>
              ))}
            </div>
          </section>
        </BlurReveal>
      )}

      {/* -- Structured sections (e.g. rules) ------------------------ */}
      {musing.sections && musing.sections.length > 0 && (
        <BlurReveal>
          <section className="px-6 py-8 md:px-12 lg:px-20">
            <div className="w-full md:w-2/4 mx-auto flex flex-col gap-8">
              {musing.sections.map((section, i) => (
                <RuleSection key={i} section={section} />
              ))}
            </div>
          </section>
        </BlurReveal>
      )}

      {/* -- Footer -------------------------------------------------- */}
      <footer className="px-6 py-24 md:px-12 lg:px-20 flex items-end justify-between">
        <div className="flex items-center gap-4">
          <a href="https://x.com/Henryyinn" target="_blank" rel="noopener noreferrer" className="type-label hover:opacity-60 transition-opacity">
            X
          </a>
          <a href="https://www.linkedin.com/in/henrysyin/" target="_blank" rel="noopener noreferrer" className="type-label hover:opacity-60 transition-opacity">
            LinkedIn
          </a>
          <a href="mailto:henrysih@usc.edu" className="type-label hover:opacity-60 transition-opacity">
            Email
          </a>
        </div>
        <p className="type-label">2026 HENRY YIN.</p>
      </footer>
    </main>
  )
}
