import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  isMovieCategory,
  type MovieCategory,
} from '../constants/movieCategories';
import { STORAGE_KEYS } from '../constants/storageKeys';

export async function getStoredSelectedCategory(): Promise<MovieCategory | null> {
  const storedValue = await AsyncStorage.getItem(
    STORAGE_KEYS.SELECTED_MOVIE_CATEGORY,
  );

  if (!storedValue) {
    return null;
  }

  if (!isMovieCategory(storedValue)) {
    return null;
  }

  return storedValue;
}

export async function saveSelectedCategory(
  category: MovieCategory,
): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEYS.SELECTED_MOVIE_CATEGORY, category);
}
