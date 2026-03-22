import type { MovieCategory } from '../constants/movieCategories';
import type {
  TmdbMovieDetailsResponse,
  TmdbMovieListResponse,
} from '../types/tmdb';
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

export async function fetchMovieDetails(
  movieId: number,
): Promise<TmdbMovieDetailsResponse> {
  const response = await tmdbClient.get<TmdbMovieDetailsResponse>(
    `/movie/${movieId}`,
  );

  return response.data;
}
