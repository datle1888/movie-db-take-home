import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import WatchlistMovieCard from '../../components/WatchlistMovieCard/WatchlistMovieCard';
import {
  WATCHLIST_SORT_DROPDOWN_OPTIONS,
  WATCHLIST_SORT_OPTIONS,
  type WatchlistSortOption,
} from '../../constants/watchListSortOptions';
import { ROUTE_NAMES } from '../../navigation/routeNames';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeMovieFromWatchlist } from '../../store/slices/watchlistSlice';
import type { RootStackParamList } from '../../types/navigation';
import styles from './WatchlistScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Watchlist'>;

export default function WatchlistScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const watchlistMovies = useAppSelector(state => state.watchlist.movies);

  const [selectedSortOption, setSelectedSortOption] =
    useState<WatchlistSortOption>(WATCHLIST_SORT_OPTIONS.RATING);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const selectedSortLabel = useMemo(() => {
    const matchedOption = WATCHLIST_SORT_DROPDOWN_OPTIONS.find(
      option => option.value === selectedSortOption,
    );

    return matchedOption?.label ?? 'Rating';
  }, [selectedSortOption]);

  const displayedMovies = useMemo(() => {
    const movies = [...watchlistMovies];

    switch (selectedSortOption) {
      case WATCHLIST_SORT_OPTIONS.RELEASE_DATE:
        movies.sort((leftMovie, rightMovie) => {
          const leftValue = new Date(leftMovie.releaseDateValue).getTime() || 0;
          const rightValue =
            new Date(rightMovie.releaseDateValue).getTime() || 0;

          return leftValue - rightValue;
        });
        break;

      case WATCHLIST_SORT_OPTIONS.ALPHABETICAL:
        movies.sort((leftMovie, rightMovie) =>
          leftMovie.title.localeCompare(rightMovie.title),
        );
        break;

      case WATCHLIST_SORT_OPTIONS.RATING:
      default:
        movies.sort(
          (leftMovie, rightMovie) => leftMovie.rating - rightMovie.rating,
        );
        break;
    }

    if (!isAscendingOrder) {
      movies.reverse();
    }

    return movies;
  }, [watchlistMovies, selectedSortOption, isAscendingOrder]);

  function handleRemoveMovie(movieId: number) {
    dispatch(removeMovieFromWatchlist(movieId));
  }

  function handleSortToggle() {
    setIsSortMenuOpen(previousValue => !previousValue);
  }

  function handleSortSelect(value: WatchlistSortOption) {
    setSelectedSortOption(value);
    setIsSortMenuOpen(false);
  }

  function handleOrderToggle() {
    setIsAscendingOrder(previousValue => !previousValue);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top + 12 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>{'THE'}</Text>
        <Text style={styles.logoText}>{'MOVIE'}</Text>
        <Text style={styles.logoText}>{'DB'}</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>J</Text>
        </View>

        <View style={styles.profileTextBlock}>
          <Text style={styles.profileName}>Danny Le</Text>
          <Text style={styles.profileMeta}>Member since April 2026</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>My Watchlist</Text>

      <View style={styles.filterRow}>
        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Filter by:</Text>

          <Pressable style={styles.filterButton} onPress={handleSortToggle}>
            <Text style={styles.filterButtonText}>{selectedSortLabel}</Text>
            <Text style={styles.filterChevron}>
              {isSortMenuOpen ? '⌃' : '⌄'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.orderGroup}>
          <Text style={styles.orderLabel}>Order:</Text>

          <Pressable style={styles.orderButton} onPress={handleOrderToggle}>
            <Text style={styles.orderButtonText}>
              {isAscendingOrder ? '↑' : '↓'}
            </Text>
          </Pressable>
        </View>
      </View>

      {isSortMenuOpen ? (
        <View style={styles.sortMenu}>
          {WATCHLIST_SORT_DROPDOWN_OPTIONS.map((option, index) => {
            const isSelected = option.value === selectedSortOption;
            const isLastItem =
              index === WATCHLIST_SORT_DROPDOWN_OPTIONS.length - 1;

            return (
              <Pressable
                key={option.value}
                style={[
                  styles.sortOption,
                  isSelected ? styles.sortOptionSelected : null,
                  isLastItem ? styles.sortOptionLast : null,
                ]}
                onPress={() => handleSortSelect(option.value)}
              >
                <Text
                  style={[
                    styles.sortOptionText,
                    isSelected ? styles.sortOptionTextSelected : null,
                  ]}
                >
                  {option.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}

      {displayedMovies.length > 0 ? (
        displayedMovies.map(movie => (
          <WatchlistMovieCard
            key={movie.id}
            movie={movie}
            onPress={() =>
              navigation.navigate(ROUTE_NAMES.MOVIE_DETAILS, {
                movieId: movie.id,
              })
            }
            onRemove={() => handleRemoveMovie(movie.id)}
          />
        ))
      ) : (
        <View style={styles.emptyStateCard}>
          <Text style={styles.emptyStateTitle}>Your watchlist is empty</Text>
          <Text style={styles.emptyStateDescription}>
            Save a movie from the details screen and it will appear here.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
