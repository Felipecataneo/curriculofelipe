'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAppStore, SectionColor } from '@/store';
import { content, SectionKey } from '@/data/content';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger, // Importe o Trigger
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { User, GraduationCap, Briefcase, Link } from 'lucide-react';

interface SectionCardProps {
  sectionKey: SectionKey; // 'about', 'education', 'experience'
  color: SectionColor;    // 'white' | 'linkedinBlue'
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

  const bgColor = color === 'white' ? 'bg-card dark:bg-brand-gray-dark' : 'bg-brand-blue-DEFAULT';
  const textColor = color === 'white' ? 'text-card-foreground dark:text-brand-gray-text' : 'text-white';
  const hoverBgColor = color === 'white' ? 'hover:bg-accent/50 dark:hover:bg-brand-gray-medium' : 'hover:bg-brand-blue-dark';

  const handleMouseEnter = () => {
    setProfileImageBasedOnColor(color);
  };

  const handleMouseLeave = () => {
    if (!isModalOpen) {
       setProfileImageBasedOnColor(null);
    }
  };

   const hoverScaleEffect = "transition-transform duration-200 ease-in-out group-hover:scale-[1.01] group-focus:scale-[1.01]";
   const linkedInLogoAnimation = "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 group-focus:opacity-90 transition-opacity duration-300 bg-black/30 dark:bg-black/50 rounded-lg";

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      {/* Mova o DialogTrigger para envolver a motion.div inteira */}
      <DialogTrigger asChild>
        <motion.div
          className={cn(
            'relative p-6 md:p-8 rounded-lg shadow-md cursor-pointer group border border-transparent',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan-light',
            bgColor,
            textColor,
            hoverBgColor,
            hoverScaleEffect,
            'overflow-hidden'
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          role="button"
          aria-haspopup="dialog"
          aria-label={`Abrir detalhes sobre ${currentData.title}`}
        >
          {/* Conteúdo visível do card */}
          <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-3">
             {IconComponent && <IconComponent className="w-6 h-6 shrink-0 text-brand-cyan-light" />}
             {currentData.title}
          </h2>
           <p className={cn("text-sm mt-2 line-clamp-2", color === 'white' ? 'text-gray-700 dark:text-brand-gray-lightest' : 'text-brand-cyan-light')}>
             {currentData.details.split('\n')[0]}
           </p>

          {/* Animação Hover LinkedIn Logo */}
          <div className={linkedInLogoAnimation}>
             <img
               src="/images/linkedin-logo.svg"
               alt="LinkedIn Logo"
               className="w-12 h-12 md:w-16 md:h-16 invert opacity-80"
              />
           </div>
        </motion.div>
      </DialogTrigger>

      {/* Conteúdo do Modal */}
      <DialogContent
         className="sm:max-w-[625px] top-[15%] translate-y-[-15%] dark:bg-brand-gray-darkest dark:text-brand-gray-text border dark:border-brand-gray-medium"
         onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3 dark:text-white">
             {IconComponent && <IconComponent className="w-7 h-7 shrink-0 text-brand-cyan-light" />}
             {currentData.title}
          </DialogTitle>
          <DialogDescription className="whitespace-pre-wrap pt-4 text-base dark:text-brand-gray-lightest leading-relaxed">
            {currentData.details}
          </DialogDescription>
        </DialogHeader>
         <DialogFooter className="sm:justify-end mt-4">
           <DialogClose asChild>
             <Button type="button" variant="secondary" className="dark:bg-brand-gray-medium dark:text-brand-gray-text dark:hover:bg-brand-gray-light dark:hover:text-white">
               Fechar
             </Button>
           </DialogClose>
         </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}