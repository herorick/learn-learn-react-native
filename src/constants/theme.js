import {Dimensions} from 'react-native';
import {shadow} from 'react-native-paper';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FC6D3F',
  secondary: '#CDCDD2',

  black: '#1E1F20',
  white: '#FFF',

  lightGray: '#f2f2f2',
  lightGray2: '#e8e8e8',
  lightGray3: '#e6e6e6',
  lightGray4: '#d9d9d9',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  largeTilte: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 12,
  width,
  height,
  borderRadius: 40,
};

export const FONTS = {
  largeTilte: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.largeTilte,
    lineHeight: 38,
  },
  h1: {
    // fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  h2: {
    // fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  h3: {
    // fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  h4: {
    // fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  h5: {
    // fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h1,
    lineHeight: 22,
  },
  body1: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    // fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const SHADOW = {
  item: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
};

export default {COLORS, SIZES, FONTS, SHADOW};
