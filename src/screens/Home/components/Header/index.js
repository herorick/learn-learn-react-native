import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {icons, FONTS} from '../../../../constants';
import styles from './styles';

const Header = ({currentLocation}) => {
  return (
    <View style={styles.mainNav}>
      <TouchableOpacity style={styles.iconNearby}>
        <Image source={icons.nearby} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.headerText}>
        <Text style={{...FONTS.h3}}> {currentLocation?.streetName}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.iconShop}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
