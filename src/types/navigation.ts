import { ROUTE_NAMES } from '../navigation/routeNames';

export type RootTabParamList = {
  [ROUTE_NAMES.HOME_TAB]: undefined;
  [ROUTE_NAMES.WATCHLIST_TAB]: undefined;
};

export type RootStackParamList = {
  [ROUTE_NAMES.HOME]: undefined;
  [ROUTE_NAMES.WATCHLIST]: undefined;
  [ROUTE_NAMES.MOVIE_DETAILS]: {
    movieId: number;
  };
};
