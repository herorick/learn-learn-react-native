import React from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {SIZES, FONTS, COLORS, icons, categoryData} from '../../../../constants';
import styles from './styles';
const Restaurant = ({restaurants, categories, navigation}) => {
  const getCategoryNameById = id => {
    let category = categories.filter(a => a.id === id);
    if (category.length > 0) {
      return category[0].name;
    }
    return '';
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.restaurantItemWrapper}
        onPress={() => navigation.navigate('Restaurant', {restaurant: item})}>
        <View>
          <Image
            source={item.photo}
            resizeMode="cover"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '100%',
              height: 200,
              borderRadius: SIZES.borderRadius,
              position: 'relative',
            }}
          />
          <View style={{position: 'absolute', bottom: 0}}>
            <View
              style={{
                backgroundColor: COLORS.white,
                padding: SIZES.padding * 2,
                borderTopRightRadius: SIZES.borderRadius,
                borderBottomLeftRadius: SIZES.borderRadius,
              }}>
              <Text style={{...FONTS.h3}}>{item.duration}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{...FONTS.h3}}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={icons.star}
              style={{width: 10, height: 10}}
              resizeMode="contain"
            />
            <Text>
              {item?.categories?.map(categoryId => {
                return (
                  <View style={{flexDirection: 'row'}} key={categoryId}>
                    <Text style={{...FONTS.body3}}>
                      {getCategoryNameById(categoryId)}
                    </Text>
                    <Text style={{...FONTS.h3, color: COLORS.darkgray}}>.</Text>
                  </View>
                );
              })}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: '100%',
        height: 500,
      }}>
      <FlatList
        renderItem={item => renderItem(item.item)}
        keyExtractor={item => item.id}
        data={restaurants}
      />
    </View>
  );
};

export default Restaurant;
