'use client';

import Image from 'next/image';
import { useAppStore } from '@/store';
import { content } from '@/data/content';

export function Header() {
  const { language, profileImage } = useAppStore();
  const profileData = content[language].profile;

  return (
    <header className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-6 md:p-10 bg-gray-100 dark:bg-gray-800 rounded-b-lg shadow-sm">
      {/* Imagem de Perfil */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-600">
        <Image
          key={profileImage} // Força re-renderização na troca de imagem
          src={profileImage}
          alt={profileData.name}
          layout="fill"
          objectFit="cover"
          priority // Carregar a imagem principal rapidamente
          className="transition-opacity duration-500 ease-in-out" // Efeito suave na troca
        />
      </div>

      {/* Dados */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {profileData.name}
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-300 mt-1">
          {profileData.role}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {profileData.address}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {profileData.city}
        </p>
      </div>
    </header>
  );
}