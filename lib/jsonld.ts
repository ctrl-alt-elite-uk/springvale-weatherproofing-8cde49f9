import { siteConfig } from "./config";

// A coarse list of schema.org types that inherit from LocalBusiness and so
// accept `areaServed` + `openingHours`. Not exhaustive - the agent can add
// more here per brief, or switch to a fully custom JSON-LD block.
const LOCAL_BUSINESS_TYPES = new Set([
  "LocalBusiness",
  "Restaurant",
  "Store",
  "Dentist",
  "MedicalBusiness",
  "HomeAndConstructionBusiness",
  "AutomotiveBusiness",
  "ProfessionalService",
  "HealthAndBeautyBusiness",
  "FoodEstablishment",
  "LodgingBusiness",
  "SportsActivityLocation",
]);

// Schema.org JSON-LD. Defaults to "Organization" (the safe, generic choice
// for most small businesses, agencies, creators, and product companies).
// Override via site.config.business.schemaType for bricks-and-mortar
// services that want LocalBusiness SEO (e.g. "LocalBusiness", "Restaurant",
// "Dentist"). If the brief calls for something bespoke (Person, Event,
// Product, etc.), edit this file to match - the layout just serialises
// whatever this function returns.
export function localBusinessJsonLd(): Record<string, unknown> {
  const business = siteConfig.business ?? {};
  const type = business.schemaType ?? "Organization";
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    name: business.legalName ?? siteConfig.name,
    description: siteConfig.tagline,
  };
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) data.url = siteUrl;
  if (siteConfig.contact.email) data.email = siteConfig.contact.email;
  if (siteConfig.contact.phone) data.telephone = siteConfig.contact.phone;
  if (siteConfig.contact.address) data.address = siteConfig.contact.address;

  // areaServed and openingHours only make semantic sense for LocalBusiness
  // subtypes. Emit them only when the configured type qualifies; otherwise
  // they're silently dropped to keep the JSON-LD valid.
  if (LOCAL_BUSINESS_TYPES.has(type)) {
    if (business.areaServed) data.areaServed = business.areaServed;
    if (business.openingHours && business.openingHours.length > 0) {
      data.openingHours = business.openingHours;
    }
  }
  return data;
}
