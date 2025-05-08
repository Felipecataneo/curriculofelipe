// src/components/VibratingDivider.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface VibratingDividerProps {
  className?: string; // Para classes adicionais como animate-fadeInUp
  thickness?: 'px' | '0.5' | '1' | '2';
  color?: string;
  animationType?: 'reverberate' | 'simple'; // Removeremos o hover trigger por enquanto
  verticalMargin?: string;
  style?: React.CSSProperties;
  widthClass?: string; // Nova prop para largura, ex: "w-full", "w-3/4 mx-auto"
}

const VibratingDivider: React.FC<VibratingDividerProps> = ({
  className,
  thickness = 'px',
  color = 'bg-gray-300 dark:bg-brand-gray-medium', // Cor sutil
  animationType = 'reverberate',
  verticalMargin = 'my-16 md:my-20',
  style,
  widthClass = 'w-3/4 md:w-1/2 mx-auto', // Largura padrão se não especificada
}) => {
  const thicknessClasses = {
    px: 'h-px',
    '0.5': 'h-0.5',
    '1': 'h-1',
    '2': 'h-2',
  };

  const hoverAnimationClass = animationType === 'reverberate'
    ? 'hover:animate-reverberate-on-hover' // Tailwind v4 deve gerar animate-reverberate-on-hover
    : 'hover:animate-vibrate-simple-on-hover'; // Tailwind v4 deve gerar animate-vibrate-simple-on-hover


  return (
    // O div externo agora controla a margem vertical e a largura
    <div className={cn(widthClass, verticalMargin, className)} style={style}>
       <div
         role="separator"
         aria-orientation="horizontal"
         className={cn(
           `w-full`, // A barra em si sempre terá 100% da largura do seu pai (o div acima)
           thicknessClasses[thickness] || 'h-px',
           color,
           'rounded-full',
           hoverAnimationClass
         )}
       />
    </div>
  );
};

export default VibratingDivider;