import WorkCard from "./components/WorkCard"
import MusingCard from "./components/MusingCard"
import HeroVideo from "./components/HeroVideo"
import BlurReveal from "./components/BlurReveal"
import { workProjects } from "@/data/work"
import { musings } from "@/data/musings"

const sortedMusings = [...musings].sort((a, b) => {
  const parse = (m: typeof musings[number]) =>
    m.date ? new Date(m.date).getTime() : new Date(m.year).getTime()
  return parse(b) - parse(a)
})

export default function Home() {
  return (
    <main>
      {/* -- Hero video ---------------------------------------------- */}
      <section className="px-6 py-12 md:px-12 lg:px-36">
        <HeroVideo />
      </section>

      {/* -- Henry's Room -------------------------------------------- */}
      <BlurReveal>
        <section id="about" className="px-6 py-12 md:px-12 lg:px-32 flex flex-col items-center gap-8 max-w-[2000px] mx-auto text-center">
          <h1 className="type-display text-center">A collection of design, work, & musings that make up me.</h1>

          <div className="flex flex-col gap-4 max-w-[550px] text-center">

            <p className="type-body">
              G'day, I'm Henry. I currently study at the USC Iovine and Young Academy, tinkering
              with design projects in health, peptides, manufacturing, and AI.
            </p>
            <p className="type-body">
              I grew up in Sydney, Australia, the happiest place in the world. In my free time I'm reading, DJing, making films, and training.
            </p>

          </div>


        </section>
      </BlurReveal>

      {/* -- Work ---------------------------------------------------- */}
      <BlurReveal>
        <section id="work" className="px-6 py-16 md:px-12 lg:px-20 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="type-label">Work</span>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-16">
            {workProjects.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </BlurReveal>

      
      {/* -- Musings ------------------------------------------------- */}
      <BlurReveal>
        <section id="musings" className="px-6 py-12 md:px-12 lg:px-20 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="type-label">Musings</span>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-1">
            {sortedMusings.map((musing) => (
              <MusingCard key={musing.slug} musing={musing} />
            ))}
          </div>
        </section>
      </BlurReveal>

      {/* -- Footer -------------------------------------------------- */}
      <footer id="contact" className="px-6 py-24 md:px-12 lg:px-20 flex items-end justify-between">
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
