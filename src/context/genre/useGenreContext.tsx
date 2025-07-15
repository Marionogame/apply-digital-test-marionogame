import { useContext } from 'react';
import { GenreContext } from './genre-context';

export const useGenreContext = (): GenreContext => {
  const context = useContext(GenreContext);
  if (!context) {
    throw new Error('useGenreContext must be used within a GenreProvider');
  }
  return context;
};
