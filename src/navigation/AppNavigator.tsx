import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen/MovieDetailsScreen';
import WatchlistScreen from '../screens/WatchlistScreen/WatchlistScreen';
import type { RootStackParamList } from '../types/navigation';
import { ROUTE_NAMES } from './routeNames';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTE_NAMES.HOME}
        screenOptions={{
          headerTitleAlign: 'center',
          contentStyle: { backgroundColor: '#FFFFFF' },
        }}
      >
        <Stack.Screen
          name={ROUTE_NAMES.HOME}
          component={HomeScreen}
          options={{ title: 'Movies' }}
        />
        <Stack.Screen
          name={ROUTE_NAMES.MOVIE_DETAILS}
          component={MovieDetailsScreen}
          options={{ title: 'Movie Details' }}
        />
        <Stack.Screen
          name={ROUTE_NAMES.WATCHLIST}
          component={WatchlistScreen}
          options={{ title: 'Watchlist' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
