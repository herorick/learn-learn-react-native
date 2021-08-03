import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../../../constants';
import styles from './styles';

const Categories = ({categories}) => {
  const [chooseCategory, setChooseCategory] = useState(null);

  const onChooseCategory = item => {
    setChooseCategory(item);
  };
  const renderItem = item => {
    return (
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          padding: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          backgroundColor:
            chooseCategory?.id === item.id ? COLORS.primary : COLORS.white,
          borderRadius: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: SIZES.padding,
        }}
        onPress={() => onChooseCategory(item)}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 50,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            backgroundColor:
              chooseCategory?.id === item.id ? COLORS.white : COLORS.lightGray2,
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            color: chooseCategory?.id === item.id ? COLORS.white : COLORS.black,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 150,
      }}>
      <Text>sadasdasd</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={item => renderItem(item.item)}
        contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
      />
    </View>
  );
};
export default Categories;
