import { createSlice } from '@reduxjs/toolkit';

export type MoviesState = {
  isLoading: boolean;
  errorMessage: string | null;
};

const initialState: MoviesState = {
  isLoading: false,
  errorMessage: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
