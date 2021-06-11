/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createStackNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Onboarding1"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Onboarding1"
        component={Onboarding1Navigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={Onboarding2Navigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Onboarding1Stack = createStackNavigator<TabOneParamList>();

function Onboarding1Navigator() {
  return (
    <Onboarding1Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Onboarding1Stack.Screen
        name="Onboarding1"
        component={Onboarding1}
      />
    </Onboarding1Stack.Navigator>
  );
}

const Onboarding2Stack = createStackNavigator<TabTwoParamList>();

function Onboarding2Navigator() {
  return (
    <Onboarding2Stack.Navigator>
      <Onboarding2Stack.Screen
        name="Onboarding2"
        component={Onboarding2}
      />
    </Onboarding2Stack.Navigator>
  );
}
