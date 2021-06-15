/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Onboarding from "../screens/Onboarding";
import HomeScreen from "../screens/HomeScreen";
import ItemsScreen from "../screens/ItemsScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
      <NavigationContainer>
          <Stack.Navigator headerMode={'none'} initialRouteName="Onboarding">
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Items" component={ItemsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


