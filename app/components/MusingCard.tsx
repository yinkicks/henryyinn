import Link from "next/link"
import type { Musing } from "@/data/musings"

export default function MusingCard({ musing }: { musing: Musing }) {
  return (
    <Link
      href={`/musings/${musing.slug}`}
      className="flex flex-col gap-1 -mx-3 px-3 py-4 hover:bg-[#f5f5f5] transition-colors"
    >
      <p className="type-label">{musing.title}</p>
      <p className="type-body">{musing.subtitle}</p>
      <p className="type-caption">{musing.year}</p>
    </Link>
  )
}
