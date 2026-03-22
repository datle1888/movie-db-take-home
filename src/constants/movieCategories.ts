export const MOVIE_CATEGORIES = {
  NOW_PLAYING: 'now_playing',
  UPCOMING: 'upcoming',
  POPULAR: 'popular',
} as const;

export type MovieCategory =
  (typeof MOVIE_CATEGORIES)[keyof typeof MOVIE_CATEGORIES];

export const MOVIE_CATEGORY_OPTIONS: Array<{
  label: string;
  value: MovieCategory;
}> = [
  {
    label: 'Now Playing',
    value: MOVIE_CATEGORIES.NOW_PLAYING,
  },
  {
    label: 'Upcoming',
    value: MOVIE_CATEGORIES.UPCOMING,
  },
  {
    label: 'Popular',
    value: MOVIE_CATEGORIES.POPULAR,
  },
];

export const MOVIE_CATEGORY_VALUES: MovieCategory[] = [
  MOVIE_CATEGORIES.NOW_PLAYING,
  MOVIE_CATEGORIES.UPCOMING,
  MOVIE_CATEGORIES.POPULAR,
];

export function isMovieCategory(value: string): value is MovieCategory {
  return MOVIE_CATEGORY_VALUES.includes(value as MovieCategory);
}
