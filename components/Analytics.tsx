"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const EP = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ?? "";
const SID = process.env.NEXT_PUBLIC_ANALYTICS_SITE_ID ?? "";

function getSession() {
  const key = "_cae_s";
  let s = sessionStorage.getItem(key);
  if (!s) {
    s = crypto.randomUUID();
    sessionStorage.setItem(key, s);
  }
  return s;
}

function getDeviceId() {
  const raw =
    new Date().toDateString() +
    navigator.userAgent +
    screen.width +
    screen.height +
    navigator.language;
  let h = 0;
  for (let i = 0; i < raw.length; i++) {
    h = ((h << 5) - h + raw.charCodeAt(i)) | 0;
  }
  return Math.abs(h).toString(36);
}

function getUtmParams() {
  const u = new URLSearchParams(location.search);
  if (!u.get("utm_source")) return "";
  return (
    "&us=" +
    encodeURIComponent(u.get("utm_source")!) +
    "&um=" +
    encodeURIComponent(u.get("utm_medium") || "") +
    "&uc=" +
    encodeURIComponent(u.get("utm_campaign") || "")
  );
}

export function Analytics() {
  const pathname = usePathname();
  const t0 = useRef(Date.now());
  const isFirst = useRef(true);

  useEffect(() => {
    if (!EP || !SID) return;

    const s = getSession();
    const d = getDeviceId();

    // Send exit beacon for the previous page on client-side navigations
    if (!isFirst.current) {
      const dur = Date.now() - t0.current;
      if (dur >= 500) {
        navigator.sendBeacon(
          EP,
          JSON.stringify({ sid: SID, s, d, dur })
        );
      }
    }

    // Only include UTM params on the very first pageview (landing page)
    const utm = isFirst.current ? getUtmParams() : "";
    isFirst.current = false;

    // Reset timer for the new page
    t0.current = Date.now();

    // Fire pageview beacon
    new Image().src =
      EP +
      "?sid=" + SID +
      "&p=" + encodeURIComponent(pathname) +
      "&r=" + encodeURIComponent(document.referrer) +
      "&w=" + screen.width +
      "&s=" + s +
      "&d=" + d +
      utm;

    // Exit beacon on page hide (tab close / navigate away)
    function exit() {
      const dur = Date.now() - t0.current;
      if (dur < 500) return;
      navigator.sendBeacon(
        EP,
        JSON.stringify({ sid: SID, s, d, dur })
      );
    }
    function onVisChange() {
      if (document.visibilityState === "hidden") exit();
    }
    document.addEventListener("visibilitychange", onVisChange);

    // Custom event API
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)._cae = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      track: function (e: string, ed?: any) {
        navigator.sendBeacon(
          EP,
          JSON.stringify({
            sid: SID, s, d,
            p: pathname,
            e,
            ed: ed || null,
          })
        );
      },
    };

    return () => {
      document.removeEventListener("visibilitychange", onVisChange);
    };
  }, [pathname]);

  return null;
}
