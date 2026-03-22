import { createSlice } from '@reduxjs/toolkit';

export type WatchlistState = {
  movieIds: number[];
};

const initialState: WatchlistState = {
  movieIds: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {},
});

export default watchlistSlice.reducer;
