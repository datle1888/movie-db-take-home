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
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const selectedCategoryLabel = useMemo(() => {
    const matchedOption = MOVIE_CATEGORY_OPTIONS.find(
      option => option.value === selectedCategory,
    );

    return matchedOption?.label ?? 'Now Playing';
  }, [selectedCategory]);

  const displayedMovies = categorizedHomeMovies[selectedCategory];

  function handleCategoryToggle() {
    setIsCategoryDropdownOpen(previousValue => !previousValue);
  }

  function handleCategorySelect(value: MovieCategory) {
    setSelectedCategory(value);
    setIsCategoryDropdownOpen(false);
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

      <Pressable style={styles.staticFieldBox}>
        <Text style={styles.staticFieldLabel}>Sort by</Text>
        <Text style={styles.staticFieldArrow}>›</Text>
      </Pressable>

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
