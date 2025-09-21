import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JP Auto Leasing LLC - Premium Vehicle Leasing Solutions",
  description: "JP Auto Leasing LLC offers premium vehicle leasing solutions with over 10 years of experience in the automotive industry. Find your perfect vehicle with personalized consulting and expert guidance from Jose Perdomo.",
  keywords: "auto leasing, vehicle leasing, car leasing, Jose Perdomo, JP Auto Leasing, automotive consulting, credit application, vehicle financing",
  authors: [{ name: "Jose Perdomo", url: "https://jpautoleasing.com" }],
  creator: "JP Auto Leasing LLC",
  publisher: "JP Auto Leasing LLC",
  metadataBase: new URL("https://jpautoleasing.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JP Auto Leasing LLC - Premium Vehicle Leasing Solutions",
    description: "JP Auto Leasing LLC offers premium vehicle leasing solutions with over 10 years of experience in the automotive industry.",
    url: "https://jpautoleasing.com",
    siteName: "JP Auto Leasing LLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JP Auto Leasing LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JP Auto Leasing LLC - Premium Vehicle Leasing Solutions",
    description: "JP Auto Leasing LLC offers premium vehicle leasing solutions with over 10 years of experience in the automotive industry.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "JP Auto Leasing LLC",
  "description": "Premium vehicle leasing solutions with over 10 years of experience in the automotive industry",
  "url": "https://jpautoleasing.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "XXXXX",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Jose Perdomo",
    "jobTitle": "Owner & Automotive Consultant",
    "description": "Over 10 years of experience in the automotive industry"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Vehicle Leasing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vehicle Leasing",
          "description": "Premium vehicle leasing solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automotive Consulting",
          "description": "Expert automotive consulting services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Credit Application Assistance",
          "description": "Credit application and financing assistance"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/jpautoleasing",
    "https://www.instagram.com/jpautoleasing",
    "https://www.linkedin.com/company/jpautoleasing"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
