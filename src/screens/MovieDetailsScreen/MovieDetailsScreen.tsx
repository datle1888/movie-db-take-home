import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mapTmdbMovieDetailsToMovieDetailsData } from '../../mappers/movieMappers';
import { fetchMovieDetails } from '../../services/movies.service';
import type { RootStackParamList } from '../../types/navigation';
import type { MovieDetailsData } from '../../types/movie';
import styles from './MovieDetailsScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

export default function MovieDetailsScreen({ route }: Props) {
  const { movieId } = route.params;

  const [movieDetails, setMovieDetails] = useState<MovieDetailsData | null>(
    null,
  );
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);
  const [detailsErrorMessage, setDetailsErrorMessage] = useState<string | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;

    async function loadMovieDetails() {
      setIsLoadingDetails(true);
      setDetailsErrorMessage(null);

      try {
        const response = await fetchMovieDetails(movieId);
        const mappedMovieDetails =
          mapTmdbMovieDetailsToMovieDetailsData(response);

        if (isMounted) {
          setMovieDetails(mappedMovieDetails);
        }
      } catch (error) {
        if (isMounted) {
          setMovieDetails(null);
          setDetailsErrorMessage(
            'Unable to load movie details right now. Please try again later.',
          );
        }
      } finally {
        if (isMounted) {
          setIsLoadingDetails(false);
        }
      }
    }

    loadMovieDetails();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  if (isLoadingDetails) {
    return (
      <View style={styles.container}>
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Loading movie details...</Text>
          <Text style={styles.statusDescription}>
            Please wait while we fetch the selected movie information.
          </Text>
        </View>
      </View>
    );
  }

  if (detailsErrorMessage || !movieDetails) {
    return (
      <View style={styles.container}>
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Something went wrong</Text>
          <Text style={styles.statusDescription}>
            {detailsErrorMessage ||
              'Movie details could not be loaded at this time.'}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {movieDetails.posterUrl ? (
        <Image source={{ uri: movieDetails.posterUrl }} style={styles.poster} />
      ) : (
        <View style={styles.posterPlaceholder} />
      )}

      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text style={styles.year}>{movieDetails.year}</Text>

      <View style={styles.metaCard}>
        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Release date</Text>
          <Text style={styles.metaValue}>{movieDetails.releaseDate}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Runtime</Text>
          <Text style={styles.metaValue}>{movieDetails.runtime}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Genres</Text>
          <Text style={styles.metaValue}>{movieDetails.genres}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Status</Text>
          <Text style={styles.metaValue}>{movieDetails.status}</Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Original language</Text>
          <Text style={styles.metaValue}>{movieDetails.originalLanguage}</Text>
        </View>

        <View style={[styles.metaRow, styles.metaRowLast]}>
          <Text style={styles.metaLabel}>User score</Text>
          <Text style={styles.metaValue}>{movieDetails.userScore}</Text>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Tagline</Text>
        <Text style={styles.sectionText}>{movieDetails.tagline}</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.sectionText}>{movieDetails.overview}</Text>
      </View>
    </ScrollView>
  );
}
