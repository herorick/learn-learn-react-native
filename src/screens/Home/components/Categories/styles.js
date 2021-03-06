import {StyleSheet} from 'react-native';
import {COLORS, SIZES, SHADOW, FONTS} from '../../../../constants';

export default StyleSheet.create({
  listWrapper: {
    marginBottom: 10,
    height: 80,
    width: 80,
    backgroundColor: 'blue',
  },
  categoryItem: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: SIZES.padding,
    // ...SHADOW.cart,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  categoryTitle: {
    ...FONTS.body5,
  },
  categoryTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 5,
  },
  active: {
    backgroundColor: COLORS.primary,
  },
  deActive: {
    backgroundColor: COLORS.lightGray2,
  },
});
