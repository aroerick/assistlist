import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  notificationText: {
    fontFamily: fonts.main,
    color: colors.darkBlue,
    fontSize: 24,
    alignSelf: 'center',
  }
});

export default styles;
