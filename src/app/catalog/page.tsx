import GameList from '@/components/catalog/game-list';
import CatalogHeader from '@/components/catalog/header';
import Wrapper from '@/components/shared/wrapper';
import { Suspense } from 'react';

const Catalog = () => {
  return (
    <Suspense>
      <Wrapper>
        <CatalogHeader />
        <div className="border-[0.5px]"></div>
        <GameList />
      </Wrapper>
    </Suspense>
  );
};

export default Catalog;
