'use client';

import { useGenreContext } from '@/context/genre/useGenreContext';
import { availableFilters } from '@/utils/endpoint';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import Wrapper from '../shared/wrapper';

const CatalogHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setGenre } = useGenreContext();

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: selectedGenre } = event.target;

    const queryParams = new URLSearchParams(searchParams?.toString());

    if (selectedGenre !== 'all') {
      localStorage.setItem('selectedGenre', selectedGenre);
      queryParams.set('genre', selectedGenre);
      setGenre(selectedGenre);
    } else {
      queryParams.delete('genre');
      localStorage.removeItem('selectedGenre');
      setGenre(null);
    }

    router.push(`catalog/?${queryParams}`);
  };

  return (
    <Wrapper className="custom-container flex flex-col py-12 gap-12">
      <h1 className="font-bold text-4xl">Top Sellers</h1>
      <div className="flex items-center justify-start gap-6 sm:justify-end sm:w-auto">
        <p>Genre</p>
        <span>|</span>
        <select
          value={searchParams?.get('genre') || 'all'}
          onChange={handleGenreChange}
          className="text-gray-700 rounded-md p-1 w-full sm:w-auto"
        >
          <option value="all">All</option>
          {availableFilters.map((option) => (
            <option
              key={option.toLocaleLowerCase()}
              value={option.toLocaleLowerCase()}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </Wrapper>
  );
};

export default CatalogHeader;
