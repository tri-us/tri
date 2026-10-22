export interface Link {
  label: string;
  url: string;
}

export interface Site {
  name: string;
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
  title: "TODO",
  description: "TODO",
  ogImageAlt: "TODO",
  email: "contact@trius.me",
  bookingUrl: "https://calendar.app.google/9Jj1fTWJrTMLvLF79",
  founderName: "Petar Vujović",
  founderUrl: "https://www.petarvujovic.com",
  location: "Podgorica, Montenegro",
};

export const HERO: Hero = {
  headline: "TODO",
  subhead: "TODO",
  primary: { label: "Book an intro call", url: SITE.bookingUrl },
  secondary: { label: "How we work", url: "#how-we-work" },
};

export const OFFERS: Offer[] = [];

export const HOW_WE_WORK: string[] = [];

export const TEAM: TeamMember[] = [];

export const SCOPE_NOTE = "TODO";
