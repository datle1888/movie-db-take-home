export type HomeMovie = {
  id: number;
  title: string;
  releaseDate: string;
  releaseDateValue: string;
  rating: number;
  overview: string;
  posterUrl: string | null;
};

export type WatchlistMovie = {
  id: number;
  title: string;
  releaseDate: string;
  releaseDateValue: string;
  rating: number;
  overview: string;
  posterUrl: string | null;
};

export type MovieCrewCredit = {
  id: number;
  name: string;
  role: string;
};

export type MovieCastMember = {
  id: number;
  name: string;
  character: string;
  imageUrl: string | null;
};

export type MovieRecommendation = {
  id: number;
  title: string;
  userScore: string;
  posterUrl: string | null;
};

export type MovieDetailsData = {
  id: number;
  title: string;
  year: string;
  posterUrl: string | null;
  releaseDateShort: string;
  releaseDateValue: string;
  runtime: string;
  genresText: string;
  status: string;
  originalLanguage: string;
  userScore: string;
  ratingValue: number;
  tagline: string;
  overview: string;
  credits: MovieCrewCredit[];
  topCast: MovieCastMember[];
  recommendations: MovieRecommendation[];
};
