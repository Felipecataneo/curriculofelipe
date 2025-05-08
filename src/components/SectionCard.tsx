// src/components/SectionCard.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useAppStore, SectionColor } from '@/store';
import { content, SectionKey, ExperienceItem, SkillCategory } from '@/data/content'; // Import new types
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  // DialogDescription, // We'll render content more dynamically
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { User, GraduationCap, Briefcase, Wrench, Award, Languages as LanguagesIcon } from 'lucide-react'; // Added new icons

interface SectionCardProps {
  sectionKey: SectionKey;
  color: SectionColor;
}

const sectionIcons: Record<SectionKey, React.ElementType> = {
  about: User,
  education: GraduationCap,
  experience: Briefcase,
  skills: Wrench,
  certifications: Award,
  languages: LanguagesIcon,
};

// Helper function to render modal content
const renderModalContent = (sectionKey: SectionKey, details: any, language: 'pt' | 'en') => {
  // Common class for list items
  const listItemClass = "text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed";
  const headingClass = "text-lg font-semibold text-primary dark:text-primary mb-1";
  const subHeadingClass = "text-md font-medium text-foreground dark:text-foreground";
  const mutedTextClass = "text-xs text-muted-foreground dark:text-muted-foreground";

  if (sectionKey === 'experience' && Array.isArray(details)) {
    const experienceDetails = details as ExperienceItem[];
    return (
      <div className="space-y-6">
        {experienceDetails.map((job, index) => (
          <div key={index} className="p-4 border border-border dark:border-border rounded-lg bg-card dark:bg-card/50 shadow-sm">
            <h3 className={headingClass}>{job.company}</h3>
            <p className={subHeadingClass}>{job.role}</p>
            <p className={`${mutedTextClass} mb-2`}>{job.dates}</p>
            {job.description && (
              <ul className="list-disc list-inside space-y-1 pl-1">
                {(Array.isArray(job.description) ? job.description : [job.description]).map((point, i) => (
                  <li key={i} className={listItemClass}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (sectionKey === 'skills' && Array.isArray(details)) {
    const skillDetails = details as SkillCategory[];
    return (
      <div className="space-y-6">
        {skillDetails.map((categoryItem, index) => (
          <div key={index} className="p-4 border border-border dark:border-border rounded-lg bg-card dark:bg-card/50 shadow-sm">
            <h3 className={headingClass}>{categoryItem.categoryName}</h3>
            <ul className="list-disc list-inside space-y-1 pl-1">
              {categoryItem.skills.map((skill, i) => (
                <li key={i} className={listItemClass}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  if ((sectionKey === 'education' || sectionKey === 'certifications' || sectionKey === 'languages') && Array.isArray(details)) {
    return (
      <ul className="list-disc list-inside space-y-2 pl-1">
        {(details as string[]).map((item, index) => (
          <li key={index} className={listItemClass}>{item}</li>
        ))}
      </ul>
    );
  }

  // Default for 'about' or simple string details
  if (typeof details === 'string') {
    return <p className="whitespace-pre-wrap text-base text-muted-foreground dark:text-muted-foreground leading-relaxed">{details}</p>;
  }

  return <p className="text-muted-foreground dark:text-muted-foreground">Conteúdo não disponível no formato esperado.</p>;
};


export function SectionCard({ sectionKey, color }: SectionCardProps) {
  const { language, setProfileImageBasedOnColor } = useAppStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentData = content[language].sections[sectionKey];
  const IconComponent = sectionIcons[sectionKey];

  const cardStyles = {
    white: {
      bg: 'bg-card dark:bg-card',
      text: 'text-card-foreground dark:text-card-foreground',
      hoverBg: 'hover:bg-accent dark:hover:bg-accent',
      detailsText: 'text-muted-foreground dark:text-muted-foreground',
      iconColor: 'text-primary dark:text-primary'
    },
    linkedinBlue: {
      bg: 'bg-primary dark:bg-primary',
      text: 'text-primary-foreground dark:text-primary-foreground',
      hoverBg: 'hover:bg-primary/90 dark:hover:bg-primary/90',
      detailsText: 'text-primary-foreground/80 dark:text-primary-foreground/80',
      iconColor: 'text-primary-foreground dark:text-primary-foreground'
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

  // Determine a snippet for the card face
  let cardSnippet = '';
  if (typeof currentData.details === 'string') {
    cardSnippet = currentData.details.split('\n')[0];
  } else if (Array.isArray(currentData.details) && currentData.details.length > 0) {
    if (sectionKey === 'experience') {
        const firstJob = currentData.details[0] as ExperienceItem;
        cardSnippet = `${firstJob.role} at ${firstJob.company}`;
    } else if (sectionKey === 'skills') {
        const firstCategory = currentData.details[0] as SkillCategory;
        cardSnippet = firstCategory.categoryName;
    } else if (typeof currentData.details[0] === 'string') {
        cardSnippet = currentData.details[0];
    }
  }


  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(
            'relative p-6 md:p-8 rounded-lg shadow-md cursor-pointer group border',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring',
            currentStyle.bg,
            currentStyle.text,
            currentStyle.hoverBg,
            hoverScaleEffect,
            'overflow-hidden border-border dark:border-border'
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
            {cardSnippet || 'Clique para ver detalhes...'}
          </p>
          <div className={linkedInLogoAnimation}>
            <img
              src="/images/linkedin-logo.svg"
              alt="LinkedIn Logo"
              className="w-12 h-12 md:w-16 md:h-16 invert opacity-80"
            />
          </div>
        </div>
      </DialogTrigger>

      {isModalOpen && (
        <DialogContent
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[90vh] flex flex-col bg-background dark:bg-background text-foreground dark:text-foreground border-border dark:border-border"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
            <DialogHeader className="flex-shrink-0">
              <DialogTitle className="text-2xl flex items-center gap-3 text-foreground dark:text-foreground">
                {IconComponent && (
                  <IconComponent className="w-7 h-7 shrink-0 text-primary dark:text-primary" />
                )}
                {currentData.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-grow overflow-y-auto py-4 pr-3 space-y-4"> 
              {/* pr-3 for scrollbar space, space-y-4 for spacing between main content blocks */}
              {renderModalContent(sectionKey, currentData.details, language)}
            </div>

            <DialogFooter className="sm:justify-end mt-4 flex-shrink-0">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                >
                  {language === 'pt' ? 'Fechar' : 'Close'}
                </Button>
              </DialogClose>
            </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}