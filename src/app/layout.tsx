import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { companyData } from "@/data/companyData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsapp } from "@/components/layout/FloatingWhatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Like Air Service — Especialistas Credenciados Daikin em Climatização | São Paulo",
  description:
    "Instalação Padrão Ouro sem vazamentos, assistência especializada em Daikin VRV/VRF, contratos de PMOC (Lei 13.589/18) e higienização profunda em São Paulo e região.",
  keywords: [
    "ar condicionado",
    "instalação de ar condicionado",
    "manutenção de ar condicionado",
    "assistência técnica Daikin",
    "credenciado Daikin",
    "VRV Daikin",
    "VRF São Paulo",
    "PMOC São Paulo",
    "higienização ar condicionado",
    "Like Air Service",
    "climatização alto padrão"
  ],
  authors: [{ name: "Like Air Service" }],
  creator: "Like Air Service",
  publisher: "Like Air Service",
  metadataBase: new URL("https://likeair.com.br"),
  alternates: {
    canonical: "https://likeair.com.br",
  },
  openGraph: {
    title: "Like Air Service — Especialistas Credenciados Daikin em Climatização",
    description:
      "Instalação, manutenção e contratos de PMOC com rigor de engenharia. Assistência credenciada oficial Daikin em São Paulo.",
    url: "https://likeair.com.br",
    siteName: "Like Air Service",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/sobre/equipe-daikin.jpeg",
        width: 1200,
        height: 630,
        alt: "Equipe Like Air Service no estande da Daikin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Like Air Service — Especialistas Credenciados Daikin",
    description:
      "O conforto do clima ideal com a leveza do ar. Instalação padrão ouro, VRV/VRF e PMOC em São Paulo.",
    images: ["/sobre/equipe-daikin.jpeg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Estruturado para HVACBusiness & LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://likeair.com.br/#empresa",
    name: companyData.name,
    alternateName: companyData.shortName,
    url: "https://likeair.com.br",
    logo: "https://likeair.com.br/logo.png",
    image: "https://likeair.com.br/sobre/equipe-daikin.jpeg",
    description: companyData.description,
    telephone: `+${companyData.contacts.whatsapp.number}`,
    email: companyData.contacts.email,
    taxID: companyData.credentials.cnpj,
    areaServed: [
      { "@type": "City", name: "São Paulo" },
      { "@type": "City", name: "Barueri" },
      { "@type": "City", name: "Santana de Parnaíba" },
      { "@type": "City", name: "Santo André" },
      { "@type": "City", name: "São Bernardo do Campo" },
      { "@type": "City", name: "São Caetano do Sul" }
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    brand: {
      "@type": "Brand",
      name: "Daikin",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [companyData.contacts.instagram.url],
  };

  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
