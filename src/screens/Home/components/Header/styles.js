import {StyleSheet} from 'react-native';
import {SIZES} from '../../../../constants';

export default StyleSheet.create({
  mainNav: {
    flexDirection: 'row',
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconNearby: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  headerText: {
    marginLeft: 30,
    marginRight: 30,
    height: '100%',
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  iconShop: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
});
