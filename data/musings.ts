export type Musing = {
  slug: string
  title: string
  subtitle: string
  year: string
  coverImage: string // relative to /public, e.g. "/images/musings/osmonds-pho-cover.jpg"
  // Detail page fields
  body: string[] // each string is a bullet point / paragraph
}

export const musings: Musing[] = [
  {
    slug: "osmonds-pho",
    title: "Osmond's Pho",
    subtitle: "Finding you. Multiverse of Henry. Hunger.",
    year: "2025",
    coverImage: "/images/musings/osmonds-pho-cover.jpg",
    body: [
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
    slug: "solitude",
    title: "Solitude",
    subtitle: "The ability to find peace on your own.",
    year: "2025",
    coverImage: "/images/musings/solitude-cover.jpg",
    body: [],
  },
  {
    slug: "approaching-the-summer",
    title: "Approaching the Summer",
    subtitle: "Knowing and understanding the future.",
    year: "2025",
    coverImage: "/images/musings/approaching-the-summer-cover.jpg",
    body: [],
  },
]
