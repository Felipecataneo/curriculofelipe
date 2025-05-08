// src/components/SectionCard.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
// Remove AnimatePresence import
// Remove motion import
import { cn } from '@/lib/utils';
import { useAppStore, SectionColor } from '@/store';
import { content, SectionKey } from '@/data/content';
import {
  Dialog,
  DialogContent, // Keep
  DialogHeader, // Keep
  DialogTitle, // Keep
  DialogDescription, // Keep
  DialogTrigger, // Keep
  DialogFooter, // Keep
  DialogClose, // Keep
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { User, GraduationCap, Briefcase, Link } from 'lucide-react';

// Remove modalVariants

interface SectionCardProps {
  sectionKey: SectionKey;
  color: SectionColor;
}

const sectionIcons: Record<SectionKey, React.ElementType> = {
  about: User,
  education: GraduationCap,
  experience: Briefcase,
};

export function SectionCard({ sectionKey, color }: SectionCardProps) {
  const { language, setProfileImageBasedOnColor } = useAppStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentData = content[language].sections[sectionKey];
  const IconComponent = sectionIcons[sectionKey];

  // Definindo cores baseadas na prop 'color' e nas novas variáveis CSS
  const cardStyles = {
    white: {
      bg: 'bg-card dark:bg-card', // Card usa seu próprio fundo
      text: 'text-card-foreground dark:text-card-foreground',
      hoverBg: 'hover:bg-accent dark:hover:bg-accent',
      detailsText: 'text-muted-foreground dark:text-muted-foreground', // Para o texto do parágrafo
      iconColor: 'text-primary dark:text-primary' // Ícones no card branco usarão a cor primária
    },
    linkedinBlue: {
      bg: 'bg-primary dark:bg-primary',
      text: 'text-primary-foreground dark:text-primary-foreground',
      hoverBg: 'hover:bg-primary/90 dark:hover:bg-primary/90', // Um pouco mais escuro no hover
      detailsText: 'text-primary-foreground/80 dark:text-primary-foreground/80', // Detalhes com leve opacidade
      iconColor: 'text-primary-foreground dark:text-primary-foreground' // Ícones no card azul usarão a cor de texto do primário
    },
  };

  const currentStyle = cardStyles[color];

  const handleMouseEnter = () => setProfileImageBasedOnColor(color);
  const handleMouseLeave = () => {
    if (!isModalOpen) setProfileImageBasedOnColor(null);
  };

  const hoverScaleEffect =
    'transition-transform duration-200 ease-in-out group-hover:scale-[1.01] group-focus:scale-[1.01]';
  const linkedInLogoAnimation =
    'absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 group-focus:opacity-90 transition-opacity duration-300 bg-black/30 dark:bg-black/50 rounded-lg';

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <div // Era motion.div, mas a animação de entrada da página já cuida disso
          className={cn(
            'relative p-6 md:p-8 rounded-lg shadow-md cursor-pointer group border', // Adicionado border para melhor definição
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring', // Usando --ring para foco
            currentStyle.bg,
            currentStyle.text,
            currentStyle.hoverBg,
            hoverScaleEffect,
            'overflow-hidden border-border dark:border-border' // Usando a cor de borda padrão
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          role="button"
          aria-haspopup="dialog"
          aria-label={`Abrir detalhes sobre ${currentData.title}`}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-3">
            {IconComponent && (
              <IconComponent className={cn("w-6 h-6 shrink-0", currentStyle.iconColor)} />
            )}
            {currentData.title}
          </h2>
          <p
            className={cn(
              'text-sm mt-2 line-clamp-2',
              currentStyle.detailsText
            )}
          >
            {currentData.details.split('\n')[0]}
          </p>
          <div className={linkedInLogoAnimation}>
            <img
              src="/images/linkedin-logo.svg"
              alt="LinkedIn Logo"
              className="w-12 h-12 md:w-16 md:h-16 invert opacity-80" // 'invert' pode precisar de ajuste dependendo do logo
            />
          </div>
        </div>
      </DialogTrigger>

      {isModalOpen && (
        <DialogContent
          className="sm:max-w-[625px] top-[15%] translate-y-[-15%] bg-background dark:bg-background text-foreground dark:text-foreground border-border dark:border-border" // Modal usa cores de fundo e texto padrão
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3 text-foreground dark:text-foreground">
                {IconComponent && (
                  <IconComponent className="w-7 h-7 shrink-0 text-primary dark:text-primary" /> // Ícone do modal com cor primária
                )}
                {currentData.title}
              </DialogTitle>
              <DialogDescription className="whitespace-pre-wrap pt-4 text-base text-muted-foreground dark:text-muted-foreground leading-relaxed">
                {currentData.details}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-end mt-4">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary" // Botão secundário já deve ter cores boas com as novas vars
                >
                  Fechar
                </Button>
              </DialogClose>
            </DialogFooter>
          </>
        </DialogContent>
      )}
    </Dialog>
  );
}