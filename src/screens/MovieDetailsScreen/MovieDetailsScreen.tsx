import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/navigation';
import styles from './MovieDetailsScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

export default function MovieDetailsScreen({ route }: Props) {
  const { movieId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Details Screen</Text>
      <Text style={styles.subtitle}>Selected movie ID: {movieId}</Text>
    </View>
  );
}
