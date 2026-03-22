import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { hydrateWatchlist } from '../store/slices/watchlistSlice';
import {
  getStoredWatchlistMovies,
  saveWatchlistMovies,
} from '../storage/watchlistStorage';

export default function AppBootstrap() {
  const dispatch = useAppDispatch();
  const watchlistMovies = useAppSelector(state => state.watchlist.movies);
  const isWatchlistHydrated = useAppSelector(
    state => state.watchlist.isHydrated,
  );

  useEffect(() => {
    let isMounted = true;

    async function hydratePersistedState() {
      const storedWatchlistMovies = await getStoredWatchlistMovies();

      if (isMounted) {
        dispatch(hydrateWatchlist(storedWatchlistMovies));
      }
    }

    hydratePersistedState();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isWatchlistHydrated) {
      return;
    }

    saveWatchlistMovies(watchlistMovies).catch(() => {});
  }, [isWatchlistHydrated, watchlistMovies]);

  return null;
}
