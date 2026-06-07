// Centralized affiliate / outbound links so they are easy to update in one place.

export const LINKS = {
  jaafitPro: "https://jaafit.dk/products/jaa-fit-pro",
  jaafitProCollection:
    "https://jaafit.dk/collections/vores-losninger/products/jaa-fit-pro",
  massageCollection: "https://jaafit.dk/collections/massageroller",
  massagePro: "https://jaafit.dk/products/massageroller-pro%E2%84%A2",
  massageMini: "https://jaafit.dk/products/massageroller-mini%E2%84%A2",
  massageBundle: "https://jaafit.dk/products/massageroller-bundle",
  trustpilot: "https://dk.trustpilot.com/review/jaa-fit.dk",
} as const;

export const NAV = [
  { label: "Bedst i test", to: "/" },
  { label: "Elastikker vs. vægte", to: "/elastikker-vs-vaegt" },
  { label: "5 fordele", to: "/styrketraening-fordele" },
  { label: "Træningsguide", to: "/traening-guide" },
  { label: "MassageRoller", to: "/massageroller" },
] as const;
