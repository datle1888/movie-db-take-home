import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 110,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: 130,
    backgroundColor: '#E5E7EB',
  },
  placeholder: {
    width: '100%',
    height: 130,
    backgroundColor: '#E5E7EB',
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  role: {
    fontSize: 13,
    color: '#6B7280',
  },
});

export default styles;
