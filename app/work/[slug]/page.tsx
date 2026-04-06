import { notFound } from "next/navigation"
import { workProjects } from "@/data/work"
import type { WorkSection } from "@/data/work"
import WorkGallery from "@/app/components/WorkGallery"

export function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = workProjects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: `${project.title} — Henry Yin` }
}

function TextSection({ section }: { section: Extract<WorkSection, { kind: "text" }> }) {
  return (
    <div className="flex flex-col gap-4">
      {section.heading && (
        <p className="type-label text-center">{section.heading}</p>
      )}
      {section.body && (
        <div className="type-body whitespace-pre-line">{section.body}</div>
      )}
      {section.list && section.list.length > 0 && (
        section.listStyle === "numbered" ? (
          <ol className="type-body list-decimal ml-6 space-y-1">
            {section.list.map((item, i) => <li key={i}>{item}</li>)}
          </ol>
        ) : (
          <ul className="type-body list-disc ml-6 space-y-1">
            {section.list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )
      )}
      {section.bodyAfter && (
        <p className="type-body">{section.bodyAfter}</p>
      )}
    </div>
  )
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = workProjects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main>
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 flex flex-col items-center text-center">
  {/* Add mb-8 to increase space below this element only */}
  <span className="type-caption mb-4">Work</span> 
  
  <h1 className="type-display text-center">
    {project.title}
  </h1>
  
  {/* The title and paragraph remain close together */}
  <p className="type-body max-w-[500px] text-center mt-4">{project.description}</p>
</section>


      {/* ── Hero image ───────────────────────────────────────────── */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="bg-surface-card h-64 md:h-96 lg:h-[480px] overflow-hidden w-2/4 mx-auto rounded-[4px]">
          {project.heroImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </section>

      {/* ── Content sections ─────────────────────────────────────── */}
      {project.sections.map((section, i) => {
        if (section.kind === "gallery") {
          return (
            <section key={i} className="px-6 py-12 md:px-12 lg:px-20">
              <WorkGallery section={section} />
            </section>
          )
        }

        if (section.kind === "video") {
          return (
            <section key={i} className="px-6 py-12 md:px-12 lg:px-20">
              <video
                src={section.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            </section>
          )
        }

        return (
          <section key={i} className="px-6 py-8 md:px-12 flex flex-col items-center">
            <div className="max-w-[728px] w-full">
              <TextSection section={section} />
            </div>
          </section>
        )
      })}

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="px-6 py-24 md:px-12 lg:px-20 flex items-end justify-between">
        <div className="flex items-center gap-6">
          <a href="https://x.com/" className="type-body hover:opacity-60 transition-opacity">
            X
          </a>
          <a href="mailto:" className="type-body hover:opacity-60 transition-opacity">
            EMAIL
          </a>
        </div>
        <p className="type-body">2026 HENRY YIN.</p>
      </footer>
    </main>
  )
}
