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
  
  // Formatar o número de telefone para o WhatsApp (remover caracteres não numéricos)
  const whatsappNumber = footerContent.phone.replace(/\D/g,'');
  // Criar a URL do WhatsApp com o número formatado
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="mt-12 md:mt-20 p-6 bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground rounded-t-lg shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <h3 className="text-base font-semibold hidden md:block text-foreground dark:text-foreground">{footerContent.contact}:</h3>
          <a 
            href={`mailto:${footerContent.email}`} 
            className="flex items-center hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 mr-2 shrink-0 text-brand-cyan-default" />
            {footerContent.email}
          </a>
          <a 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 shrink-0 text-brand-cyan-default" />
            {footerContent.phone}
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <LanguageSwitcher />
          <Button 
            variant="outline"
            size="sm" 
            asChild
          >
            <a href={resumePath} download={resumeFileName} className="flex items-center">
              <Download className="w-4 h-4 mr-2 shrink-0 text-brand-cyan-default" />
              <span>{footerContent.downloadResume}</span>
            </a>
          </Button>
          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground dark:text-muted-foreground mt-6 border-t border-border dark:border-border pt-4">
        © {new Date().getFullYear()} {content[language].profile.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}