// src/components/Preloader.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Adicionado AnimatePresence

// Definição de tipos
interface Dimension {
  width: number;
  height: number;
}

// Constantes
const words: string[] = ["Olá", "Hallo", "Bonjour", "Ciao", "やあ", "Hallå", "Guten tag", "Hello"]; // "Olá" primeiro para PT

// Animações
export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 }
  },
  exit: { // Adicionado exit para o texto sumir suavemente
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// SlideUp para a tela inteira
export const slideUpScreen = {
  initial: {
    y: "0%" // Começa visível
  },
  exit: {
    y: "-100%", // Desliza para cima para sair
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } // Ajustado delay
  }
};


export default function Preloader({ onLoaded }: { onLoaded: () => void }): React.JSX.Element | null {
  const [index, setIndex] = useState<number>(0);
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true); // Controla a visibilidade do preloader

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = (): void => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      // Quando todas as palavras foram mostradas, espera um pouco e então esconde o preloader
      const finalTimeout = setTimeout(() => {
        setIsVisible(false);
        onLoaded(); // Chama a função para indicar que o preloader terminou
      }, 2400); // Tempo extra para o último "Hallo" e a curva
      return () => clearTimeout(finalTimeout);
    }
    
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 2400 : 300); // Mantém a lógica original
    
    return () => clearTimeout(timeout);
  }, [index, onLoaded]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + (dimension.height * 0.3)} 0 ${dimension.height} L0 0`; // Curva mais pronunciada
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    exit: { // Animação da curva ao sair
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 } // Ajustado delay
    }
  };
  
  // Se não for mais visível, não renderiza nada
  if (!isVisible && index === words.length -1) return null;


  return (
    <AnimatePresence mode="wait"> {/* Garante que as animações de saída completem */}
      {isVisible && (
        <motion.div 
          key="preloader-screen"
          variants={slideUpScreen} 
          initial="initial" 
          exit="exit" 
          // Usando variáveis CSS para cores de fundo e texto
          // Para o tema escuro padrão, isso funcionará. Se você tiver tema claro por padrão, ajuste.
          className="fixed inset-0 flex items-center justify-center bg-background text-foreground dark:bg-background dark:text-foreground overflow-hidden z-[100]" // z-index alto
        >
          {dimension.width > 0 && (
            <>
              <motion.p 
                key={`word-${index}`} // Key para animar a troca de palavras
                variants={opacity} 
                initial="initial" 
                animate="enter" 
                exit="exit" // Adicionado para a saída da palavra
                className="relative text-5xl md:text-7xl lg:text-8xl font-bold z-10 flex items-center"
              >
                {/* Círculo com cor primária */}
                <span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-primary dark:bg-primary mr-3 md:mr-4 rounded-full"></span>
                {words[index]}
              </motion.p>
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none"> {/* Adicionado pointer-events-none */}
                <motion.path 
                  key="preloader-curve"
                  variants={curve} 
                  initial="initial" 
                  animate="exit" // Anima para o targetPath (sem curva) enquanto visível
                                  // A animação de saída da tela inteira fará o resto
                  // Usando uma cor de card ou secundária para o preenchimento da curva
                  fill="var(--color-card)" // Ou var(--color-secondary)
                  className="dark:fill-[var(--color-card)]" // Exemplo de como poderia ser para o dark mode se diferente
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}