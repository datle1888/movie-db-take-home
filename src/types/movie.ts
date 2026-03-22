export type HomeMovie = {
  id: number;
  title: string;
  releaseDate: string;
  releaseDateValue: string;
  rating: number;
  overview: string;
  posterUrl: string | null;
};

export type MovieDetailsData = {
  id: number;
  title: string;
  year: string;
  posterUrl: string | null;
  releaseDate: string;
  runtime: string;
  genres: string;
  status: string;
  originalLanguage: string;
  userScore: string;
  tagline: string;
  overview: string;
};
