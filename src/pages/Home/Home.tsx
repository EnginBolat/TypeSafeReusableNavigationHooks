import React from 'react';
import {Text, View} from 'react-native';
import Hooks from './hooks';
import styles from './style';

const Home = () => {
  const {navigateToDetails} = Hooks();

  return (
    <View style={styles.container}>
      <Text onPress={() => navigateToDetails(5)}>Navigate To Details</Text>
    </View>
  );
};

export default Home;
