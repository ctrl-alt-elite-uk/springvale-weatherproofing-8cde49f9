// Centralised image URLs. These are Unsplash photos picked to read as
// architectural / roofing reference imagery. Swap any URL to rebrand the
// site without touching page layout.
//
// Every photo is used with a dark overlay so it reads as a backdrop - if a
// URL ever 404s, the underlying ink/ink-raised panel still presents cleanly.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroHome: u("photo-1486406146926-c627a92ad1ab", 2000),
  heroAbout: u("photo-1518005020951-eccb494ad742", 1800),
  heroContact: u("photo-1449157291145-7efd050a4d0e", 1800),
  approach: u("photo-1513584684374-8bab748fbf90", 1400),
  systems: {
    felt: u("photo-1541888946425-d81bb19240f5", 1400),
    pitched: u("photo-1558618666-fcd25c85cd64", 1400),
    singlePly: u("photo-1580655653885-65763b2597d0", 1400),
    liquid: u("photo-1504307651254-35680f356dfd", 1400),
    cladding: u("photo-1497366216548-37526070297c", 1400),
  },
} as const;
