import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SuppressHydrationWarning from "@/components/SuppressHydrationWarning";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Felipe Biava Cataneo | Eng. Mecânico, Especialista em Perfuração e Tecnologia",
  description:
    "Portfólio digital de Felipe Biava Cataneo. Explore minha trajetória como Engenheiro Mecânico especializado em Perfuração, Completação, gestão de projetos, e aplicação de tecnologias inovadoras e IA no setor de O&G.",
  keywords:
    "Felipe Biava Cataneo, Engenheiro Mecânico, Perfuração, Completação, Óleo e Gás, O&G, Tecnologia, IA, Python, Gestão de Projetos, Halliburton, Infotec, Santos SP",
  authors: [{ name: "Felipe Biava Cataneo" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col dark">
        <SuppressHydrationWarning />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
