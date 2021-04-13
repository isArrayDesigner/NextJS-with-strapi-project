// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}


const aboutCardList = [
  {
    title: "Who We Are",
    description:
      "Apptness is a group of highly effective marketers from the big data industry that bring together many individual successes stories in both executive leadership and entrepreneurship. Our lean but highly effective team eats, sleeps, and breaths performance based marketing.",
    headImage: { src: "/images/who-we-are.png", alt: "who we are icon" },
  },
  {
    title: "What We Do",
    description:
      "We offer innovative digital marketing products & work collaboratively with our clients to provide a truly unique set of solutions to meet business objectives. Whether its generating leads, consumer purchases, app installs, or other digital goals, we craft strategies that help you succeed.",
    headImage: { src: "/images/what-we-do.png", alt: "what we do icon" },
  },
  {
    title: "Why Us?",
    description:
      "Grow LTV and user interaction with dynamic messaging. Convert mobile web traffic into long term monetization. Maximize retention by engaging users with rich content.",
    headImage: { src: "/images/why-us.png", alt: "why us icon" },
  },
];

const serviceCardList = [
  {
    title: [<strong>Digital</strong>, " ", "Strategy"],
    description:
      "As specialists in digital advertising we’ve spent years helping agencies, brands, professional services and many others find the right digital strategy for their market and target audience. Let us work with you to implement the right processes to effectively grow your business.",
    headImage: { src: "/images/digital-strategy.png", alt: "digital strategy" },
  },
  {
    title: "PUBLISHERS",
    description: [
      <ul className={styles.cardDescUl}>
        <li>Receive maximum monetization for quality traffic.</li>
        <li>Leverage our unique data sources to drive superiormonetization.</li>
        <li>
          Work with all standard payout models, CPA, CPL, CPC, CPM,rev-share.
        </li>
      </ul>,
    ],
    headImage: { src: "/images/publishers.png", alt: "publisers icon" },
  },
  {
    title: "ADVERTISER",
    description: [
      <ul className={styles.cardDescUl}>
        <li>
          Data driven targeting allows you to access the right consumer at the
          right time at scale.
        </li>
        <li>Display, email, contextual, search inventory available.</li>
        <li>
          Precise targeting &amp; data validation for email, phone, address.
        </li>
      </ul>,
    ],
    headImage: { src: "/images/advertiser.png", alt: "advertiser" },
  },
  {
    title: [<strong>MOBILE</strong>, " ", "SOLUTIONS"],
    description: [
      <ul className={styles.cardDescUl}>
        <li>Grow LTV and user interaction with dynamic messaging.</li>
        <li>Convert mobile web traffic into long term monetization.</li>
        <li>Maximize retention by engaging users with rich content.</li>
      </ul>,
    ],
    headImage: { src: "/images/mobile-solutions.png", alt: "advertiser" },
  },
];

