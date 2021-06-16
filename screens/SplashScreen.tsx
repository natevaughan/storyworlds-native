import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenProps from "./ScreenProps";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SplashScreenState {
    constructTime: number
}

export default class SplashScreen extends Component<ScreenProps, SplashScreenState> {
    constructor(props: ScreenProps) {
        super(props);
        this.state = {
            constructTime: Date.now()
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('onboardingComplete').then(value => {
            if (value !== null) {
                // value previously stored
                let elapsed = Date.now() - this.state.constructTime;
                console.log("onboarding complete. It has been " + elapsed + " since construction");
                setTimeout(() => {
                    this.props.navigation.navigate("Home")
                }, 1200 - elapsed);
            } else {
                let elapsed = Date.now() - this.state.constructTime;
                console.log("onboarding not complete. It has been " + elapsed + " since construction");
                setTimeout(() => {
                    this.props.navigation.navigate("Onboarding")
                }, 1200 - elapsed);
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
            let elapsed = Date.now() - this.state.constructTime;
            setTimeout(() => {
                this.props.navigation.navigate("Home")
            }, 1200 - elapsed);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>storyworlds</Text>
                    <Text style={styles.subtitle}>collaborative interactive fiction</Text>
                </View>
            </View>
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
