import { createSlice } from '@reduxjs/toolkit';

export type PreferencesState = {
  selectedCategory: 'now_playing' | 'upcoming' | 'popular';
};

const initialState: PreferencesState = {
  selectedCategory: 'now_playing',
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {},
});

export default preferencesSlice.reducer;
