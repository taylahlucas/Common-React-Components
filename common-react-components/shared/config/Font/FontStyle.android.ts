import { StyleSheet } from 'react-native';
import { FontType } from './FontType';

const ROBOTO = 'Roboto';
const BOLD = 'bold';

export default StyleSheet.create({
  Heading: {
    fontFamily: ROBOTO,
    fontSize: 34,
    letterSpacing: 0,
    lineHeight: 36,
    fontWeight: BOLD
  }
});