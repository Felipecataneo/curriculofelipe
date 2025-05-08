'use client';

import React from 'react';
import { useAppStore } from '@/store';
import { content } from '@/data/content';
import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Mail, Phone, Download } from 'lucide-react';
import SocialLinks from './SocialLinks';

export function Footer() {
  const { language } = useAppStore();
  const footerContent = content[language].footer;
  const resumeFileName = language === 'pt' ? 'curriculum-pt.pdf' : 'curriculum-en.pdf';
  const resumePath = `/resumes/${resumeFileName}`;

  return (
    <footer className="mt-12 md:mt-20 p-6 bg-gray-100 dark:bg-brand-gray-dark text-gray-700 dark:text-brand-gray-text rounded-t-lg shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Contatos */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <h3 className="text-base font-semibold hidden md:block text-gray-900 dark:text-white">{footerContent.contact}:</h3>
          <a href={`mailto:${footerContent.email}`} className="flex items-center hover:text-gray-900 dark:hover:text-white transition-colors">
            <Mail className="w-4 h-4 mr-2 shrink-0 text-brand-cyan-DEFAULT" />
            {footerContent.email}
          </a>
          <a href={`tel:${footerContent.phone.replace(/\D/g,'')}`} className="flex items-center hover:text-gray-900 dark:hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2 shrink-0 text-brand-cyan-DEFAULT" />
            {footerContent.phone}
          </a>
        </div>

        {/* Controles e Sociais */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <LanguageSwitcher />
          <Button variant="secondary" size="sm" asChild className="dark:bg-brand-gray-medium dark:text-brand-gray-text dark:hover:bg-brand-gray-light dark:hover:text-white">
            <a href={resumePath} download={resumeFileName} className="flex items-center">
              <Download className="w-4 h-4 mr-2 shrink-0 text-brand-cyan-DEFAULT" />
              <span>{footerContent.downloadResume}</span>
            </a>
          </Button>
          {/* Links Sociais no Footer */}
          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-brand-gray-light mt-6 border-t border-gray-300 dark:border-brand-gray-medium pt-4">
        © {new Date().getFullYear()} {content[language].profile.name}. Todos os direitos reservados.
      </div>
      
    </footer>
  );
}