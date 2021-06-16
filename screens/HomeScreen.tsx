import * as React from "react";
import { Component } from "react";
import { Button, Text, View } from "react-native";
import TestItem from "../model/TestItem";
import ScreenProps from "./ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
                <Text>Home Screen</Text>
                <Button title="View items" onPress={() => { this.props.navigation.navigate("Items") }}/>
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
    }
}