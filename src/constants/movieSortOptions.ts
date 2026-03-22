export const MOVIE_SORT_OPTIONS = {
  ALPHABETICAL: 'alphabetical',
  RATING: 'rating',
  RELEASE_DATE: 'release_date',
} as const;

export type MovieSortOption =
  (typeof MOVIE_SORT_OPTIONS)[keyof typeof MOVIE_SORT_OPTIONS];

export const MOVIE_SORT_DROPDOWN_OPTIONS: Array<{
  label: string;
  value: MovieSortOption;
}> = [
  {
    label: 'By alphabetical order',
    value: MOVIE_SORT_OPTIONS.ALPHABETICAL,
  },
  {
    label: 'By rating',
    value: MOVIE_SORT_OPTIONS.RATING,
  },
  {
    label: 'By release date',
    value: MOVIE_SORT_OPTIONS.RELEASE_DATE,
  },
];
