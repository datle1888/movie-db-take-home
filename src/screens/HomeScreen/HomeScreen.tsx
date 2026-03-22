import { Pressable, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ROUTE_NAMES } from '../../navigation/routeNames';
import type { RootStackParamList } from '../../types/navigation';
import styles from './HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>
        Navigation and Redux store are wired successfully.
      </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() =>
          navigation.navigate(ROUTE_NAMES.MOVIE_DETAILS, { movieId: 123 })
        }
      >
        <Text style={styles.primaryButtonText}>Open Movie Details</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate(ROUTE_NAMES.WATCHLIST)}
      >
        <Text style={styles.secondaryButtonText}>Open Watchlist</Text>
      </Pressable>
    </View>
  );
}
