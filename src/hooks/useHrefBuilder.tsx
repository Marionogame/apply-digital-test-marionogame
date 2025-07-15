import { useMemo } from 'react';

const useHrefBuilder = (selectedGenre: string | null) => {
  const href = useMemo(() => {
    return `catalog/${selectedGenre ? `?genre=${selectedGenre}` : ''}`;
  }, [selectedGenre]);

  return href;
};

export default useHrefBuilder;
