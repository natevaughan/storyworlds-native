import * as React from "react";
import { FC } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import TestItem from "../model/World";
import ScreenProps from "./ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase";
import EmailPasswordInput from "../components/UsernamePasswordInput";

interface  HomeScreenState {
    items?: Array<TestItem>
}

const HomeScreen: FC<ScreenProps> = (props: ScreenProps) => {
    console.log(firebase.auth().currentUser)
    let additionalElements = (
        <>
            <EmailPasswordInput submitLabel="Sign up" onSubmit={createFirebaseUser} />
        </>
    )
    if (firebase.auth().currentUser) {
        additionalElements = (
            <>
                <TouchableOpacity style={[styles.bigButton, {backgroundColor: "#096605"}]} onPress={() => { props.navigation.navigate("ListWorlds") }}>
                    <Text style={styles.bigButtonText}>browse all storyworlds</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bigButton, {backgroundColor: "#090566"}]} onPress={() => { props.navigation.navigate("ListWorlds") }}>
                    <Text style={styles.bigButtonText}>create new storyworld</Text>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <View style={styles.headerComponent}>
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
            console.log(userCredential.user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            console.warn(error.message);
            // ..
        });
}

export default HomeScreen;

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