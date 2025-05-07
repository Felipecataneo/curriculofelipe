'use client';

import * as React from 'react';
import { useAppStore } from '@/store';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { content } from '@/data/content'; // Import content for labels

export function LanguageSwitcher() {
  const { language, setLanguage } = useAppStore();
  const currentContent = content[language]; // Get labels based on current language

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('pt')}>
          Português (PT)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          English (EN)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}