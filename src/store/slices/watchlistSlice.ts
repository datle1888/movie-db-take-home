import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { WatchlistMovie } from '../../types/movie';

export type WatchlistState = {
  movies: WatchlistMovie[];
  isHydrated: boolean;
};

const initialState: WatchlistState = {
  movies: [],
  isHydrated: false,
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    hydrateWatchlist(state, action: PayloadAction<WatchlistMovie[]>) {
      state.movies = action.payload;
      state.isHydrated = true;
    },
    addMovieToWatchlist(state, action: PayloadAction<WatchlistMovie>) {
      const movieAlreadyExists = state.movies.some(
        movie => movie.id === action.payload.id,
      );

      if (!movieAlreadyExists) {
        state.movies.push(action.payload);
      }
    },
    removeMovieFromWatchlist(state, action: PayloadAction<number>) {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
  },
});

export const {
  hydrateWatchlist,
  addMovieToWatchlist,
  removeMovieFromWatchlist,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
