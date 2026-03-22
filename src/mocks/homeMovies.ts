export type HomeMovie = {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
  posterUrl: string;
};

export const homeMovies: HomeMovie[] = [
  {
    id: 346698,
    title: 'Barbie',
    releaseDate: '19 July 2023',
    overview:
      'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
  },
  {
    id: 298618,
    title: 'The Flash',
    releaseDate: '13 June 2023',
    overview:
      'When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a new reality.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
  },
  {
    id: 447277,
    title: 'The Little Mermaid',
    releaseDate: '18 May 2023',
    overview:
      'The youngest of King Triton’s daughters, and the most defiant, longs to find out more about the world beyond the sea.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
  },
  {
    id: 447365,
    title: 'Guardians of the Galaxy Vol. 3',
    releaseDate: '3 May 2023',
    overview:
      'Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
  },
  {
    id: 550205,
    title: 'Ruby Gillman, Teenage Kraken',
    releaseDate: '28 June 2023',
    overview:
      'Ruby Gillman, a sweet and awkward high school student, discovers that she is descended from a legendary royal line.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',
  },
];
