import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { SITE, siteUrl } from "@/lib/site";
import "./globals.css";

const serif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Manrope({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: {
    default: "Grupo STF — Construimos valor para el largo plazo",
    template: "%s · Grupo STF",
  },
  description: SITE.description,
  applicationName: "Grupo STF",
  openGraph: {
    type: "website",
    siteName: "Grupo STF",
    locale: "es_HN",
    alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#071a2d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
