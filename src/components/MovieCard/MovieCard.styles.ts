import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  poster: {
    width: 64,
    height: 96,
    borderRadius: 4,
    marginRight: 12,
    backgroundColor: '#E5E7EB',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  overview: {
    fontSize: 13,
    lineHeight: 18,
    color: '#374151',
  },
});

export default styles;
