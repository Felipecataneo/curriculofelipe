// components/FloatingLinkedInCube.tsx
import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon'; // Ajuste o caminho se necessário

interface FloatingLinkedInCubeProps {
  linkedinUrl: string;
  size?: number;
  className?: string;
}

const FloatingLinkedInCube: React.FC<FloatingLinkedInCubeProps> = ({
  linkedinUrl,
  size = 48, // Tamanho padrão de 48px
  className = '',
}) => {
  const halfSize = size / 2;

  const cssVariables = {
    '--cube-size': `${size}px`,
    '--half-size': `${halfSize}px`,
  } as React.CSSProperties;

  const faceCommonClasses =
    'absolute flex items-center justify-center w-full h-full backface-hidden border';
  
  // Estilos para as faces usando variáveis CSS globais
  const faceStyle: React.CSSProperties = {
    backgroundColor: 'var(--linkedin-cube-face-bg)',
    borderColor: 'var(--linkedin-cube-face-border)',
  };

  // Estilo para o ícone usando variável CSS global
  const iconStyle: React.CSSProperties = {
    color: 'var(--linkedin-icon-color)', // A cor do SVG virá daqui
  };

  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View LinkedIn Profile"
      className={`fixed bottom-6 right-6 z-50 group ${className}`} // Posicionamento padrão
      style={cssVariables} // Aplica --cube-size e --half-size para uso nos transforms
    >
      <div
        className="cube-container" // Container para perspectiva
        style={{
          width: 'var(--cube-size)',
          height: 'var(--cube-size)',
          perspective: '1000px', // Adiciona profundidade 3D
        }}
      >
        <div
          className="cube relative w-full h-full transform-preserve-3d animate-cube-spin group-hover:[animation-play-state:paused]"
          // animate-cube-spin será gerado pelo Tailwind a partir do @theme
          // transform-preserve-3d é um utilitário padrão
        >
          {/* Front Face */}
          <div
            className={faceCommonClasses} // backface-hidden é padrão
            style={{ ...faceStyle, transform: 'rotateY(0deg) translateZ(var(--half-size))' }}
          >
            <LinkedInIcon className="w-3/5 h-3/5" style={iconStyle} />
          </div>
          {/* Back Face */}
          <div
            className={faceCommonClasses}
            style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(var(--half-size))' }}
          >
            <LinkedInIcon className="w-3/5 h-3/5" style={iconStyle} />
          </div>
          {/* Right Face */}
          <div
            className={faceCommonClasses}
            style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(var(--half-size))' }}
          >
            <LinkedInIcon className="w-3/5 h-3/5" style={iconStyle} />
          </div>
          {/* Left Face */}
          <div
            className={faceCommonClasses}
            style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(var(--half-size))' }}
          >
            <LinkedInIcon className="w-3/5 h-3/5" style={iconStyle} />
          </div>
          {/* Top Face */}
          <div
            className={faceCommonClasses}
            style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(var(--half-size))' }}
          >
            <LinkedInIcon className="w-3/5 h-3/5" style={iconStyle} />
          </div>
          {/* Bottom Face */}
          <div
            className={faceCommonClasses}
            style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(var(--half-size))' }}
          >
            <LinkedInIcon className="w-3/5 h-3/5" style={iconStyle} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default FloatingLinkedInCube;