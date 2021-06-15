import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from './screens/NewsScreen'
import LearnScreen from './screens/LearnScreen'





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Learn" component={LearnScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}