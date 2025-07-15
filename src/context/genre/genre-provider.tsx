'use client';

import { ReactNode, useEffect, useState } from 'react';
import { GenreContext } from './genre-context';
import { useRouter } from 'next/navigation';

export const GenreProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(
    typeof window !== 'undefined' ? localStorage.getItem('selectedGenre') : null
  );

  const router = useRouter();

  useEffect(() => {
    const genre = localStorage.getItem('selectedGenre');
    if (genre) {
      const queryParams = new URLSearchParams();
      queryParams.set('genre', genre);
      router.push(`catalog/?${queryParams}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setGenre = (genre: string | null) => {
    setSelectedGenre(genre);
  };

  return (
    <GenreContext.Provider value={{ selectedGenre, setGenre }}>
      {children}
    </GenreContext.Provider>
  );
};
