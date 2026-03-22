export type TmdbMovieListItem = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
};

export type TmdbMovieListResponse = {
  page: number;
  results: TmdbMovieListItem[];
  total_pages: number;
  total_results: number;
};

export type TmdbMovieGenre = {
  id: number;
  name: string;
};

export type TmdbMovieDetailsResponse = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  runtime: number | null;
  genres: TmdbMovieGenre[];
  status: string;
  original_language: string;
  vote_average: number;
  tagline: string;
  overview: string;
};

export type TmdbMovieCastItem = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export type TmdbMovieCrewItem = {
  id: number;
  name: string;
  job: string;
  department: string;
};

export type TmdbMovieCreditsResponse = {
  id: number;
  cast: TmdbMovieCastItem[];
  crew: TmdbMovieCrewItem[];
};

export type TmdbMovieRecommendationsResponse = {
  page: number;
  results: TmdbMovieListItem[];
  total_pages: number;
  total_results: number;
};
