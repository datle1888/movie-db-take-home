import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAMES } from './routeNames';
import WatchlistScreen from '../screens/WatchlistScreen/WatchlistScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen/MovieDetailsScreen';
import type { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function WatchlistStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_NAMES.WATCHLIST} component={WatchlistScreen} />
      <Stack.Screen
        name={ROUTE_NAMES.MOVIE_DETAILS}
        component={MovieDetailsScreen}
      />
    </Stack.Navigator>
  );
}
