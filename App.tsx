import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FC } from "react";
import Gallery from "./components/Gallery";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import Navigation from "./navigation";

function App() {
  return Navigation();
}

export default App;