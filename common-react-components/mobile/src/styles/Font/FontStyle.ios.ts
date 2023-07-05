import { StyleSheet } from 'react-native';

const AVENIR_LIGHT = 'Avenir-Light';
const BOLD = '700';
const REGULAR = '400';

export default StyleSheet.create({
  Heading: {
    fontFamily: AVENIR_LIGHT,
    fontSize: 28,
    letterSpacing: 0.37,
    lineHeight: 41,
    fontWeight: BOLD
  },
  ListItemTitle: {
    fontFamily: AVENIR_LIGHT,
    fontSize: 17,
    letterSpacing: 0.37,
    lineHeight: 22,
    fontWeight: REGULAR
  },
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  }
});