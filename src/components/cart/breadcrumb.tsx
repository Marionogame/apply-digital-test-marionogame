import { useGenreContext } from '@/context/genre/useGenreContext';
import useHrefBuilder from '@/hooks/useHrefBuilder';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Breadcrumb = () => {
  const { selectedGenre } = useGenreContext();

  const href = useHrefBuilder(selectedGenre);

  return (
    <Link href={href}>
      <button className="flex gap-4">
        <ArrowLeft width={24} height={24} />
        <p>Back to Catalog</p>
      </button>
    </Link>
  );
};

export default Breadcrumb;
