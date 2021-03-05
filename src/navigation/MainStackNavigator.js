import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SectionArticlesScreen from '../screens/SectionArticlesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SectionsScreen from '../screens/SectionsScreen';
import ArticleScreen from '../screens/ArticleScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SectionArticles"
          component={SectionArticlesScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Sections" component={SectionsScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
