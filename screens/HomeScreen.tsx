import * as React from "react";
import { Component } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import TestItem from "../model/World";
import ScreenProps from "./ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FadeInOut from "react-native-fade-in-out";

interface  HomeScreenState {
    items?: Array<TestItem>
}

export default class HomeScreen extends Component<ScreenProps, HomeScreenState> {

    constructor(props: ScreenProps) {
        super(props);
    }

    render() {
        return (
            <View style={styles.headerComponent}>
                <Text style={styles.title}>storyworlds</Text>
                <Text style={styles.subtitle}>collaborative interactive fiction</Text>
                <TouchableOpacity style={[styles.bigButton, {backgroundColor: "#096605"}]} onPress={() => { this.props.navigation.navigate("ListWorlds") }}>
                    <Text style={styles.bigButtonText}>browse all storyworlds</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bigButton, {backgroundColor: "#090566"}]} onPress={() => { this.props.navigation.navigate("ListWorlds") }}>
                    <Text style={styles.bigButtonText}>create new storyworld</Text>
                </TouchableOpacity>
                <Button title="(Clear onboarding preference)" onPress={() => { AsyncStorage.removeItem('onboardingComplete').catch(err => console.warn(err.message))}} />
            </View>
        );
    }
}

let styles = {
    headerComponent: {
        marginTop: 20,
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
        marginBottom: 30,
        fontSize: 18,
        textAlign: 'center',
    },
    bigButton: {
        marginBottom: 15,
        padding: 30,
        borderRadius: 15,
    },
    bigButtonText: {
        color: "#ffffff",
        fontSize: 18,
    }
}