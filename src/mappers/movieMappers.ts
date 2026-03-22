import { TMDB_IMAGE_BASE_URL } from '../constants/tmdb';
import type {
  HomeMovie,
  MovieCastMember,
  MovieCrewCredit,
  MovieDetailsData,
  MovieRecommendation,
  WatchlistMovie,
} from '../types/movie';
import type {
  TmdbMovieCastItem,
  TmdbMovieCrewItem,
  TmdbMovieDetailsResponse,
  TmdbMovieListItem,
} from '../types/tmdb';
import formatOriginalLanguage from '../utils/formatOriginalLanguage';
import formatReleaseDate from '../utils/formatReleaseDate';
import formatReleaseDateShort from '../utils/formatReleaseDateShort';
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

export function mapTmdbCrewToMovieCredits(
  crew: TmdbMovieCrewItem[],
): MovieCrewCredit[] {
  const relevantCrew = crew.filter(member => {
    return (
      member.job === 'Director' ||
      member.job === 'Writer' ||
      member.department === 'Writing'
    );
  });

  const groupedCrew = new Map<
    number,
    { id: number; name: string; roles: Set<string> }
  >();

  relevantCrew.forEach(member => {
    const existingCrewMember = groupedCrew.get(member.id);
    const normalizedRole = member.job === 'Director' ? 'Director' : 'Writer';

    if (existingCrewMember) {
      existingCrewMember.roles.add(normalizedRole);
      return;
    }

    groupedCrew.set(member.id, {
      id: member.id,
      name: member.name,
      roles: new Set([normalizedRole]),
    });
  });

  return Array.from(groupedCrew.values())
    .map(member => ({
      id: member.id,
      name: member.name,
      role: Array.from(member.roles).join(', '),
    }))
    .sort((leftMember, rightMember) => {
      const leftHasDirectorRole = leftMember.role.includes('Director');
      const rightHasDirectorRole = rightMember.role.includes('Director');

      if (leftHasDirectorRole && !rightHasDirectorRole) {
        return -1;
      }

      if (!leftHasDirectorRole && rightHasDirectorRole) {
        return 1;
      }

      return 0;
    })
    .slice(0, 4);
}

export function mapTmdbCastToMovieCastMembers(
  cast: TmdbMovieCastItem[],
): MovieCastMember[] {
  return cast.slice(0, 10).map(member => ({
    id: member.id,
    name: member.name?.trim() || 'Unknown cast member',
    character: member.character?.trim() || 'Unknown role',
    imageUrl: member.profile_path
      ? `${TMDB_IMAGE_BASE_URL}${member.profile_path}`
      : null,
  }));
}

export function mapTmdbRecommendationsToMovieRecommendations(
  movies: TmdbMovieListItem[],
): MovieRecommendation[] {
  return movies.slice(0, 10).map(movie => ({
    id: movie.id,
    title: movie.title?.trim() || 'Untitled movie',
    userScore: `${Math.round(Number(movie.vote_average ?? 0) * 10)}%`,
    posterUrl: movie.poster_path
      ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
      : null,
  }));
}

export function mapTmdbMovieDetailsToMovieDetailsData(
  movie: TmdbMovieDetailsResponse,
  credits: MovieCrewCredit[] = [],
  topCast: MovieCastMember[] = [],
  recommendations: MovieRecommendation[] = [],
): MovieDetailsData {
  return {
    id: movie.id,
    title: movie.title?.trim() || 'Untitled movie',
    year: getYear(movie.release_date),
    posterUrl: movie.poster_path
      ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
      : null,
    releaseDateShort: formatReleaseDateShort(movie.release_date),
    runtime: formatRuntime(movie.runtime),
    genresText:
      movie.genres?.length > 0
        ? movie.genres.map(genre => genre.name).join(', ')
        : 'Unknown genres',
    status: movie.status?.trim() || 'Unknown status',
    originalLanguage: formatOriginalLanguage(movie.original_language),
    userScore: `${Math.round(Number(movie.vote_average ?? 0) * 10)}%`,
    tagline: movie.tagline?.trim() || 'No tagline available.',
    overview: movie.overview?.trim() || 'No overview available.',
    credits,
    topCast,
    recommendations,
  };
}

export function mapMovieDetailsDataToWatchlistMovie(
  movie: MovieDetailsData,
): WatchlistMovie {
  return {
    id: movie.id,
    title: movie.title,
    releaseDate: movie.releaseDateShort,
    overview: movie.overview,
    posterUrl: movie.posterUrl,
  };
}
