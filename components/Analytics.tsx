import React from 'react';
import Script from 'next/script';
import { ANALYTICS } from '@/lib/site';

/**
 * Loads privacy-friendly, cookieless analytics only when configured
 * (see ANALYTICS in lib/site.ts). With no environment variables set,
 * this renders nothing and no third-party script is requested.
 */
export function Analytics() {
  const { umamiWebsiteId, umamiScriptUrl, cloudflareToken } = ANALYTICS;

  return (
    <>
      {umamiWebsiteId && (
        <Script
          id="umami-analytics"
          src={umamiScriptUrl}
          data-website-id={umamiWebsiteId}
          strategy="afterInteractive"
        />
      )}
      {cloudflareToken && (
        <Script
          id="cloudflare-web-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: cloudflareToken })}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
