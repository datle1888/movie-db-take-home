import { ScrollView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WatchlistMovieCard from '../../components/WatchlistMovieCard/WatchlistMovieCard';
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

  function handleRemoveMovie(movieId: number) {
    dispatch(removeMovieFromWatchlist(movieId));
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>Movie Watchlist</Text>
        <Text style={styles.profileMeta}>Member since 2026</Text>
      </View>

      <Text style={styles.sectionTitle}>Saved Movies</Text>

      {watchlistMovies.length > 0 ? (
        watchlistMovies.map(movie => (
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
