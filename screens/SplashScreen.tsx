import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenProps from "./ScreenProps";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FadeInOut from "react-native-fade-in-out";

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
        AsyncStorage.getItem('onboardingComplete').then(value => {
            if (value !== null) {
                // value previously stored
                route = "Home"
            }
            let elapsed = Date.now() - this.state.constructTime;
            setTimeout(() => {
                this.setState(state)
                setTimeout(() => {
                    this.props.navigation.navigate(route)
                }, this.fadeTime);
            }, this.delayBeforeFadeTime - elapsed);
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
            let elapsed = Date.now() - this.state.constructTime;
            setTimeout(() => {
                this.setState(state)
                setTimeout(() => {
                    this.props.navigation.navigate(route)
                }, this.fadeTime);
            }, this.delayBeforeFadeTime - elapsed);
        })
    }

    render() {
        return (
            <FadeInOut visible={this.state.visible} duration={this.fadeTime} style={styles.container}>
                <Text style={styles.title}>storyworlds</Text>
                <Text style={styles.subtitle}>collaborative interactive fiction</Text>
            </FadeInOut>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        marginTop: 10,
        marginBottom: 60,
        fontSize: 18,
        textAlign: 'center',
    },
});
