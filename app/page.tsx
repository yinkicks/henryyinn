"use client";

import { useEffect, useRef, useState } from "react";

const pastWork = [
  { label: "SUPERPOWER", href: "#" },
  { label: "MARK", href: "#" },
  { label: "SEP — USC FLAGSHIP INCUBATOR", href: "#" },
  { label: "SNEAKERS", href: "#" },
];

const socials = [
  { label: "IG", href: "#" },
  { label: "X", href: "#" },
  { label: "EMAIL", href: "#" },
];

const BIRTH_DATE = new Date(2004, 7, 4); // August 4, 2004
const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

function getAge() {
  return ((Date.now() - BIRTH_DATE.getTime()) / YEAR_MS).toFixed(20);
}

function HoverWord({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls = "text-[#8c8c8c] group-hover:text-[#111] transition-colors";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <span className={cls}>{children}</span>;
}

export default function Home() {
  const [age, setAge] = useState(getAge);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    function tick() {
      setAge(getAge());
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <main className="flex flex-col px-[10vw] pb-16">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-[13.5vw]">
        <div className="flex items-baseline flex-wrap">
          <span className="font-[500] text-[6.875vw] leading-[1.515] tracking-[-0.0175em] whitespace-nowrap">
            Henry is designing&nbsp;
          </span>
          <span className="font-[500] text-[6.875vw] leading-[1.515] tracking-[-0.0175em]">
            health
          </span>
          <span className="font-[500] text-[6.875vw] leading-[1.515] tracking-[-0.0175em]">
            .
          </span>
        </div>
      </section>

      {/* ── Info ─────────────────────────────────────────────── */}
      <section className="flex flex-col gap-12">
        {/* Age counter */}
        <p className="text-[16px] tracking-[0.05em] leading-[1.3] tabular-nums">
          {age}
        </p>

        {/* Two-column body */}
        <div className="flex gap-[96px]">
          {/* Left: bio */}
          <div className="flex-1 flex flex-col gap-6 text-[16px] tracking-[0.05em] leading-[1.3]">
            <div className="flex flex-col gap-2">
              <p className="text-[#111]">CURRENTLY</p>
              <p className="group text-[#8c8c8c]">
                I study at the{" "}
                <HoverWord href="https://iovine-young.usc.edu/">USC Iovine and Young Academy</HoverWord>
                , tinkering with projects related to health, peptides,
                manufacturing, and AI.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#111]">PREVIOUSLY</p>
              <p className="group text-[#8c8c8c]">
                I designed at <HoverWord href="https://superpower.com/">Superpower</HoverWord>, the greatest
                consumer health company.
              </p>
              <p className="group text-[#8c8c8c]">
                I co-founded <HoverWord href="https://mark.engineering/">Mark</HoverWord>, an AI bookmark that
                garnered 10M views on X. My best friend Eason is still working
                on it, currently in manufacturing!
              </p>
              <p className="group text-[#8c8c8c]">
                I led USC's flagship entrepreneurship society,{" "}
                <HoverWord href="https://uscsep.com/">SEP</HoverWord>, and helped incubate 7 startups.
              </p>
              <p className="group text-[#8c8c8c]">
                I grew up in Sydney, Australia, the happiest place in the world.
                I built a 6 figure{" "}
                <HoverWord href="https://quilt-eater-d49.notion.site/Sneaker-Business-32ea31bc001080558d8feeed7a0fcdd9?source=copy_link">sneaker business</HoverWord> when I was in high
                school.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#111]">RECENTLY</p>
              <p className="text-[#8c8c8c]">
                DJing, making films, reading, training.
              </p>
            </div>
          </div>

          {/* Right: portfolio */}
          <div className="flex-1 flex flex-col gap-2">
            <a
              href="https://quilt-eater-d49.notion.site/henryswork?source=copy_link"
              className="text-[16px] tracking-[0.05em] uppercase leading-[1.5] text-[#111]"
            >
              MY WORK // portfolio
            </a>
            <div className="flex flex-col gap-1">
              {pastWork.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[16px] tracking-[0.05em] uppercase leading-[1.5] text-[#8c8c8c] hover:text-[#111] transition-colors"
                >
                  {label}
                </a>
              ))}
              <span className="text-[16px] tracking-[0.05em] uppercase leading-[1.5] text-[#8c8c8c] hover:text-[#111] transition-colors cursor-pointer">
                More
              </span>
            </div>
          </div>
        </div>

        {/* Footer: social links */}
        <div className="flex gap-6">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[16px] tracking-[0.05em] uppercase leading-[1.5] text-[#111] hover:text-[#8c8c8c] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
