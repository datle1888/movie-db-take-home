import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  trigger: {
    minHeight: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  triggerLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  triggerArrow: {
    fontSize: 18,
    color: '#111827',
    fontWeight: '600',
  },
  menu: {
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    padding: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  optionButton: {
    minHeight: 40,
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: '#F3F4F6',
  },
  lastOptionButton: {
    marginBottom: 0,
  },
  selectedOptionButton: {
    backgroundColor: '#58B7E3',
  },
  optionLabel: {
    fontSize: 14,
    color: '#111827',
  },
  selectedOptionLabel: {
    color: '#FFFFFF',
  },
});

export default styles;
