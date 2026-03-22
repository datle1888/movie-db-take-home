import { useMemo, useState } from 'react';
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
import { categorizedHomeMovies } from '../../mocks/homeMovies';
import { ROUTE_NAMES } from '../../navigation/routeNames';
import type { RootStackParamList } from '../../types/navigation';
import styles from './HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MovieCategory>(
    MOVIE_CATEGORIES.NOW_PLAYING,
  );
  const [selectedSortOption, setSelectedSortOption] = useState<MovieSortOption>(
    MOVIE_SORT_OPTIONS.ALPHABETICAL,
  );
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

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
    const movies = [...categorizedHomeMovies[selectedCategory]];

    switch (selectedSortOption) {
      case MOVIE_SORT_OPTIONS.RATING:
        return movies.sort((leftMovie, rightMovie) => {
          return rightMovie.rating - leftMovie.rating;
        });

      case MOVIE_SORT_OPTIONS.RELEASE_DATE:
        return movies.sort((leftMovie, rightMovie) => {
          return (
            new Date(rightMovie.releaseDateValue).getTime() -
            new Date(leftMovie.releaseDateValue).getTime()
          );
        });

      case MOVIE_SORT_OPTIONS.ALPHABETICAL:
      default:
        return movies.sort((leftMovie, rightMovie) =>
          leftMovie.title.localeCompare(rightMovie.title),
        );
    }
  }, [selectedCategory, selectedSortOption]);

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

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
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
      />

      <Pressable style={styles.searchButton} onPress={() => {}}>
        <Text style={styles.searchButtonText}>Search</Text>
      </Pressable>

      <View style={styles.listWrapper}>
        {displayedMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onPress={() =>
              navigation.navigate(ROUTE_NAMES.MOVIE_DETAILS, {
                movieId: movie.id,
              })
            }
          />
        ))}
      </View>

      <Pressable style={styles.loadMoreButton} onPress={() => {}}>
        <Text style={styles.loadMoreButtonText}>Load More</Text>
      </Pressable>
    </ScrollView>
  );
}
