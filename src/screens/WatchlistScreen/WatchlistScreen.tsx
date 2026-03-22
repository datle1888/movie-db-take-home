import { Text, View } from 'react-native';
import styles from './WatchlistScreen.styles';

export default function WatchlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watchlist Screen</Text>
      <Text style={styles.subtitle}>
        This screen is optional in the assignment and will be implemented later
        if time allows.
      </Text>
    </View>
  );
}
