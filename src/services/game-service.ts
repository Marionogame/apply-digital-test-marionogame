import { ApiResponse } from '@/utils/endpoint';

export const fetchGames = async (
  genre: string | null,
  page: number = 1
): Promise<ApiResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const url = new URL(baseUrl);

  if (genre) url.searchParams.set('genre', genre);

  url.searchParams.set('page', page.toString());

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }

    return response.json();
  } catch (error: any) {
    throw new Error(`Failed to fetch games: ${error.message}`);
  }
};
