import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  profileCard: {
    borderRadius: 12,
    backgroundColor: '#58B7E3',
    padding: 16,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  profileMeta: {
    fontSize: 14,
    color: '#EAF9FF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },
  emptyStateCard: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  emptyStateDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default styles;
