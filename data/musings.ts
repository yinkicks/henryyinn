export type MusingSection = {
  heading: string
  bullets: string[]
}

export type Musing = {
  slug: string
  title: string
  subtitle: string
  year: string
  date?: string // e.g. "7 February 2025"
  coverImage: string // relative to /public, e.g. "/images/musings/osmonds-pho-cover.jpg"
  // Detail page fields — use sections for structured rule/heading content, body for plain paragraphs
  body: string[]
  sections?: MusingSection[]
}

export const musings: Musing[] = [
  {
    slug: "osmonds-pho",
    title: "Osmond's Pho",
    subtitle: "Finding you. Multiverse of Henry. Hunger.",
    year: "2025",
    date: "7 February 2025",
    coverImage: "/images/musings/osmonds-pho.jpg",
    body: [
      `This was a collection of notes to myself after having transformative dinner with my friend, Osmond. I felt lost during that time. I felt hungry to attack the world but had no idea how to even begin. I looked up to Osmond. This experience gave me clarity. I sent emails, started Mark, and my rhythm of life changed soon after.`,
      `---`,
      `there are kids in gaza who are getting exploded. while we have so much privilege here @ usc living the best life. we're not reaching our full potential. people are too fine with being "normal".`,
      `never listen to anyone's advice. everyone is reflecting their own life and pushing their own life to change your own course of action. no one knows you except you.`,
      `action creates information. information creates direction.`,
      `mandika's quote. fuck being "the best in the world" or "the best version of yourself". no. be the best henry in the multiverse.`,
      `be critical on every decision.`,
      `one henry may be passed out on the couch as an alcoholic. one henry may be a world renowned genius that is changing the world.`,
      `osmond had no idea who he was, what he wanted to do. he just threw so much shit at the wall, sending 1-200 emails each day. he was hungry.`,
      `it doesn't matter what you say. say you're hungry. i don't care what i do. whatever you need help with, i'll get it done.`,
      `law of entropy — by creating more chaos and motion, more opportunities arise.`,
      `osmond's connection with ethan lippman connected him with another guy which after 2 years of brewing, gave him this opportunity now.`,
      `people care so much on what other's are going to say or think. who the fuck cares.`,
      `osmond was exactly in my position a couple years ago, not knowing the future.`,
      `be intense at EVERYTHING. happiness? 100%. work? 100%. dinner? 100%`,
      `constantly think to yourself. if a bus hits you tomorrow, will you be satisfied with how you lived, the work you did, the quality of your workout, how you managed your relationships.`,
      `if you have doubts or concerns about relationships, be open and express it. don't hide it away because if you keep pushing this beach ball under water, eventually your energy will die and it's going to pop up leading to more pain.`,
      `sometimes it's whether a yes or no. do you want it bad enough. if it's yes, then send it. if no, then no. Calvin is fantastic at making very complex convoluted problems into a binary form.`,
      `there is no costs to "risk". we literally have no risk. we'll still have food on the table. we still have money. sure, someone doesn't reply to your email. keep fucking going. risks are not a real thing. risk is only risky when you don't know what's on the other side.`,
      `you need an unprecedented mentor to really grow. you're at the point where you can only learn so much from your peers. you have to keep on jumping higher.`,
      `the you and mentor dynamic are equal. you have the most valuable currency in the world: time. youth. when you work hard for them and show your hungry self, they'll see a hungry young version of themselves. that's the beauty of it.`,
      `older individuals appreciate spending time with youth, like they have more life to live.`,
      `it's a directly equal relationship.`,
      `once you show and prove time and time again that you are capable of great banger shit, people will believe in you and you will rise higher and higher.`,
      `osmond's recommendation. work under a great mentor at a startup. work fucking hard. they won't tell you all the answers, you still have to figure everything out yourself on your own journey. but they will be there to guide you.`,
      `constantly come back to your why. living a life that is special without the "could've been, should've been". and that will make you unstoppable.`,
      `osmond found his own path that is exactly right for him after the previous investments that paid off. now he is confident.`,
      `but again, confidence is created by action, information, direction, and finally confidence.`,
      `osmond's passion is learning. tech may or may not be. he has this vision to build a school that transforms the education system so kids are curious. even a hotel.`,
    ],
  },
  {
    slug: "rules-for-a-knight",
    title: "Rules for a Knight",
    subtitle: "Peace, Pride, Hard-work, Kindness, Love",
    year: "2025",
    date: "15 March 2025",
    coverImage: "/images/musings/rules-for-a-knight-cover.jpg",
    body: [],
    sections: [
      {

        bullets: [
          "A letter from the 15th century knight, Sir Thomas Lemuel Hawke, to his children before his death. A collection of reflections and guiding principles for living a virtuous and meaningful life.",
    
        ],
      },
      {
        heading: "1: Solitude",
        bullets: [
          "Silence is a crucial tool to hear our inner voice and find wisdom and clarity.",
          "Create time away from the distractions of the world. Just as you cannot see your reflection in troubled water, you cannot see it with a troubled soul.",
        ],
      },
      {
        heading: "2: Humility",
        bullets: [
          "Isn't about self-deprecation. Must have realistic and balanced view of oneself.",
          "You are better than no one. No one is better than you.",
          `"Never announce that you are a knight, simply behave as one."`,
        ],
      },
      {
        heading: "3: Gratitude",
        bullets: [
          `"The only intelligent response to the ongoing gift of life is gratitude."`,
          `"The simple joys are the great ones. Pleasure is not complicated."`,
        ],
      },
      {
        heading: "4: Pride",
        bullets: [
          "Never attempt to diminish yourself to make others feel more comfortable. If our self-worth is low, it affects everything we do.",
          `"We show others the most respect by offering the best of ourselves."`,
          "Deep focus — hard work [pride comes along the way]",
        ],
      },
      {
        heading: "5: Cooperation",
        bullets: [
          `Story of Lemuel, envious of another squire Roan's skills. Grandfather asks, "is it not possible that you both can be outstanding?"`,
          "2 outcomes of comparing yourself: vanity or bitterness. Both are without value.",
          `"We must live and work together as brothers or perish together as fools."`,
        ],
      },
      {
        heading: "6: Friendship",
        bullets: [
          "True friendship is forged in daily workings, not grand gestures.",
          "It may be easy to be supportive when a friend is hurt. It is more difficult to be wholeheartedly supportive when extreme good fortune befalls your friend and not you.",
        ],
      },
      {
        heading: "7: Forgiveness",
        bullets: [
          "Look for the best in others and yourself.",
          "Forgive and move on. Brings you and others peace.",
        ],
      },
      {
        heading: "8: Honesty",
        bullets: [
          `Do not fear suffering. The strongest steel is forged in fire. "The facts are always friendly".`,
          "Falsehood comes from darkness and hides us from others and our soul.",
        ],
      },
      {
        heading: "9: Courage",
        bullets: [
          "Everything is aided by an awareness of breath. Breathe for courage.",
          "When you are scared, don't do it for yourself. Do it for someone else.",
          `"Anything that gives light must endure burning."`,
        ],
      },
      {
        heading: "10: Grace",
        bullets: [
          "Ability to accept change.",
          "Beauty fades. Inner workings is core.",
          "Approaching life: positive — positive & negative — negative.",
        ],
      },
      {
        heading: "11: Patience",
        bullets: [
          `There is no once-in-a-lifetime opportunity. "A hurried mind is an addled mind".`,
          "The story of the Chinese farmer. No such thing as good/bad. Events are simply events.",
        ],
      },
      {
        heading: "12: Justice",
        bullets: [
          "Every true knight fights for human dignity & justice at all times.",
          `"A knight sets out to illuminate the darkness in society, not from its leaves but from its roots."`,
        ],
      },
      {
        heading: "13: Generosity",
        bullets: [
          `Possessions are distractions from the real work of a knight's life. "A lion doesn't own anything at all, yet we all know his power."`,
          "Starving boy gives bread to his younger siblings. Admiration, not pity.",
        ],
      },
      {
        heading: "14: Discipline",
        bullets: [
          `"You will perform as you practice."`,
          `"Don't save anything for the walk home."`,
          `"Discipline, structure, and order, you will find there is freedom" & "happiness is the result of a life lived with purpose."`,
          `"If you are concentrating on the results of your actions, you are not dedicated to your task."`,
        ],
      },
      {
        heading: "15: Dedication",
        bullets: [
          `"The anvil outlasts the hammer."`,
          `"How we handle times of peace and calm will determine our behaviour in moments of crisis."`,
          "To attain great wisdom, a knight must live a long life.",
        ],
      },
      {
        heading: "16: Speech",
        bullets: [
          "Do not speak ill of others.",
          "Words have meaning. Do not misuse them.",
        ],
      },
      {
        heading: "17: Faith",
        bullets: [
          "Some things in life are so beautiful that they should not be talked about. They can only be experienced.",
          `"Golden rule: do unto others as you would have them do unto you."`,
        ],
      },
      {
        heading: "18: Equality",
        bullets: [
          `"Every knight holds human equality as an unwavering truth."`,
        ],
      },
      {
        heading: "19: Love",
        bullets: [
          `"Love is the end goal. It is the music of our lives. There is no obstacle that enough love cannot move."`,
          "If you are unable to control your anger, keep your distance and mouth shut until you can.",
          `"There is no finite amount of love."`,
          "Love is not wild, grand, overwhelming — it is healthy, honest, and wholesome.",
          `As Lemuel's relationship grew slowly and subtly, they will "always be friends" and will never "fall out of love".`,
        ],
      },
      {
        heading: "20: Death",
        bullets: [
          `"A knight concerns himself with the gratitude for the life he has been given."`,
          "He does not fear death as the work one knight begins, others may finish.",
          "Sand castle story: His kids fought and stepped over each other's castles but eventually moved on to swimming, forgot, went home, and the rain washed the castles back to the surf.",
          `"Please be kind to one another."`,
        ],
      },
    ],
  }
]
