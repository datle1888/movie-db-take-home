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
  posterPlaceholder: {
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
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginRight: 8,
  },
  removeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B7280',
    lineHeight: 16,
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
