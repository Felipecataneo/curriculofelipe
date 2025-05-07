import { create } from 'zustand';

type Language = 'pt' | 'en';

// Defina os caminhos corretos para suas imagens
const IMAGE_PATHS = {
  default: '/images/profile-image-1.png', // Imagem inicial ou padrão
  white: '/images/profile-image-1.png',
  linkedinBlue: '/images/profile-image-2.png',
};

interface AppState {
  language: Language;
  profileImage: string;
  setLanguage: (lang: Language) => void;
  // A imagem será definida baseada na COR do componente que está em hover/foco
  setProfileImageBasedOnColor: (color: 'white' | 'linkedinBlue' | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'pt', // Idioma padrão
  profileImage: IMAGE_PATHS.default, // Imagem padrão inicial

  setLanguage: (lang) => set({ language: lang }),

  setProfileImageBasedOnColor: (color) => {
    if (color === 'white') {
      set({ profileImage: IMAGE_PATHS.white });
    } else if (color === 'linkedinBlue') {
      set({ profileImage: IMAGE_PATHS.linkedinBlue });
    } else {
      // Volta para a imagem padrão se não houver hover/foco
      set({ profileImage: IMAGE_PATHS.default });
    }
  },
}));

export type SectionColor = 'white' | 'linkedinBlue';