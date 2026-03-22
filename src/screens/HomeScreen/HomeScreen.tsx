import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import MovieCard from '../../components/MovieCard/MovieCard';
import { homeMovies } from '../../mocks/homeMovies';
import { ROUTE_NAMES } from '../../navigation/routeNames';
import type { RootStackParamList } from '../../types/navigation';
import styles from './HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>{'THE'}</Text>
        <Text style={styles.logoText}>{'MOVIE'}</Text>
        <Text style={styles.logoText}>{'DB'}</Text>
      </View>

      <Pressable style={styles.fieldBox}>
        <Text style={styles.fieldLabel}>Now Playing</Text>
        <Text style={styles.fieldArrow}>›</Text>
      </Pressable>

      <Pressable style={styles.fieldBox}>
        <Text style={styles.fieldLabel}>Sort by</Text>
        <Text style={styles.fieldArrow}>›</Text>
      </Pressable>

      <TextInput
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        placeholder="Search..."
        placeholderTextColor="#9CA3AF"
        style={styles.searchInput}
      />

      <Pressable style={styles.searchButton} onPress={() => {}}>
        <Text style={styles.searchButtonText}>Search</Text>
      </Pressable>

      <View style={styles.listWrapper}>
        {homeMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onPress={() =>
              navigation.navigate(ROUTE_NAMES.MOVIE_DETAILS, {
                movieId: movie.id,
              })
            }
          />
        ))}
      </View>

      <Pressable style={styles.loadMoreButton} onPress={() => {}}>
        <Text style={styles.loadMoreButtonText}>Load More</Text>
      </Pressable>
    </ScrollView>
  );
}
