import { StyleSheet } from 'react-native';

const listItemStyles = StyleSheet.create({
  scrollableContent: {
    alignItems: 'center', 
    alignSelf: 'center'
  },
  scrollableList: {
    padding: 16
  },
  selectableButton: {
    justifyContent: 'center',
    backgroundColor: 'pink',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginBottom: 16
  }
});

export default listItemStyles;