import type { Config } from 'tailwindcss';

const config: Config = {
  // O array 'content' diz ao Tailwind onde procurar as classes utilitárias.
  // Sem isso, ele não gera CSS para as classes que você usa no seu código.
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}', // Incluir lib se tiver classes/configurações lá
  ],
  darkMode: 'class', // Configuração para o dark mode, baseado no layout.tsx
  theme: {
    container: { // Mapeia a configuração do container definida em @theme no globals.css
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px", // Mapeia --screens-2xl de @theme
      },
    },
    extend: {
      // Mapeia suas variáveis CSS para nomes de cores no tema Tailwind.
      // Isso permite usar classes como bg-primary, text-brand-blue-DEFAULT, etc.
      colors: {
         border: "hsl(var(--border))",
         input: "hsl(var(--input))",
         ring: "hsl(var(--ring))",
         background: "hsl(var(--background))",
         foreground: "hsl(var(--foreground))",
         primary: {
           DEFAULT: "hsl(var(--primary))",
           foreground: "hsl(var(--primary-foreground))",
         },
         secondary: {
           DEFAULT: "hsl(var(--secondary))",
           foreground: "hsl(var(--secondary-foreground))",
         },
         destructive: {
           DEFAULT: "hsl(var(--destructive))",
           foreground: "hsl(var(--destructive-foreground))",
         },
         muted: {
           DEFAULT: "hsl(var(--muted))",
           foreground: "hsl(var(--muted-foreground))",
         },
         accent: {
           DEFAULT: "hsl(var(--accent))",
           foreground: "hsl(var(--accent-foreground))",
         },
         popover: {
           DEFAULT: "hsl(var(--popover))",
           foreground: "hsl(var(--popover-foreground))",
         },
         card: {
           DEFAULT: "hsl(var(--card))",
           foreground: "hsl(var(--card-foreground))",
         },
         // Cores customizadas da sua marca
         'brand-cyan': {
           light: 'var(--color-brand-cyan-light)',
           DEFAULT: 'var(--color-brand-cyan-DEFAULT)',
           dark: 'var(--color-brand-cyan-dark)',
         },
         'brand-blue': {
           light: 'var(--color-brand-blue-light)',
           DEFAULT: 'var(--color-brand-blue-DEFAULT)',
           dark: 'var(--color-brand-blue-dark)',
         },
         'brand-gray': {
            darkest: 'var(--color-brand-gray-darkest)',
            dark: 'var(--color-brand-gray-dark)',
            medium: 'var(--color-brand-gray-medium)',
            light: 'var(--color-brand-gray-light)',
            lightest: 'var(--color-brand-gray-lightest)',
            text: 'var(--color-brand-gray-text)',
         },
         // Inclua as cores do gráfico se precisar delas como utilitários
         'chart-1': 'var(--chart-1)',
         'chart-2': 'var(--chart-2)',
         'chart-3': 'var(--chart-3)',
         'chart-4': 'var(--chart-4)',
         'chart-5': 'var(--chart-5)',
         // Cores do cubo do LinkedIn
         'linkedin-cube-face-bg': 'var(--linkedin-cube-face-bg)',
         'linkedin-cube-face-border': 'var(--linkedin-cube-face-border)',
         'linkedin-icon-color': 'var(--linkedin-icon-color)',
      },
       borderRadius: { // Mapeia --radius para classes como rounded-lg, rounded-md, rounded-sm
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // É bom duplicar os keyframes e animations aqui também,
      // embora o @theme já os defina no CSS.
      keyframes: {
         reverberate: {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg) scaleY(1)' },
            '25%': { transform: 'translateY(-1.5px) rotate(-0.2deg) scaleY(1.03)' },
            '50%': { transform: 'translateY(0px) rotate(0deg) scaleY(1)' },
            '75%': { transform: 'translateY(1.5px) rotate(0.2deg) scaleY(1.03)' },
         },
         vibrateSimple: {
            '0%, 100%': { transform: 'translateY(0)' },
            '20%, 80%': { transform: 'translateY(-1px)' },
            '40%, 60%': { transform: 'translateY(1px)' },
         },
         fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
         },
         rotateCube: {
            '0%': { transform: 'rotateX(-20deg) rotateY(-30deg) rotateZ(0deg)' },
            '100%': { transform: 'rotateX(-20deg) rotateY(330deg) rotateZ(0deg)' },
         },
      },
      animation: {
        'reverberate-on-hover': 'reverberate 0.15s linear infinite',
        'vibrate-simple-on-hover': 'vibrateSimple 0.1s linear infinite',
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
        'cube-spin': 'rotateCube 15s infinite linear',
      },
    },
  },
  plugins: [], // Adicione outros plugins Tailwind aqui se necessário
};

export default config;