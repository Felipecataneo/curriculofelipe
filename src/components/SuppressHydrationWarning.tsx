'use client';

import { useEffect } from 'react';

export default function SuppressHydrationWarning() {
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = function (...args) {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Hydration failed') || args[0].includes('did not match'))
      ) {
        return;
      }
      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return null;
}
