// Single source of truth for site-wide settings and the headline numbers.
// Equinox publishes no national rate card, so prices are reported ranges.
// When a figure changes, update it here.

export const site = {
  name: 'Equinox Membership Guide',
  shortName: 'EQX Membership Guide',
  domain: 'equinoxmembership.org',
  url: 'https://equinoxmembership.org',
  email: 'contact@equinoxmembership.org',
  updated: 'November 2026',
  updatedISO: '2026-11-17',
  official: 'https://www.equinox.com/',
};

// Launch switch. Guide pages are not written yet; when they are, add them to
// pages.ts without `legal: true` and set this to true.
export const publishGuides = false;

export const facts = {
  // Monthly dues, reported ranges on a 12-month commitment.
  singleLow: 205,
  singleHigh: 320,
  allAccessLow: 260,
  allAccessHigh: 365,
  allAccessTypical: 350,
  destinationLow: 330,
  destinationHigh: 480,
  destinationTypical: 370,
  initiationLow: 0,
  initiationHigh: 500,
  commitmentMonths: 12,
  cancelNoticeDays: 30,
  freezeMonths: 2,
  guestPasses: 2,
  guestMinAge: 16,
  appMonthly: 39.99,
  ptLow: 110,
  ptHigh: 140,
  optimizeYear: '$40,000',
  clubs: '118',
  statsAsOf: 'late 2026',
};

export const money = (n: number) =>
  '$' + (Number.isInteger(n) ? n.toLocaleString('en-US') : n.toFixed(2));

export const year = (monthly: number, initiation = 0) => monthly * 12 + initiation;

export const legalNav = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
];

type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Membership Cost', href: '/#membership-cost' },
  { label: 'Tiers', href: '/#tiers' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact Us', href: '/contact-us/' },
];
export const guideNav: { label: string; href: string }[] = [];
