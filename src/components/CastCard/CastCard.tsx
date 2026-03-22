import { Image, Text, View } from 'react-native';
import type { MovieCastMember } from '../../types/movie';
import styles from './CastCard.styles';

type CastCardProps = {
  member: MovieCastMember;
};

export default function CastCard({ member }: CastCardProps) {
  return (
    <View style={styles.card}>
      {member.imageUrl ? (
        <Image source={{ uri: member.imageUrl }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {member.name}
        </Text>
        <Text style={styles.role} numberOfLines={2}>
          {member.character}
        </Text>
      </View>
    </View>
  );
}
