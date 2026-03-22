import { Image, Pressable, Text, View } from 'react-native';
import type { WatchlistMovie } from '../../types/movie';
import styles from './WatchlistMovieCard.styles';

type WatchlistMovieCardProps = {
  movie: WatchlistMovie;
  onPress: () => void;
  onRemove: () => void;
};

export default function WatchlistMovieCard({
  movie,
  onPress,
  onRemove,
}: WatchlistMovieCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {movie.posterUrl ? (
        <Image source={{ uri: movie.posterUrl }} style={styles.poster} />
      ) : (
        <View style={styles.posterPlaceholder} />
      )}

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={2}>
            {movie.title}
          </Text>

          <Pressable
            style={styles.removeButton}
            onPress={event => {
              event.stopPropagation();
              onRemove();
            }}
          >
            <Text style={styles.removeButtonText}>✕</Text>
          </Pressable>
        </View>

        <Text style={styles.releaseDate}>{movie.releaseDate}</Text>

        <Text style={styles.overview} numberOfLines={3}>
          {movie.overview}
        </Text>
      </View>
    </Pressable>
  );
}
