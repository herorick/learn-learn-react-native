import React from 'react';
import {COLORS} from '../constants';
import {View} from 'react-native';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
const CustomTabBar = props => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: COLORS.white,
        }}></View>
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;
