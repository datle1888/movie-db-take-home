import type { MovieCategory } from '../constants/movieCategories';
import type { TmdbMovieListResponse } from '../types/tmdb';
import tmdbClient from './tmdbClient';

export async function fetchMoviesByCategory(
  category: MovieCategory,
  page = 1,
): Promise<TmdbMovieListResponse> {
  const response = await tmdbClient.get<TmdbMovieListResponse>(
    `/movie/${category}`,
    {
      params: { page },
    },
  );

  return response.data;
}
