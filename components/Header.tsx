import fs from "node:fs";
import path from "node:path";
import { HeaderClient } from "./HeaderClient";
import { siteConfig, navEntries } from "@/lib/config";

// Resolve the client's logo file with extension priority. SVG wins for
// crispness; webp / png / jpg are accepted fallbacks. Returns null if
// no logo asset has been added to /public yet.
function findLogoAsset(): string | null {
  for (const ext of ["svg", "webp", "png", "jpg"]) {
    const rel = `logo.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) {
      return `/${rel}`;
    }
  }
  return null;
}

// Thin server wrapper: does the filesystem read for the logo and forwards
// to the client island. The split keeps the JS bundle small - free to
// restyle or replace the client component entirely, but leave this server
// shell in place so the logo auto-resolves.
export function Header() {
  return (
    <HeaderClient
      logoUrl={findLogoAsset()}
      siteName={siteConfig.name}
      nav={navEntries()}
    />
  );
}
