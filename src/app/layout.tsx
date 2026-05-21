import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/content";
import "./globals.css";
import { Oxanium } from 'next/font/google';
const headingFont = Oxanium({
  subsets: ['latin'],
  variable: '--font-heading',
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Norman Aghedo | Freelance IT Support for Small Teams",
    template: "%s | Norman Aghedo",
  },
  description:
    "Norman Aghedo provides freelance IT support, help desk support, desktop support, device setup, troubleshooting, and user training for small teams and professionals.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Norman Aghedo | Freelance IT Support for Small Teams",
    description:
      "Reliable freelance IT support built on clear communication, honest guidance, and dependable follow-through.",
    url: SITE_URL,
    siteName: "Norman Aghedo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`flex min-h-full flex-col ${headingFont.variable}`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Norman Aghedo",
              founder: {
                "@type": "Person",
                name: "Norman Aghedo",
              },
              url: SITE_URL,
              email: CONTACT_EMAIL,
              serviceType: [
                "IT Support",
                "Help Desk Support",
                "Desktop Support",
                "Remote IT Support",
                "Computer Setup",
                "Technology Training",
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
