import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import HomeStackNavigator from './HomeStackNavigator';
import WatchlistStackNavigator from './WatchlistStackNavigator';
import { ROUTE_NAMES } from './routeNames';
import type { RootTabParamList } from '../types/navigation';
import styles, { TAB_BAR_BACKGROUND } from './MainTabNavigator.styles';

const Tab = createBottomTabNavigator<RootTabParamList>();

type IconProps = {
  color: string;
};

function HomeTabIcon({ color }: IconProps) {
  return (
    <View style={styles.homeIconWrapper}>
      <View style={[styles.homeRoof, { borderBottomColor: color }]} />
      <View style={[styles.homeBody, { borderColor: color }]}>
        <View style={[styles.homeDoor, { backgroundColor: color }]} />
      </View>
    </View>
  );
}

function BookmarkTabIcon({ color }: IconProps) {
  return (
    <View style={styles.bookmarkWrapper}>
      <View style={[styles.bookmarkBody, { backgroundColor: color }]} />
      <View
        style={[
          styles.bookmarkNotch,
          {
            borderTopColor: TAB_BAR_BACKGROUND,
          },
        ]}
      />
    </View>
  );
}

export default function MainTabNavigator() {
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#D8E3F0',
          tabBarStyle: [
            styles.tabBar,
            {
              height: 58 + insets.bottom,
              paddingBottom: insets.bottom,
            },
          ],
          tabBarItemStyle: styles.tabBarItem,
          tabBarIcon: ({ color }) => {
            if (route.name === ROUTE_NAMES.HOME_TAB) {
              return <HomeTabIcon color={color} />;
            }

            return <BookmarkTabIcon color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={ROUTE_NAMES.HOME_TAB}
          component={HomeStackNavigator}
        />
        <Tab.Screen
          name={ROUTE_NAMES.WATCHLIST_TAB}
          component={WatchlistStackNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
