// src/app/page.tsx
"use client"

import { SectionCard } from '@/components/SectionCard';
import VibratingDivider from '@/components/VibratingDivider';
import { HeroSection } from '@/components/HeroSection';
import { content } from '@/data/content';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import Head from 'next/head'; // <<<---- IMPORTAR Head

// Importe as animações da framer-motion se não estiverem já importadas aqui
import { motion } from 'framer-motion';


export default function HomePage() {
  const sectionsOrder = ['about', 'experience', 'skills', 'education', 'certifications', 'languages'] as const;
  const sectionColors = {
    about: 'white',
    experience: 'linkedinBlue',
    skills: 'white',
    education: 'linkedinBlue',
    certifications: 'white',
    languages: 'linkedinBlue',
  } as const;

  useEffect(() => {
    // Client-side setup for animations or other effects
  }, []);

  const langForPageContent = 'pt'; 
  
  // Defina os metadados aqui, podem ser baseados no idioma se necessário
  const currentProfile = content[langForPageContent].profile;
  const pageTitle = `${currentProfile.name} | ${currentProfile.role}`;
  const pageDescription = `Portfólio digital de ${currentProfile.name}. Explore minha trajetória como Engenheiro Mecânico especializado em Perfuração, Completação, gestão de projetos, e aplicação de tecnologias inovadoras e IA no setor de O&G.`;
  const pageKeywords = `${currentProfile.name}, Engenheiro Mecânico, Perfuração, Completação, Óleo e Gás, O&G, Tecnologia, IA, Python, Gestão de Projetos, Halliburton, Infotec, ${currentProfile.city}`;


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="author" content={currentProfile.name} />
        {/* Adicione outras meta tags aqui, como Open Graph, Twitter Cards, etc. */}
      </Head>

      {/* O div principal da página agora não precisa mais de min-h-screen se RootLayout já cuida disso */}
      {/* Ele só precisa crescer para preencher o espaço dado pelo RootLayout */}
      <div className="flex flex-col flex-grow"> 
          <header 
            className="
              bg-background/80 dark:bg-background/80 shadow-sm 
              md:sticky md:top-0 md:z-40 md:backdrop-blur-md 
              w-full 
            "
          >
            <div className="container mx-auto px-4">
               <HeroSection />
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 pt-8 pb-12">
            <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
              {sectionsOrder.map((sectionKey, index) => {
                const sectionData = content[langForPageContent]?.sections?.[sectionKey];
                if (!sectionData) {
                  console.warn(`Dados da seção não encontrados para: ${sectionKey} no idioma ${langForPageContent}`);
                  return null;
                }
                const color = sectionColors[sectionKey];

                return (
                  <motion.div // Adicionado motion.div aqui para as animações dos cards
                    key={sectionKey} 
                    className="animate-fadeInUp" // Você pode usar a classe do tw-animate-css
                    initial={{ opacity: 0, y: 20 }} // Ou definir variantes da framer-motion
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }} // Ajuste o delay
                  >
                    <SectionCard
                      sectionKey={sectionKey}
                      color={color}
                    />
                    {index < sectionsOrder.length - 1 && (
                      <VibratingDivider
                        verticalMargin="my-8 md:my-10"
                        // className="animate-fadeInUp" // Pode ser controlado pelo motion.div pai
                        widthClass="w-full" 
                        // style={{ animationDelay: `${0.4 + index * 0.2}s` }} // Controlado pelo motion.div pai
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </main>
          <Footer />
        </div>
    </>
  );
}