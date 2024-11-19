import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Onboard, Details} from '../pages';

export type MainNavigationParams = {
  Onboard: undefined;
  Home: undefined;
  Details: {
    id: number;
  };
};

const MainNavigation = () => {
  const StackNavigation = createNativeStackNavigator<MainNavigationParams>();

  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen name="Onboard" component={Onboard} />
      <StackNavigation.Screen name="Home" component={Home} />
      <StackNavigation.Screen name="Details" component={Details} />
    </StackNavigation.Navigator>
  );
};

export default MainNavigation;
