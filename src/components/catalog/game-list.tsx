'use client';

import { Game } from '@/utils/endpoint';
import GameItem from './game-item';
import { useEffect, useState } from 'react';
import Spinner from '../shared/spinner';
import { fetchGames } from '@/services/game-service';
import { useGenreContext } from '@/context/genre/useGenreContext';
import Pagination from '../shared/pagination';
import Wrapper from '../shared/wrapper';

const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { selectedGenre } = useGenreContext();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const loadGames = async () => {
      setIsLoading(true);
      try {
        const { games: data, totalPages } = await fetchGames(
          selectedGenre,
          selectedGenre && selectedGenre !== 'all' ? 1 : currentPage
        );

        setGames(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadGames();
  }, [currentPage, selectedGenre]);

  return (
    <Wrapper className="custom-container flex flex-col gap-12 py-12">
      <div className="flex-grow grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 place-items-center">
        {games.length > 0 &&
          games.map((game) => <GameItem key={game.id} game={game} />)}
      </div>

      {!isLoading && (
        <div className="flex items-start justify-center 2xl:justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}

      <div className="flex justify-center items-center w-full h-full">
        <Spinner isLoading={isLoading} />
      </div>
    </Wrapper>
  );
};

export default GameList;
