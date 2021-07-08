import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import OnboardingViewPresenter from "../views/Onboarding/OnboardingViewPresenter";
import HomeViewPresenter from "../views/Home/HomeViewPresenter";
import ListWorldsViewPresenter from "../views/ListWorlds/ListWorldsViewPresenter";
import SplashViewPresenter from "../views/Splash/SplashViewPresenter";
import PlayViewPresenter from "../views/Play/PlayViewPresenter";
import CreateWorldScreen from "../views/CreateWorld/CreateWorldViewPresenter";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

export function MainNavigation() {
    return (
        <MainStack.Navigator headerMode={'none'} initialRouteName="Splash">
            <RootStack.Screen name="Splash" component={SplashViewPresenter}/>
            <MainStack.Screen name="Onboarding" component={OnboardingViewPresenter}/>
            <MainStack.Screen name="Home" component={HomeViewPresenter}/>
            <MainStack.Screen name="ListWorlds" component={ListWorldsViewPresenter}/>
            <MainStack.Screen name="Play" component={PlayViewPresenter}/>
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

