'use client';

import { createContext } from 'react';

export interface GenreContext {
  selectedGenre: string | null;
  setGenre: (genre: string | null) => void;
}

export const GenreContext = createContext<GenreContext | undefined>(undefined);
