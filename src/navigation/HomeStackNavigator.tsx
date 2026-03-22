import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAMES } from './routeNames';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen/MovieDetailsScreen';
import type { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_NAMES.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ROUTE_NAMES.MOVIE_DETAILS}
        component={MovieDetailsScreen}
      />
    </Stack.Navigator>
  );
}
