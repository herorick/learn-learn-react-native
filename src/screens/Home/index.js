import React, {useState, useEffect} from 'react';
import {
  COLORS,
  initialCurrentLocation,
  restaurantData,
  categoryData,
} from '../../constants';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Header, Categories, Restaurant} from './components';

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    setCurrentLocation(initialCurrentLocation);
    setRestaurants(restaurantData);
    setCategories(categoryData);
  }, []);
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Header currentLocation={currentLocation} />
        <Categories categories={categories} />
        <Restaurant categories={categories} restaurants={restaurants} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
export default Home;
