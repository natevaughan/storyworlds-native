import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Onboarding from "../screens/Onboarding";
import HomeScreen from "../screens/HomeScreen";
import ItemsScreen from "../screens/ItemsScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
      <NavigationContainer>
          <Stack.Navigator headerMode={'none'} initialRouteName="Splash">
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Items" component={ItemsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


