import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Hooks from './hooks';

const Details = () => {
  const {id, incomingId} = Hooks();

  return (
    <View style={styles.container}>
      <Text>Id:{id}</Text>
      <Text>IncomingId:{incomingId}</Text>
    </View>
  );
};

export default Details;
