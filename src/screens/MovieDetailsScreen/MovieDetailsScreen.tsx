import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CastCard from '../../components/CastCard/CastCard';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import {
  mapTmdbCastToMovieCastMembers,
  mapTmdbCrewToMovieCredits,
  mapTmdbMovieDetailsToMovieDetailsData,
  mapTmdbRecommendationsToMovieRecommendations,
} from '../../mappers/movieMappers';
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieRecommendations,
} from '../../services/movies.service';
import type { RootStackParamList } from '../../types/navigation';
import type { MovieDetailsData } from '../../types/movie';
import styles from './MovieDetailsScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

export default function MovieDetailsScreen({ navigation, route }: Props) {
  const { movieId } = route.params;
  const insets = useSafeAreaInsets();

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
        const detailsResponse = await fetchMovieDetails(movieId);

        const [creditsResult, recommendationsResult] = await Promise.allSettled(
          [fetchMovieCredits(movieId), fetchMovieRecommendations(movieId)],
        );

        const mappedCredits =
          creditsResult.status === 'fulfilled'
            ? mapTmdbCrewToMovieCredits(creditsResult.value.crew)
            : [];

        const mappedTopCast =
          creditsResult.status === 'fulfilled'
            ? mapTmdbCastToMovieCastMembers(creditsResult.value.cast)
            : [];

        const mappedRecommendations =
          recommendationsResult.status === 'fulfilled'
            ? mapTmdbRecommendationsToMovieRecommendations(
                recommendationsResult.value.results,
              )
            : [];

        const mappedMovieDetails = mapTmdbMovieDetailsToMovieDetailsData(
          detailsResponse,
          mappedCredits,
          mappedTopCast,
          mappedRecommendations,
        );

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
      <View style={styles.statusWrapper}>
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
      <View style={styles.statusWrapper}>
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
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>{'THE'}</Text>
        <Text style={styles.logoText}>{'MOVIE'}</Text>
        <Text style={styles.logoText}>{'DB'}</Text>
      </View>

      <View style={styles.heroSection}>
        <View style={styles.heroHeaderRow}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonLabel}>‹</Text>
          </Pressable>

          <View style={styles.heroTitleWrapper}>
            <View style={styles.heroTitleRow}>
              <Text style={styles.heroTitle}>{movieDetails.title}</Text>
              <Text style={styles.heroYear}>({movieDetails.year})</Text>
            </View>
          </View>
        </View>

        <View style={styles.introRow}>
          {movieDetails.posterUrl ? (
            <Image
              source={{ uri: movieDetails.posterUrl }}
              style={styles.posterThumb}
            />
          ) : (
            <View style={styles.posterThumbPlaceholder} />
          )}

          <View style={styles.introContent}>
            <Text style={styles.releaseLine}>
              {movieDetails.releaseDateShort} • {movieDetails.runtime}
            </Text>

            <Text style={styles.genresLine}>{movieDetails.genresText}</Text>

            <Text style={styles.metaInfoLine}>
              <Text style={styles.metaInfoLabel}>Status:</Text>{' '}
              {movieDetails.status}
            </Text>

            <Text style={styles.metaInfoLine}>
              <Text style={styles.metaInfoLabel}>Original Language:</Text>{' '}
              {movieDetails.originalLanguage}
            </Text>
          </View>
        </View>

        <View style={styles.scoreCreditsSection}>
          <View style={styles.scoreCreditsRow}>
            <View style={styles.scoreBlock}>
              <View style={styles.scoreCircleOuter}>
                <View style={styles.scoreCircleInner}>
                  <Text style={styles.scoreValue}>
                    {movieDetails.userScore}
                  </Text>
                </View>
              </View>
              <Text style={styles.scoreLabel}>User Score</Text>
            </View>

            <View style={styles.creditsBlock}>
              {movieDetails.credits.length > 0 ? (
                movieDetails.credits.map(credit => (
                  <View key={credit.id} style={styles.creditItem}>
                    <Text style={styles.creditName}>{credit.name}</Text>
                    <Text style={styles.creditRole}>{credit.role}</Text>
                  </View>
                ))
              ) : (
                <View style={styles.creditItem}>
                  <Text style={styles.creditName}>No credit information</Text>
                  <Text style={styles.creditRole}>
                    Director / Writer unavailable
                  </Text>
                </View>
              )}
            </View>
          </View>

          <Text style={styles.tagline}>{movieDetails.tagline}</Text>

          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.overviewText}>{movieDetails.overview}</Text>

          <Pressable style={styles.watchlistButton} onPress={() => {}}>
            <Text style={styles.watchlistButtonIcon}>▮</Text>
            <Text style={styles.watchlistButtonLabel}>Add To Watchlist</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Top Billed Cast</Text>

        {movieDetails.topCast.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          >
            {movieDetails.topCast.map(member => (
              <CastCard key={member.id} member={member} />
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.emptySectionText}>
            No cast information available.
          </Text>
        )}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recommendations</Text>

        {movieDetails.recommendations.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          >
            {movieDetails.recommendations.map(movie => (
              <RecommendationCard
                key={movie.id}
                movie={movie}
                onPress={() =>
                  navigation.push('MovieDetails', {
                    movieId: movie.id,
                  })
                }
              />
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.emptySectionText}>
            No recommendations available.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
