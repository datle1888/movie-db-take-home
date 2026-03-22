import { TMDB_IMAGE_BASE_URL } from '../constants/tmdb';
import type { HomeMovie } from '../types/movie';
import type { TmdbMovieListItem } from '../types/tmdb';
import formatReleaseDate from '../utils/formatReleaseDate';

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
