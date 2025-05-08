// src/components/LayoutClientShell.tsx
'use client';

import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import { AnimatePresence, motion } from 'framer-motion';

export default function LayoutClientShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePreloaderLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isClient && loading && <Preloader onLoaded={handlePreloaderLoaded} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isClient && !loading && (
          <motion.div
            key="page-content-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow flex flex-col" // Este div assume o papel do que estava no RootLayout
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Se o conteúdo não for exibido enquanto loading=true e isClient=false, pode haver um "pulo"
          Para mitigar, você pode renderizar {children} com opacity 0 ou visibility hidden
          até que isClient e !loading sejam verdadeiros.
          Ou, simplesmente aceitar que no primeiro render do servidor, o conteúdo não estará lá e o preloader assume no cliente.
      */}
       {!isClient && ( /* Fallback para SSR/SSG antes do JS carregar */
        <div className="flex-grow flex flex-col opacity-0" aria-hidden="true">
          {children}
        </div>
      )}
    </>
  );
}