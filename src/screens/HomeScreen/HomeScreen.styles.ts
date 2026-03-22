import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
    color: '#7CCCB8',
    letterSpacing: 1,
  },
  searchInput: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#111827',
    marginBottom: 12,
  },
  searchButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchButtonActive: {
    backgroundColor: '#58B7E3',
  },
  searchButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  searchButtonTextActive: {
    color: '#FFFFFF',
  },
  statusCard: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  statusDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#6B7280',
    textAlign: 'center',
  },
  listWrapper: {
    marginBottom: 12,
  },
  loadMoreButton: {
    height: 48,
    borderRadius: 4,
    backgroundColor: '#58B7E3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  loadMoreButtonDisabled: {
    opacity: 0.7,
  },
  loadMoreButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  loadMoreErrorText: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 20,
    color: '#B91C1C',
    textAlign: 'center',
  },
});

export default styles;
