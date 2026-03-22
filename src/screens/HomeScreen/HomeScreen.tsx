import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import DropdownSelector from '../../components/DropdownSelector/DropdownSelector';
import MovieCard from '../../components/MovieCard/MovieCard';
import {
  MOVIE_CATEGORY_OPTIONS,
  MOVIE_CATEGORIES,
  type MovieCategory,
} from '../../constants/movieCategories';
import {
  MOVIE_SORT_DROPDOWN_OPTIONS,
  MOVIE_SORT_OPTIONS,
  type MovieSortOption,
} from '../../constants/movieSortOptions';
import { mapTmdbMovieListItemToHomeMovie } from '../../mappers/movieMappers';
import { ROUTE_NAMES } from '../../navigation/routeNames';
import { fetchMoviesByCategory } from '../../services/movies.service';
import {
  getStoredSelectedCategory,
  saveSelectedCategory,
} from '../../storage/preferencesStorage';
import type { RootStackParamList } from '../../types/navigation';
import type { HomeMovie } from '../../types/movie';
import styles from './HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [submittedKeyword, setSubmittedKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MovieCategory>(
    MOVIE_CATEGORIES.NOW_PLAYING,
  );
  const [selectedSortOption, setSelectedSortOption] = useState<MovieSortOption>(
    MOVIE_SORT_OPTIONS.ALPHABETICAL,
  );
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [movies, setMovies] = useState<HomeMovie[]>([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [moviesErrorMessage, setMoviesErrorMessage] = useState<string | null>(
    null,
  );
  const [isCategoryHydrated, setIsCategoryHydrated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function hydrateStoredCategory() {
      try {
        const storedCategory = await getStoredSelectedCategory();

        if (isMounted && storedCategory) {
          setSelectedCategory(storedCategory);
        }
      } finally {
        if (isMounted) {
          setIsCategoryHydrated(true);
        }
      }
    }

    hydrateStoredCategory();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isCategoryHydrated) {
      return;
    }

    saveSelectedCategory(selectedCategory).catch(() => {});
  }, [isCategoryHydrated, selectedCategory]);

  useEffect(() => {
    if (!isCategoryHydrated) {
      return;
    }

    let isMounted = true;

    async function loadMovies() {
      setIsLoadingMovies(true);
      setMoviesErrorMessage(null);

      try {
        const response = await fetchMoviesByCategory(selectedCategory);
        const mappedMovies = response.results.map(
          mapTmdbMovieListItemToHomeMovie,
        );

        if (isMounted) {
          setMovies(mappedMovies);
        }
      } catch (error) {
        if (isMounted) {
          setMovies([]);
          setMoviesErrorMessage(
            'Unable to load movies right now. Please check your token and network connection.',
          );
        }
      } finally {
        if (isMounted) {
          setIsLoadingMovies(false);
        }
      }
    }

    loadMovies();

    return () => {
      isMounted = false;
    };
  }, [isCategoryHydrated, selectedCategory]);

  const selectedCategoryLabel = useMemo(() => {
    const matchedOption = MOVIE_CATEGORY_OPTIONS.find(
      option => option.value === selectedCategory,
    );

    return matchedOption?.label ?? 'Now Playing';
  }, [selectedCategory]);

  const selectedSortLabel = useMemo(() => {
    const matchedOption = MOVIE_SORT_DROPDOWN_OPTIONS.find(
      option => option.value === selectedSortOption,
    );

    return matchedOption?.label ?? 'By alphabetical order';
  }, [selectedSortOption]);

  const displayedMovies = useMemo(() => {
    const normalizedKeyword = submittedKeyword.trim().toLowerCase();

    let filteredMovies = [...movies];

    if (normalizedKeyword) {
      filteredMovies = filteredMovies.filter(movie => {
        const normalizedTitle = movie.title.toLowerCase();
        const normalizedOverview = movie.overview.toLowerCase();

        return (
          normalizedTitle.includes(normalizedKeyword) ||
          normalizedOverview.includes(normalizedKeyword)
        );
      });
    }

    switch (selectedSortOption) {
      case MOVIE_SORT_OPTIONS.RATING:
        filteredMovies.sort(
          (leftMovie, rightMovie) => rightMovie.rating - leftMovie.rating,
        );
        break;

      case MOVIE_SORT_OPTIONS.RELEASE_DATE:
        filteredMovies.sort(
          (leftMovie, rightMovie) =>
            new Date(rightMovie.releaseDateValue).getTime() -
            new Date(leftMovie.releaseDateValue).getTime(),
        );
        break;

      case MOVIE_SORT_OPTIONS.ALPHABETICAL:
      default:
        filteredMovies.sort((leftMovie, rightMovie) =>
          leftMovie.title.localeCompare(rightMovie.title),
        );
        break;
    }

    return filteredMovies;
  }, [movies, selectedSortOption, submittedKeyword]);

  const hasSearchKeyword = searchKeyword.trim().length > 0;

  function handleCategoryToggle() {
    setIsSortDropdownOpen(false);
    setIsCategoryDropdownOpen(previousValue => !previousValue);
  }

  function handleSortToggle() {
    setIsCategoryDropdownOpen(false);
    setIsSortDropdownOpen(previousValue => !previousValue);
  }

  function handleCategorySelect(value: MovieCategory) {
    setSelectedCategory(value);
    setIsCategoryDropdownOpen(false);
  }

  function handleSortSelect(value: MovieSortOption) {
    setSelectedSortOption(value);
    setIsSortDropdownOpen(false);
  }

  function handleSearchPress() {
    setSubmittedKeyword(searchKeyword.trim());
    setIsCategoryDropdownOpen(false);
    setIsSortDropdownOpen(false);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>{'THE'}</Text>
        <Text style={styles.logoText}>{'MOVIE'}</Text>
        <Text style={styles.logoText}>{'DB'}</Text>
      </View>

      <DropdownSelector
        label={selectedCategoryLabel}
        isOpen={isCategoryDropdownOpen}
        options={MOVIE_CATEGORY_OPTIONS}
        selectedValue={selectedCategory}
        onToggle={handleCategoryToggle}
        onSelect={handleCategorySelect}
      />

      <DropdownSelector
        label={selectedSortLabel}
        isOpen={isSortDropdownOpen}
        options={MOVIE_SORT_DROPDOWN_OPTIONS}
        selectedValue={selectedSortOption}
        onToggle={handleSortToggle}
        onSelect={handleSortSelect}
      />

      <TextInput
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        placeholder="Search..."
        placeholderTextColor="#9CA3AF"
        style={styles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        onSubmitEditing={handleSearchPress}
      />

      <Pressable
        style={[
          styles.searchButton,
          hasSearchKeyword ? styles.searchButtonActive : null,
        ]}
        onPress={handleSearchPress}
      >
        <Text
          style={[
            styles.searchButtonText,
            hasSearchKeyword ? styles.searchButtonTextActive : null,
          ]}
        >
          Search
        </Text>
      </Pressable>

      <View style={styles.listWrapper}>
        {!isCategoryHydrated ? (
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>
              Preparing your preferences...
            </Text>
            <Text style={styles.statusDescription}>
              Restoring your last selected category.
            </Text>
          </View>
        ) : isLoadingMovies ? (
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Loading movies...</Text>
            <Text style={styles.statusDescription}>
              Please wait while we fetch the latest data from TMDB.
            </Text>
          </View>
        ) : moviesErrorMessage ? (
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Something went wrong</Text>
            <Text style={styles.statusDescription}>{moviesErrorMessage}</Text>
          </View>
        ) : displayedMovies.length > 0 ? (
          displayedMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() =>
                navigation.navigate(ROUTE_NAMES.MOVIE_DETAILS, {
                  movieId: movie.id,
                })
              }
            />
          ))
        ) : (
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>No movies found</Text>
            <Text style={styles.statusDescription}>
              Try another keyword or switch to a different category.
            </Text>
          </View>
        )}
      </View>

      {isCategoryHydrated &&
      !isLoadingMovies &&
      !moviesErrorMessage &&
      displayedMovies.length > 0 ? (
        <Pressable style={styles.loadMoreButton} onPress={() => {}}>
          <Text style={styles.loadMoreButtonText}>Load More</Text>
        </Pressable>
      ) : null}
    </ScrollView>
  );
}
