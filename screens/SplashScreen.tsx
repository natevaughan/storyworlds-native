import React, { Component } from "react";
import { Text } from "react-native";
import ScreenProps from "./ScreenProps";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FadeInOut from "react-native-fade-in-out";
import optimizelyClient from "../utils/optimizely";
import { text } from "../styles/Text";
import { containers } from "../styles/Containers";

interface SplashScreenState {
    constructTime: number
    visible: boolean
}

export default class SplashScreen extends Component<ScreenProps, SplashScreenState> {

    // animation config
    delayBeforeFadeTime = 700
    fadeTime = 500

    constructor(props: ScreenProps) {
        super(props);
        this.state = {
            constructTime: Date.now(),
            visible: true
        }
    }

    componentDidMount() {
        // @ts-ignore
        let state = {constructTime: this.state.constructTime, visible: false}
        let route = "Onboarding"

        let optimizelyPromise = optimizelyClient.onReady();
        let storagePromise = AsyncStorage.getItem('onboardingComplete')

        Promise.all([storagePromise, optimizelyPromise]).then(resolved => {
            if (resolved[0] !== null) {
                // value previously stored
                route = "Home"
            }
        }).catch((err) => {
            // any exception including data not found
            // goes to catch()
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    console.warn(err.name);
                    // TODO;
                    break;
                case 'ExpiredError':
                    console.warn(err.name);
                    // TODO
                    break;
            }
        })

        let elapsed = Date.now() - this.state.constructTime;
        console.log("Initialized app in " + elapsed + "ms")
        setTimeout(() => {
            this.setState(state)
            setTimeout(() => {
                this.props.navigation.navigate('Main', { screen: route })
            }, this.fadeTime);
        }, this.delayBeforeFadeTime - elapsed);
    }

    render() {
        return (
            <FadeInOut visible={this.state.visible} duration={this.fadeTime} style={containers.centered}>
                <Text style={text.xxxl}>storyworlds</Text>
                <Text style={[text.lg, containers.mx4]}>collaborative interactive fiction</Text>
            </FadeInOut>
        );
    }
}