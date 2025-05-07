// src/app/page.tsx
import { SectionCard } from '@/components/SectionCard';
import VibratingDivider from '@/components/VibratingDivider';
import { HeroSection } from '@/components/HeroSection';
import { content } from '@/data/content';
import { Footer } from '@/components/Footer'; // <<< Importe o Footer

export default function HomePage() {
  const sectionsOrder = ['about', 'education', 'experience'] as const;
  const sectionColors = {
    about: 'white',
    education: 'linkedinBlue', // Certifique-se que 'linkedinBlue' está definido no seu tema Tailwind ou substitua por uma cor válida
    experience: 'white',
  } as const;

  // NOTA: `page.tsx` é um Server Component.
  // `useAppStore` (que o Footer usa) só funciona em Client Components.
  // Para `sectionIntro`, estamos pegando 'pt' diretamente. Se você precisar
  // de internacionalização dinâmica para o conteúdo DENTRO de `page.tsx`
  // (e não apenas dentro do Footer), você precisaria de uma estratégia diferente
  // para Server Components (ex: ler locale de cookies/headers).
  // O Footer funcionará com o idioma do store porque é um Client Component.
  const langForPageContent = 'pt'; // Ou outra lógica para determinar o idioma no servidor

  return (
    <> {/* Use um Fragment para envolver main e footer */}
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
                  // Se SectionCard precisar do idioma, você teria que passá-lo:
                  // language={langForPageContent}
                />
                {index < sectionsOrder.length - 1 && (
                  <VibratingDivider verticalMargin="my-8 md:my-10" className="animate-fadeInUp" style={{ animationDelay: `${0.4 + index * 0.2}s` }} />
                )}
              </div>
            );
          })}
        </div>
      </main>
      
    </>
  );
}