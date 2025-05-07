// src/components/VibratingDivider.tsx
import React from 'react';
import { cn } from '@/lib/utils'; // Importe cn

interface VibratingDividerProps {
  className?: string;
  thickness?: 'px' | '0.5' | '1' | '2';
  color?: string;
  animationType?: 'reverberate' | 'simple';
  verticalMargin?: string; // ex: 'my-8', 'my-12', 'my-16'
  style?: React.CSSProperties; // Permite passar estilos como animationDelay
}

const VibratingDivider: React.FC<VibratingDividerProps> = ({
  className, // Remove o valor padrão para usar cn
  thickness = 'px',
  color = 'bg-gray-700 dark:bg-brand-gray-medium', // Cor padrão sutil para o tema escuro, ajustado
  animationType = 'reverberate',
  verticalMargin = 'my-16 md:my-20', // Espaçamento padrão entre seções
  style, // Recebe o style prop
}) => {
  const thicknessClasses = {
    px: 'h-px',
    '0.5': 'h-0.5',
    '1': 'h-1',
    '2': 'h-2',
  };

  const animationClass = animationType === 'reverberate'
    ? 'group-hover/divider:animate-reverberate-on-hover' // Use group/divider
    : 'group-hover/divider:animate-vibrate-simple-on-hover'; // Use group/divider

  return (
    // Adicione um div pai com a classe 'group/divider'
    <div className={cn(`w-3/4 md:w-1/2 mx-auto ${verticalMargin} group/divider`, className)} style={style}>
       <div
         role="separator"
         aria-orientation="horizontal"
         className={`
           w-full h-full
           ${thicknessClasses[thickness] || 'h-px'}
           ${color}
           transform-gpu
           cursor-pointer
           rounded-full
           ${animationClass}
         `}
       />
    </div>
  );
};

export default VibratingDivider;