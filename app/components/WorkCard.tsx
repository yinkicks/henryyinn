import Link from "next/link"
import type { WorkProject } from "@/data/work"

export default function WorkCard({ project }: { project: WorkProject }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col gap-4">
      {/* Cover image */}
      <div className="bg-surface-card overflow-hidden rounded-[4px] h-64 md:h-96 lg:h-[480px] relative">
        {project.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.coverImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.015]"
          />
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-2">
        <p className="type-label">{project.title}</p>
        <p className="type-body">{project.subtitle}</p>
        <div className="flex items-center gap-2">
          <span className="type-caption">{project.role}</span>
          <span className="size-1 rounded-full bg-ink-muted shrink-0" />
          <span className="type-caption">{project.year}</span>
        </div>
      </div>
    </Link>
  )
}
