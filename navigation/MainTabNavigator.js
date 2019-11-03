import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LikedRecipes from '../screens/LikedRecipes';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-search'
      }
    />
  ),
};

HomeStack.path = '';

const LikedRecipesStack = createStackNavigator(
  {
    LikedRecipes,
  },
  config,
);

LikedRecipesStack.navigationOptions = {
  tabBarLabel: 'Recipe Book',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'} />
  ),
};

LikedRecipesStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LikedRecipesStack,
});

tabNavigator.path = '';

export default tabNavigator;
