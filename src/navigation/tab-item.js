import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, icons} from '../constants';
import Svg, {
  Circle,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
} from 'react-native-svg';
const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;
  if (isSelected) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

export default TabBarCustomButton;
