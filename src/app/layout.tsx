// src/app/layout.tsx
'use client'; // Precisa ser um client component para usar useState e useEffect

import { useState, useEffect } from 'react';
import type { Metadata } from "next"; // Metadata pode não funcionar como esperado em client component de layout
import { Inter } from "next/font/google";
import "./globals.css";
import SuppressHydrationWarning from "@/components/SuppressHydrationWarning";
import Preloader from '@/components/Preloader'; 
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Metadata pode precisar ser movida para page.tsx ou configurada de outra forma se RootLayout é client
// export const metadata: Metadata = { ... }; // Comentado por enquanto

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  // Simula o fim do carregamento do preloader
  const handlePreloaderLoaded = () => {
    setLoading(false);
  };

  // Para evitar que o conteúdo principal seja renderizado no servidor e cause flash
  // Isso pode ser opcional dependendo de como o preloader se comporta com SSR/SSG
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="font-sans min-h-screen flex flex-col dark bg-background">
        <SuppressHydrationWarning />
        
        {/* Preloader */}
        <AnimatePresence mode="wait">
          {isClient && loading && <Preloader onLoaded={handlePreloaderLoaded} />}
        </AnimatePresence>

        {/* Conteúdo Principal - Renderiza somente após o preloader (ou se não estiver carregando) */}
        {isClient && !loading && (
          <div className="flex-grow flex flex-col"> {/* Div para aplicar flex-grow se necessário */}
            {children}
          </div>
        )}
        
        {/* Se o conteúdo principal não preencher a tela e você não quiser que o preloader apareça novamente
            no primeiro render do lado do cliente quando `loading` é true, pode-se adicionar um placeholder
            ou simplesmente deixar em branco até `!loading` ser true. A abordagem atual com `isClient`
            e `loading` deve funcionar bem.
        */}
      </body>
    </html>
  );
}