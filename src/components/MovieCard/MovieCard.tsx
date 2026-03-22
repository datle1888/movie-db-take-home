import { Image, Pressable, Text, View } from 'react-native';
import type { HomeMovie } from '../../mocks/homeMovies';
import styles from './MovieCard.styles';

type MovieCardProps = {
  movie: HomeMovie;
  onPress: () => void;
};

export default function MovieCard({ movie, onPress }: MovieCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.posterUrl }} style={styles.poster} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {movie.title}
        </Text>
        <Text style={styles.releaseDate}>{movie.releaseDate}</Text>
        <Text style={styles.overview} numberOfLines={3}>
          {movie.overview}
        </Text>
      </View>
    </Pressable>
  );
}
