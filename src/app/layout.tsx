// src/app/layout.tsx
// REMOVA 'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClientShell from "@/components/LayoutClientShell"; // Importe o wrapper
import { content as siteContentData } from '@/data/content'; // Importe diretamente

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata() {
  const langForMetadata = 'pt'; // Ou sua lógica de idioma padrão
  const profileData = siteContentData[langForMetadata].profile;
  const aboutData = siteContentData[langForMetadata].sections.about;
  const siteUrl = 'https://felipebiavacurriculum.vercel.app/';
  return {
    metadataBase: new URL(siteUrl), // Importante para URLs relativas em OG
    title: {
      default: `${profileData.name} | ${profileData.role}`,
      template: `%s | ${profileData.name}`, // Para títulos de páginas internas
    },
    description: aboutData.details.substring(0, 160) + "...",
    keywords: `${profileData.name}, Engenheiro Mecânico, Perfuração, Completação, Óleo e Gás, O&G, Tecnologia, IA, Python, Gestão de Projetos, Halliburton, Infotec, ${profileData.city}`,
    authors: [{ name: profileData.name, url: siteUrl }],
    openGraph: {
      title: `${profileData.name} | ${profileData.role}`,
      description: aboutData.details.substring(0, 160) + "...",
      url: siteUrl,
      siteName: profileData.name,
      images: [
        {
          url: '/images/icon.png', // Caminho relativo a `public` ou URL absoluta
          width: 1200,
          height: 630,
          alt: `Portfólio de ${profileData.name}`,
        },
      ],
      locale: langForMetadata === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/images/icon.png',
      // Outros tamanhos se você os tiver na pasta public
      // other: [
      //   { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      //   { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
      // ],
    },
    
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col dark bg-background text-foreground"> {/* Adicionado text-foreground */}
        {/* SuppressHydrationWarning pode ser aplicado diretamente no HTML ou Body se necessário */}
        {/* <SuppressHydrationWarning />  Removido daqui se já está no html tag */}
        <LayoutClientShell>{children}</LayoutClientShell>
      </body>
    </html>
  );
}