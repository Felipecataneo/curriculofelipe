// tailwind.config.ts (Exemplo MÍNIMO para v4)
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [ // ESSENCIAL!
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}', // Se houver utilitários aqui
  ],
  darkMode: 'class', // ESSENCIAL se você usa dark mode
  theme: {
    // Você PODE estender ou definir coisas aqui que não estão no @theme do CSS,
    // mas a ideia do v4 é centralizar mais no CSS.
    // Se todas as suas cores, fontes, animações, etc., estão no globals.css @theme,
    // a seção 'extend' aqui para essas coisas pode ficar vazia ou ser removida.
    //
    // Exemplo: Se você PRECISAR definir 'container' aqui porque a versão do @theme não funciona como esperado:
    // container: {
    //   center: true,
    //   padding: "2rem", // Este padding será aplicado à classe .container
    //   screens: {
    //     "2xl": "1400px", // Para max-w-screen-2xl se usado com .container
    //   },
    // },
  },
  plugins: [

  ],
};

export default config;