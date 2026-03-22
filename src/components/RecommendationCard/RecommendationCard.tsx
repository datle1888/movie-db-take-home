import { Image, Pressable, Text, View } from 'react-native';
import type { MovieRecommendation } from '../../types/movie';
import styles from './RecommendationCard.styles';

type RecommendationCardProps = {
  movie: MovieRecommendation;
  onPress: () => void;
};

export default function RecommendationCard({
  movie,
  onPress,
}: RecommendationCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {movie.posterUrl ? (
        <Image source={{ uri: movie.posterUrl }} style={styles.poster} />
      ) : (
        <View style={styles.placeholder} />
      )}

      <View style={styles.footerRow}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>
        <Text style={styles.score}>{movie.userScore}</Text>
      </View>
    </Pressable>
  );
}
