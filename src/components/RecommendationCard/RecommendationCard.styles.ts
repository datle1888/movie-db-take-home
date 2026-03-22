import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 150,
    marginRight: 12,
  },
  poster: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    marginBottom: 8,
  },
  placeholder: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    marginBottom: 8,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
    marginRight: 8,
  },
  score: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4B5563',
  },
});

export default styles;
