import { StyleSheet } from 'react-native';

const TAB_BAR_BACKGROUND = '#0E2645';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: TAB_BAR_BACKGROUND,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarItem: {
    paddingTop: 8,
  },
  homeIconWrapper: {
    width: 24,
    height: 22,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  homeRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginBottom: -1,
  },
  homeBody: {
    width: 16,
    height: 11,
    borderWidth: 2,
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  homeDoor: {
    width: 4,
    height: 6,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },
  bookmarkWrapper: {
    width: 18,
    height: 22,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  bookmarkBody: {
    width: 14,
    height: 18,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  bookmarkNotch: {
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});

export { TAB_BAR_BACKGROUND };
export default styles;
