import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/storageKeys';
import type { WatchlistMovie } from '../types/movie';

export async function getStoredWatchlistMovies(): Promise<WatchlistMovie[]> {
  const rawValue = await AsyncStorage.getItem(STORAGE_KEYS.WATCHLIST_MOVIES);

  if (!rawValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(rawValue);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue
      .filter(movie => {
        return (
          typeof movie?.id === 'number' &&
          typeof movie?.title === 'string' &&
          typeof movie?.releaseDate === 'string' &&
          typeof movie?.overview === 'string' &&
          (typeof movie?.posterUrl === 'string' || movie?.posterUrl === null)
        );
      })
      .map(movie => ({
        id: movie.id,
        title: movie.title,
        releaseDate: movie.releaseDate,
        releaseDateValue:
          typeof movie.releaseDateValue === 'string'
            ? movie.releaseDateValue
            : '',
        rating: typeof movie.rating === 'number' ? movie.rating : 0,
        overview: movie.overview,
        posterUrl: movie.posterUrl,
      }));
  } catch {
    return [];
  }
}

export async function saveWatchlistMovies(
  movies: WatchlistMovie[],
): Promise<void> {
  await AsyncStorage.setItem(
    STORAGE_KEYS.WATCHLIST_MOVIES,
    JSON.stringify(movies),
  );
}
