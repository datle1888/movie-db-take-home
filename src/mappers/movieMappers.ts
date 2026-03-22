import { TMDB_IMAGE_BASE_URL } from '../constants/tmdb';
import type { HomeMovie, MovieDetailsData } from '../types/movie';
import type {
  TmdbMovieDetailsResponse,
  TmdbMovieListItem,
} from '../types/tmdb';
import formatReleaseDate from '../utils/formatReleaseDate';
import formatRuntime from '../utils/formatRuntime';
import getYear from '../utils/getYear';

export function mapTmdbMovieListItemToHomeMovie(
  movie: TmdbMovieListItem,
): HomeMovie {
  return {
    id: movie.id,
    title: movie.title?.trim() || 'Untitled movie',
    releaseDate: formatReleaseDate(movie.release_date),
    releaseDateValue: movie.release_date || '',
    rating: Number(movie.vote_average ?? 0),
    overview: movie.overview?.trim() || 'No overview available.',
    posterUrl: movie.poster_path
      ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
      : null,
  };
}

export function mapTmdbMovieDetailsToMovieDetailsData(
  movie: TmdbMovieDetailsResponse,
): MovieDetailsData {
  return {
    id: movie.id,
    title: movie.title?.trim() || 'Untitled movie',
    year: getYear(movie.release_date),
    posterUrl: movie.poster_path
      ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
      : null,
    releaseDate: formatReleaseDate(movie.release_date),
    runtime: formatRuntime(movie.runtime),
    genres:
      movie.genres?.length > 0
        ? movie.genres.map(genre => genre.name).join(', ')
        : 'Unknown genres',
    status: movie.status?.trim() || 'Unknown status',
    originalLanguage: movie.original_language?.trim().toUpperCase() || 'N/A',
    userScore: Number(movie.vote_average ?? 0).toFixed(1),
    tagline: movie.tagline?.trim() || 'No tagline available.',
    overview: movie.overview?.trim() || 'No overview available.',
  };
}
