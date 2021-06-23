import * as React from "react";
import { FC } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import TestItem from "../model/World";
import ScreenProps from "./ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase";
import EmailPasswordInput from "../components/UsernamePasswordInput";
import { containers } from "../styles/Containers";
import { colors } from "../styles/Colors";
import { text } from "../styles/Text";
import ActivityWidget from "../components/ActivityWidget";
import { position } from "../styles/Positioning";

interface  HomeScreenState {
    items?: Array<TestItem>
}

const HomeScreen: FC<ScreenProps> = (props: ScreenProps) => {
    let additionalElements = (
        <>
            <EmailPasswordInput submitLabel="Sign up" onSubmit={createFirebaseUser} />
        </>
    )

    if (firebase.auth().currentUser) {
        additionalElements = (
            <>
                <TouchableOpacity style={[containers.buttonXl, colors.bgSuccess]} onPress={() => { props.navigation.navigate("ListWorlds") }}>
                    <Text style={[text.lg, colors.textBg]}>browse all storyworlds</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[containers.buttonXl, colors.bgNeutral]} onPress={() => { props.navigation.navigate("CreateWorldModal") }}>
                    <Text style={[text.lg, colors.textBg]}>create new storyworld</Text>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <View style={containers.screen}>
            <Text style={text.xxxl}>storyworlds</Text>
            <Text style={[text.lg, position.mx4]}>collaborative interactive fiction</Text>
            {additionalElements}
            <Button title="(Clear onboarding preference)" onPress={() => { AsyncStorage.removeItem('onboardingComplete').catch(err => console.warn(err.message))}} />
            <ActivityWidget />
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
