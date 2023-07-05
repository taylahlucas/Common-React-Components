import { StyleSheet } from 'react-native';

const ROBOTO = 'Roboto';
const BOLD = 'bold';
const REGULAR = 'normal';

export default StyleSheet.create({
  Heading: {
    fontFamily: ROBOTO,
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 36,
    fontWeight: BOLD
  },
  ListItemTitle: {
    fontFamily: ROBOTO,
    fontSize: 17,
    letterSpacing: 0,
    lineHeight: 18,
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