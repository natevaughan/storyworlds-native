import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Onboarding from "../screens/Onboarding";
import HomeScreen from "../screens/HomeScreen";
import ListWorldsScreen from "../screens/ListWorldsScreen";
import SplashScreen from "../screens/SplashScreen";
import PlayScreen from "../screens/PlayScreen";
import CreateWorldScreen from "../screens/CreateWorldModal";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

export function MainNavigation() {
    return (
        <MainStack.Navigator headerMode={'none'} initialRouteName="Splash">
            <RootStack.Screen name="Splash" component={SplashScreen}/>
            <MainStack.Screen name="Onboarding" component={Onboarding}/>
            <MainStack.Screen name="Home" component={HomeScreen}/>
            <MainStack.Screen name="ListWorlds" component={ListWorldsScreen}/>
            <MainStack.Screen name="Play" component={PlayScreen}/>
        </MainStack.Navigator>
    );
}

export default function RootStackNavigation() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" headerMode={'none'} initialRouteName="Main">
                <RootStack.Screen
                    name="Main"
                    component={MainNavigation}
                />
                <RootStack.Screen name="CreateWorldModal" component={CreateWorldScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

