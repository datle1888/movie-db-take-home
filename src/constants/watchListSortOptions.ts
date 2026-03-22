export const WATCHLIST_SORT_OPTIONS = {
  RATING: 'rating',
  RELEASE_DATE: 'release_date',
  ALPHABETICAL: 'alphabetical',
} as const;

export type WatchlistSortOption =
  (typeof WATCHLIST_SORT_OPTIONS)[keyof typeof WATCHLIST_SORT_OPTIONS];

export const WATCHLIST_SORT_DROPDOWN_OPTIONS: Array<{
  label: string;
  value: WatchlistSortOption;
}> = [
  {
    label: 'Rating',
    value: WATCHLIST_SORT_OPTIONS.RATING,
  },
  {
    label: 'Release date',
    value: WATCHLIST_SORT_OPTIONS.RELEASE_DATE,
  },
  {
    label: 'Alphabetical',
    value: WATCHLIST_SORT_OPTIONS.ALPHABETICAL,
  },
];
