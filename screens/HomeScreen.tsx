import * as React from "react";
import { FC } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TestItem from "../model/World";
import ScreenProps from "./ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase";
import EmailPasswordInput from "../components/UsernamePasswordInput";
import { containers } from "../styles/Containers";
import { colors } from "../styles/Colors";

interface  HomeScreenState {
    items?: Array<TestItem>
}

const HomeScreen: FC<ScreenProps> = (props: ScreenProps) => {
    let additionalElements = (
        <>
            <EmailPasswordInput submitLabel="Sign up" onSubmit={createFirebaseUser} />
        </>
    )

    let styles = StyleSheet.create({
        main: {
            ...containers.container,
        },
        title: containers.title,
        subtitle: containers.subtitle,
        bigButton: containers.bigButton,
        bigButtonText: containers.bigButtonText,
        success: colors.backgroundSuccess,
        neutral: colors.backgroundNeutral,
        buttonText: colors.textBackground
    });

    if (firebase.auth().currentUser) {
        additionalElements = (
            <>
                <TouchableOpacity style={[styles.bigButton, styles.success]} onPress={() => { props.navigation.navigate("ListWorlds") }}>
                    <Text style={[styles.bigButtonText, styles.buttonText]}>browse all storyworlds</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bigButton, styles.neutral]} onPress={() => { props.navigation.navigate("ListWorlds") }}>
                    <Text style={[styles.bigButtonText, styles.buttonText]}>create new storyworld</Text>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <View style={styles.main}>
            <Text style={styles.title}>storyworlds</Text>
            <Text style={styles.subtitle}>collaborative interactive fiction</Text>
            {additionalElements}
            <Button title="(Clear onboarding preference)" onPress={() => { AsyncStorage.removeItem('onboardingComplete').catch(err => console.warn(err.message))}} />
        </View>
    );
}

function createFirebaseUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
        })
        .catch((error) => {
            let errorCode = error.code;
            console.warn(error.message);
            // ..
        });
}

export default HomeScreen;