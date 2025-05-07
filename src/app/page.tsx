// src/app/page.tsx
import { SectionCard } from '@/components/SectionCard';
import VibratingDivider from '@/components/VibratingDivider';
import { HeroSection } from '@/components/HeroSection'; // Importe a HeroSection
import { content } from '@/data/content'; // Importe o conteúdo para os intros

export default function HomePage() {
  const sectionsOrder = ['about', 'education', 'experience'] as const; // Define a ordem e tipos
  const sectionColors = {
    about: 'white',
    education: 'linkedinBlue',
    experience: 'white',
  } as const; // Mapeia key para cor

  return (
    <main className="container mx-auto px-4 pt-4 pb-12"> {/* Adicione um container e padding */}
      <HeroSection /> {/* A nova seção principal */}

      {/* Use map para renderizar as seções dinamicamente */}
      <div className="space-y-8 md:space-y-12 mt-12"> {/* Espaçamento maior entre as seções */}
        {sectionsOrder.map((sectionKey, index) => {
          // Use o conteúdo para pegar o título da seção para o 'intro'
          const sectionIntro = content.pt.sections[sectionKey].title; // Use pt como fallback ou use o language do store se necessário (mas page é Server Component)
          const color = sectionColors[sectionKey];

          return (
            <div key={sectionKey} className="animate-fadeInUp" style={{ animationDelay: `${0.3 + index * 0.2}s` }}> {/* Aplica animação com delay */}
              {/* Título pequeno para a seção, opcional */}
               {/* <h2 className="text-xl md:text-2xl font-bold text-center mb-4 capitalize dark:text-brand-gray-lightest">
                 {sectionIntro}
               </h2> */}

              <SectionCard
                sectionKey={sectionKey}
                color={color}
              />
              {index < sectionsOrder.length - 1 && ( // Não renderiza o divider depois da última seção
                <VibratingDivider verticalMargin="my-8 md:my-10" className="animate-fadeInUp" style={{ animationDelay: `${0.4 + index * 0.2}s` }} /> // Animação no divider também
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}