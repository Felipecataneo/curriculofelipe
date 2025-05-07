// src/components/HeroSection.tsx
'use client';

import Image from 'next/image';
import { useAppStore } from '@/store';
import { content } from '@/data/content';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export function HeroSection() {
  const { language, profileImage } = useAppStore();
  const profileData = content[language].profile;
  const aboutIntro = content[language].sections.about.details.split('\n')[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-6 md:p-10 bg-white dark:bg-brand-gray-dark shadow-xl rounded-lg max-w-4xl mx-auto mt-8 md:mt-12"
    >
      {/* Imagem de Perfil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-brand-gray-medium shrink-0"
      >
        <Image
          key={profileImage}
          src={profileImage}
          alt={profileData.name}
          // Substituir layout="fill" por fill
          fill
          // Substituir objectFit="cover" por object-cover className
          className="transition-opacity duration-500 ease-in-out object-cover" // Adicione object-cover aqui
          priority
        />
      </motion.div>

      {/* Dados */}
      <div className="text-center md:text-left flex-grow space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold gradient-text leading-tight">
          {profileData.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-brand-gray-lightest font-semibold">
          {profileData.role}
        </p>
        <p className="text-sm text-gray-600 dark:text-brand-gray-light mt-1">
          {profileData.address}, {profileData.city}
        </p>
         <p className="text-sm md:text-base text-gray-800 dark:text-brand-gray-lightest mt-4 max-w-prose mx-auto md:mx-0">
            {aboutIntro}...
         </p>

         <div className="pt-4 md:pt-6">
           <SocialLinks />
         </div>
      </div>
    </motion.section>
  );
}