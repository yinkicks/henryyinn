export type WorkSection =
  | {
      kind: "text"
      heading: string
      body?: string
      list?: string[]
      listStyle?: "bullet" | "numbered"
      bodyAfter?: string
    }
  | {
      kind: "gallery"
      images: string[]
      // "grid": equal-height cropped 2-col grid (default)
      // "featured-then-pair": first image full-width natural height, rest side-by-side natural height
      // "three-col": 3 images in one row, natural height
      layout?: "grid" | "featured-then-pair" | "three-col"
    }
  | {
      kind: "video"
      src: string
    }

export type WorkProject = {
  slug: string
  title: string
  subtitle: string
  role: string
  year: string
  coverImage: string
  heroImage: string
  description: string
  sections: WorkSection[]
}

export const workProjects: WorkProject[] = [
  {
    slug: "superpower",
    title: "Superpower",
    subtitle: "The Future of Healthcare",
    role: "Design",
    year: "2025–2026",
    coverImage: "/images/work/superpower-hero.jpg",
    heroImage: "/images/work/superpower-hero.jpg",
    description:
      "Superpower Health is a $300M Series A startup backed by Forerunner, Giannis Antetokounmpo, and Steve Aoki. I was the first design intern.",
    sections: [
      {
        kind: "text",
        heading: "The Why",
        body: `Superpower was a company I've always admired. It was started by a fellow Australian named Max who, in Sydney, is like startup Jesus. After experiencing a recent family passing, I came to understand that nothing really mattered in life besides our own health and the health of our loved ones. I believed in Max, Jacob, and Kevin's mission of providing personalized, preventative, performance enhancing for all.\n\nPaired with the beautiful emphasis in design that no other company in the valley held, I knew I needed to be here to learn from the best. Max and Hannah, our head of design, gave me a chance that I will forever be grateful for.`,
      },
      {
        kind: "text",
        heading: "My Work",
        body: `At Superpower, I had touch points across performance marketing, growth, branding, and product. This came in the form of paid ads that had up to $50k+ spent per ad, email campaigns, landing pages for growth initiatives, social media posts, videos and highlights, product flow explorations, newsletter graphics, and creative rebranding directions.\n\nSome things I learned:`,
        list: [
          "How a high performing consumer startup functions",
          "Effective leadership and communication",
          "The importance of a mission and a \"why\"",
          "Taste",
          "Combination of function and aesthetics in design",
          "Performance marketing",
          "The flexible and fast paced nature of company building",
          "Importance of copy writing",
          "Radical empowerment — anyone at a company can be the most important person.",
        ],
        listStyle: "bullet",
      },
      {
        kind: "gallery",
        layout: "featured-then-pair",
        images: [
          "/images/work/superpower-1.jpg",
          "/images/work/superpower-2.jpg",
          "/images/work/superpower-3.jpg",
        ],
      },
    ],
  },
  {
    slug: "mark",
    title: "Mark",
    subtitle: "The Physical AI Bookmark",
    role: "Co-Founder",
    year: "2025",
    coverImage: "/images/work/mark-hero.jpg",
    heroImage: "/images/work/mark-hero.jpg",
    description:
      "Mark is a $129 AI hardware bookmark that enables physical book readers to extract the full value out of reading. It garnered 10M+ views on X, 10k waitlist.",
    sections: [
      {
        kind: "text",
        heading: "The Why",
        body: `I've always been obsessed with becoming my best self. The key to getting there intellectually? Reading. The problem was that I struggled to retain what I in-took, sometimes even the very next day. So I asked myself:\n\nHow can I solve this problem while building something I love — beautifully designed consumer products?\n\nColliding with the trend of hardware products on X doing incredibly well, I knew this was going to be explosive. I teamed up with my best mate Eason, and we got to work.`,
      },
      {
        kind: "text",
        heading: "Press",
        body: `Mark garnered 15M+ views across X.\n\nIt was featured on: Seesaw, Gizmodo, Hacker News, Yahoo News, Digital Frontier, The Morning Brew.`,
      },
      {
        kind: "gallery",
        images: [
          "/images/work/Mark-1.jpg",
          "/images/work/Mark-2.jpg",
        ],
      },
      {
        kind: "text",
        heading: "Mark's Philosophy",
        body: "There are many ways to unpack this beautiful name:",
        list: [
          "Mark as in bookmark.",
          "Mark following the military naming convention (Mark I, Mark II, etc.).",
          "Mark as a friendly companion name.",
          "A Mark of a new era.",
        ],
        listStyle: "numbered",
        bodyAfter:
          "Even the logo tells a story. At a glance, it's simple — but turn it vertically, and it resembles the bookmark with a screen and a button. Flip it horizontally, and it evokes the device's screen component and its sleek edge.",
      },
      {
        kind: "text",
        heading: "Result",
        body: `After announcing on X, going viral and being featured on countless websites, we sped ahead. We spent the next few months building out the product and fundraising. However, as time went on due to a combination of factors — a close family member passing, passion and belief in the product, opportunity cost in other areas of learning — I decided to step away from Mark.\n\nEason and I are still best buddies today. Eason is working hard on the product and is set to officially launch it later this year. I'm very keen.`,
      },
      {
        kind: "text",
        heading: "What I Worked On",
        list: [
          "Website design & development",
          "Mobile UI/UX",
          "X launch story and post",
          "Copy writing",
          "Investor fundraising",
          "Pitching to competitions",
          "Customer discovery calls",
          "Manufacturing comms",
        ],
        listStyle: "bullet",
      },
      {
        kind: "video",
        src: "/videos/Mark-WebsiteVideo.webm",
      },
    ],
  },
  {
    slug: "usc-sep",
    title: "USC SEP",
    subtitle: "Premier Entrepreneurship Club",
    role: "Lead",
    year: "2025",
    coverImage: "/images/work/USC-SEP-hero.jpg",
    heroImage: "/images/work/USC-SEP-hero.jpg",
    description:
      "Sigma Eta Pi is USC's premier entrepreneurship society. SEP students become Thiel Fellows, and joined YC and companies early like Mercor, Ramp, Netic, Midjourney, and SpaceX.",
    sections: [
      {
        kind: "text",
        heading: "The Mission",
        body: "SEP empowers the next generation of founders through community, opportunity, and intentional living.",
      },
      {
        kind: "text",
        heading: "The Why",
        body: `SEP is an incubator where the brightest students (~5% acceptance) build a start up over 10 weeks through a structured curriculum. I was lucky enough to lead this community and help incubate 7 startups in industries across defence, consumer, sport, and mental health.\n\nSEP changed my trajectory in life and continuously does today. It has shown me that if you have agency, you can do whatever you want.`,
      },
      {
        kind: "gallery",
        images: [
          "/images/work/USC-SEP-1.jpg",
          "/images/work/USC-SEP-2.jpg",
        ],
      },
    ],
  },
  {
    slug: "sneaker-business",
    title: "Sneaker Business",
    subtitle: "6 Figures in High School",
    role: "Founder",
    year: "2020",
    coverImage: "/images/work/sneaker-business-hero.jpg",
    heroImage: "/images/work/sneaker-business-hero.jpg",
    description:
      "I grew up in Sydney, Australia and built a 6 figure sneaker business when I was in high school.",
    sections: [
      {
        kind: "text",
        heading: "THE STORY",
        body: "When I wasn't waking up early to buy the latest Jordans, I was negotiating with strangers online to sell them. By the time I entered 11th grade, competition in the resale industry was booming (the resale industry is $11.5Bn today). My friend Fred and I wanted our brand, Kick’d Out, to stand out in a landscape dominated by undercutting and Facebook testimonials. We aimed to present Kick’d Out as legitimate and professional so we reached out to our buddy “Booey” who recently opened a vintage clothing store. After countless negotiations about profit-sharing and risks, Booey agreed to collaborate. With only ten days to prepare, I handled the media design, legal contracts, and operations while Fred focused on marketing. We worked over Christmas and New Years and commuted four hours daily. We successfully launched the event.   We grossed $12.7k and gained over 5,000 followers across platforms in those 2 weeks, marking the pop-up a success. ",
      },
      {
        kind: "gallery",
        images: [
          "/images/work/sneaker-business-1.jpg",
          "/images/work/sneaker-business-2.jpg",
          "/images/work/sneaker-business-3.jpg",
        ],
      },
    ],
  },
]
