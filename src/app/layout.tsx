import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Header } from "@/components/Header"; // Remova a importação do Header aqui
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Felipe Biava Cataneo | Eng. Mecânico, Especialista em Perfuração e Tecnologia",
  description: "Portfólio digital de Felipe Biava Cataneo. Explore minha trajetória como Engenheiro Mecânico especializado em Perfuração, Completação, gestão de projetos, e aplicação de tecnologias inovadoras e IA no setor de O&G.",
  keywords: "Felipe Biava Cataneo, Engenheiro Mecânico, Perfuração, Completação, Óleo e Gás, O&G, Tecnologia, IA, Python, Gestão de Projetos, Halliburton, Infotec, Santos SP",
  authors: [{ name: "Felipe Biava Cataneo" }],
  // openGraph: { // Para melhor compartilhamento em redes sociais
  //   title: "Felipe Biava Cataneo | Eng. Mecânico & Especialista em Perfuração",
  //   description: "Portfólio digital de Felipe Biava Cataneo...",
  //   url: "https://seusite.com", // TROQUE PELO SEU DOMÍNIO
  //   images: [
  //     {
  //       url: "/og-image.png", // Crie uma imagem de preview (1200x630px)
  //       width: 1200,
  //       height: 630,
  //       alt: "Felipe Biava Cataneo - Portfólio",
  //     },
  //   ],
  //   locale: "pt_BR",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`}>
      <body className="font-sans min-h-screen flex flex-col">
        <div className="flex-grow">{children}</div>
        
      </body>
      
    </html>
  );
}