import type { MovieCategory } from '../constants/movieCategories';
import type {
  TmdbMovieCreditsResponse,
  TmdbMovieDetailsResponse,
  TmdbMovieListResponse,
  TmdbMovieRecommendationsResponse,
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

export async function searchMovies(
  query: string,
  page = 1,
): Promise<TmdbMovieListResponse> {
  const response = await tmdbClient.get<TmdbMovieListResponse>(
    '/search/movie',
    {
      params: {
        query,
        page,
        include_adult: false,
      },
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

export async function fetchMovieCredits(
  movieId: number,
): Promise<TmdbMovieCreditsResponse> {
  const response = await tmdbClient.get<TmdbMovieCreditsResponse>(
    `/movie/${movieId}/credits`,
  );

  return response.data;
}

export async function fetchMovieRecommendations(
  movieId: number,
): Promise<TmdbMovieRecommendationsResponse> {
  const response = await tmdbClient.get<TmdbMovieRecommendationsResponse>(
    `/movie/${movieId}/recommendations`,
  );

  return response.data;
}
