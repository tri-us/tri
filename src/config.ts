export interface Link {
  label: string;
  url: string;
}

export interface Site {
  name: string;
  legalName: string;
  title: string;
  description: string;
  ogImageAlt: string;
  email: string;
  bookingUrl: string;
  founderName: string;
  founderUrl: string;
  location: string;
}

export interface Hero {
  headline: string;
  subhead: string;
  primary: Link;
  secondary: Link;
}

export interface Offer {
  name: string;
  price: string;
  duration: string;
  whoFor: string;
  deliverables: string[];
}

export interface TeamMember {
  role: string;
  name?: string;
  url?: string;
  background: string;
}

export const SITE: Site = {
  name: "Tri",
  legalName: "Tri d.o.o.",
  title: "Tri — Rust & TypeScript services, indexers and docs",
  description:
    "Tri builds and reviews Rust and TypeScript services, indexers, data pipelines and SDKs, with docs included, for NEAR and Solana teams and web2 products.",
  ogImageAlt:
    "Tri: we build the Rust and TypeScript services, indexers and docs behind NEAR apps and web2 products.",
  email: "contact@trius.me",
  bookingUrl: "https://calendar.app.google/9Jj1fTWJrTMLvLF79",
  founderName: "Petar Vujović",
  founderUrl: "https://www.petarvujovic.com",
  location: "Podgorica, Montenegro",
};

export const HERO: Hero = {
  headline:
    "We build the Rust and TypeScript services, indexers and docs behind NEAR apps and web2 products.",
  subhead:
    "Tri is two engineers and a technical writer. We take on a small number of fixed-scope engagements, and every one ships with documentation your team can run from.",
  primary: { label: "Book an intro call", url: SITE.bookingUrl },
  secondary: { label: "How we work", url: "#how-we-work" },
};

export const OFFERS: Offer[] = [
  {
    name: "Data infrastructure review",
    price: "$12,000",
    duration: "Fixed price · 1–2 weeks",
    whoFor:
      "NEAR and Solana teams whose indexers or data ingest pipelines are too slow, too expensive or keep breaking.",
    deliverables: [
      "A measured baseline of throughput, latency, cost and failure modes",
      "A written report ranking fixes by impact and effort",
      "Benchmarks and a reproduction harness you keep",
      "Fee credited against a sprint or retainer signed within 30 days",
    ],
  },
  {
    name: "Integration and service sprint",
    price: "From $18,000",
    duration: "Fixed price · 3–6 weeks",
    whoFor:
      "NEAR wallets, apps and protocols adding a NEAR Intents integration or an off-chain service, and web2 teams that need one Rust service built or ported.",
    deliverables: [
      "Written architecture and failure-mode design before any code",
      "A production service in Rust or TypeScript, matched to your stack, with tests in CI",
      "Monitoring, alerts and an operations runbook",
      "Integration docs, a handover session and 30 days of post-launch fixes",
    ],
  },
  {
    name: "SDK and docs kit",
    price: "From $18,000",
    duration: "Fixed price · 4–8 weeks",
    whoFor:
      "NEAR protocols, Solana application-layer protocols and Rust or API companies whose integrators struggle with a stale, hand-rolled or missing SDK.",
    deliverables: [
      "An onboarding audit: an engineer and our writer work through your quickstart and record every point where they get stuck",
      "A client SDK or CLI in Rust and/or TypeScript, with typed errors",
      "Quickstart, concept pages, API reference and a versioned changelog",
      "Example repos tested in CI, so code samples cannot go stale",
    ],
  },
  {
    name: "Off-chain team retainer",
    price: "From $12,000 / month",
    duration: "About 60 hours a month · 3-month minimum",
    whoFor:
      "Funded NEAR teams and web2 companies running Rust or TypeScript services that want a standing engineering and docs capacity without hiring.",
    deliverables: [
      "Maintenance and new features on named services, indexers, bots and SDKs",
      "Architecture and code review on everything shipped",
      "Docs, changelogs and runbooks kept current with each release",
      "A written plan each month covering what shipped and what comes next",
    ],
  },
];

export const HOW_WE_WORK: string[] = [
  "Tri is deliberately small: two engineers and a technical writer. Petar owns the architecture, the plan and the review on every engagement.",
  "Nothing starts until the scope is written down: what we will build, the assumptions it depends on, and the acceptance criteria that tell us it is done.",
  "Deliverables are fixed-price, and retainers run on a written monthly plan, so you can always see what you are paying for and what comes next.",
  "We use coding agents for scaffolding, test fixtures and migration work. Correctness and design decisions stay with an engineer.",
  "Documentation is part of the deliverable, not an afterthought. Our technical writer works alongside the engineers from the start.",
];

export const TEAM: TeamMember[] = [
  {
    role: "Founder",
    name: "Petar Vujović",
    url: "https://www.petarvujovic.com",
    background:
      "Founding engineer at Nitro Labs, previously Taiko and NEAR Protocol. Designs and reviews everything Tri ships.",
  },
  {
    role: "Engineer",
    background: "Has shipped NEAR and Templar Protocol work alongside Petar.",
  },
  {
    role: "Technical writer",
    background: "Has written technical documentation for NEAR.",
  },
];

export const SCOPE_NOTE =
  "We work with NEAR and Solana teams and web2 companies. We don't take on work that overlaps our team members' employers.";
