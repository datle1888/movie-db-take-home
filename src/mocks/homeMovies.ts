import {
  MOVIE_CATEGORIES,
  type MovieCategory,
} from '../constants/movieCategories';

export type HomeMovie = {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
  posterUrl: string;
};

const nowPlayingMovies: HomeMovie[] = [
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

const upcomingMovies: HomeMovie[] = [
  {
    id: 940551,
    title: 'Migration',
    releaseDate: '6 December 2023',
    overview:
      'A family of ducks tries to convince their overprotective father to go on the vacation of a lifetime.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/ldfCF9RhR40mppkzmftxapaHeTo.jpg',
  },
  {
    id: 1022796,
    title: 'Wish',
    releaseDate: '13 November 2023',
    overview:
      'A sharp-witted idealist makes a wish so powerful that it is answered by a cosmic force called Star.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg',
  },
  {
    id: 572802,
    title: 'Aquaman and the Lost Kingdom',
    releaseDate: '20 December 2023',
    overview:
      'Black Manta seeks revenge on Aquaman and will stop at nothing to take him down once and for all.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg',
  },
  {
    id: 466420,
    title: 'Killers of the Flower Moon',
    releaseDate: '18 October 2023',
    overview:
      'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
  },
];

const popularMovies: HomeMovie[] = [
  {
    id: 569094,
    title: 'Spider-Man: Across the Spider-Verse',
    releaseDate: '31 May 2023',
    overview:
      'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its existence.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
  },
  {
    id: 667538,
    title: 'Transformers: Rise of the Beasts',
    releaseDate: '6 June 2023',
    overview:
      'During the 1990s, a new faction of Transformers rise up in the battle on Earth.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
  },
  {
    id: 614479,
    title: 'Insidious: The Red Door',
    releaseDate: '5 July 2023',
    overview:
      'To put their demons to rest once and for all, Josh Lambert and Dalton Lambert must go deeper into The Further.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/d07phJqCx6z5wILDYqkyraorDPi.jpg',
  },
  {
    id: 385687,
    title: 'Fast X',
    releaseDate: '17 May 2023',
    overview:
      'Over many missions and against impossible odds, Dom Toretto and his family have outsmarted every foe in their path.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
  },
];

export const categorizedHomeMovies: Record<MovieCategory, HomeMovie[]> = {
  [MOVIE_CATEGORIES.NOW_PLAYING]: nowPlayingMovies,
  [MOVIE_CATEGORIES.UPCOMING]: upcomingMovies,
  [MOVIE_CATEGORIES.POPULAR]: popularMovies,
};
