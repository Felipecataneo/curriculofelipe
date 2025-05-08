"use client"

// src/app/page.tsx
import { SectionCard } from '@/components/SectionCard';
import VibratingDivider from '@/components/VibratingDivider';
import { HeroSection } from '@/components/HeroSection';
import { content } from '@/data/content';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

export default function HomePage() {
  const sectionsOrder = ['about', 'education', 'experience'] as const;
  const sectionColors = {
    about: 'white',
    education: 'linkedinBlue',
    experience: 'white',
  } as const;

  // Add a client-side only effect to suppress hydration warnings
  useEffect(() => {
    // This runs only on the client, after hydration
    // We could do additional client-side setup here if needed
  }, []);

  // NOTA: `page.tsx` agora é um Client Component para resolver problemas de hidratação.
  // Também movemos o Footer para cá para garantir que ele seja renderizado corretamente.
  const langForPageContent = 'pt'; // Ou outra lógica para determinar o idioma

  return (
    <>
      <main className="container mx-auto px-4 pt-4 pb-12">
        <HeroSection />

        <div className="space-y-8 md:space-y-12 mt-12">
          {sectionsOrder.map((sectionKey, index) => {
            const sectionData = content[langForPageContent]?.sections?.[sectionKey];
            if (!sectionData) {
              console.warn(`Dados da seção não encontrados para: ${sectionKey} no idioma ${langForPageContent}`);
              return null; // Ou renderize um fallback
            }
            const sectionIntro = sectionData.title;
            const color = sectionColors[sectionKey];

            return (
              <div key={sectionKey} className="animate-fadeInUp" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                <SectionCard
                  sectionKey={sectionKey}
                  color={color}
                />
                {index < sectionsOrder.length - 1 && (
                  <VibratingDivider verticalMargin="my-8 md:my-10" className="animate-fadeInUp" style={{ animationDelay: `${0.4 + index * 0.2}s` }} />
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}