import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  chatContainer: {
    flex: 1,
  },
  itemMeta: {
    paddingHorizontal: width / 8,
  },
  loading: {
    height: height,
    justifyContent: 'center',
  },
  message: {
    borderRadius: 5,
    maxWidth: width / 2,
    padding: 10,
    marginHorizontal: 30,
    marginVertical: 8,
  },
  messageText: {
    fontFamily: fonts.main,
    color: 'white',
    fontSize: 16,
  },
  fromMe: {
    alignSelf: 'flex-end',
    backgroundColor: colors.darkBlue,
  },
  fromMeIcon: {
    color: colors.darkBlue,
    position: 'absolute',
    right: 0,
    bottom: -20,
  },
  fromYou: {
    alignSelf: 'flex-start',
    backgroundColor: colors.lightBlue,
  },
  fromYouIcon: {
    color: colors.lightBlue,
    position: 'absolute',
    left: 0,
    bottom: -20,
  },
});

export default styles;
