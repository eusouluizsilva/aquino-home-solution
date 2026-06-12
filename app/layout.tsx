import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.aquinosolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Aquino Home Solutions",
    default: "Aquino Home Solutions | General Contractor — Lowell, MA",
  },
  description:
    "Licensed & insured general contractor serving Lowell, MA. Kitchen & bath remodels, decks, stairs, painting, vinyl flooring, tile, plaster, plumbing, and HVAC. Call (603) 408-4073.",
  keywords: [
    "general contractor Lowell MA",
    "kitchen remodel Lowell",
    "bathroom remodel Lowell MA",
    "deck builder Lowell",
    "painting contractor Lowell MA",
    "vinyl flooring installation",
    "tile installer Lowell",
    "plaster repair MA",
    "stair builder Lowell",
    "plumber Lowell MA",
    "HVAC Lowell MA",
    "Aquino Home Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aquino Home Solutions",
    title: "Aquino Home Solutions | General Contractor — Lowell, MA",
    description:
      "Licensed & insured general contractor serving Lowell, MA. Remodels, decks, painting, flooring, tile, plaster, stairs, plumbing, HVAC. Call (603) 408-4073.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aquino Home Solutions — General Contractor in Lowell, MA",
      },
    ],
  },
  verification: {
    google: "MhB_qUzyqFFWwuwzcP08WKM_gMiUB4faH0wE1Emedy4",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquino Home Solutions | General Contractor — Lowell, MA",
    description:
      "Licensed & insured general contractor serving Lowell, MA. Free estimates — call (603) 408-4073.",
    images: ["/og-image.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}#business`,
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: SITE_URL,
  image: `${SITE_URL}/aquino-logo.webp`,
  logo: `${SITE_URL}/aquino-logo.webp`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: "$$",
  sameAs: [BUSINESS.instagram, BUSINESS.thumbtack, BUSINESS.googleBusiness],
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 42.6334,
      longitude: -71.3162,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "General Contracting Services",
    itemListElement: [
      "Kitchen & Bathroom Remodel",
      "Stairs",
      "Decks",
      "Painting",
      "Vinyl Flooring",
      "Tile Installation",
      "Plaster",
      "Plumbing",
      "HVAC",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-FLLFY02F4Y";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased pb-14">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
