'use client';

import React from 'react';
import { Button } from './ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/felipecataneo/', icon: FaLinkedin },
  { platform: 'GitHub', url: 'https://github.com/felipecataneo', icon: FaGithub },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Button key={link.platform} variant="ghost" size="icon" asChild>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.platform}
              className="flex items-center justify-center"
            >
              <Icon className="w-5 h-5 text-gray-700 dark:text-brand-cyan-light hover:text-brand-blue-dark transition-colors" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;