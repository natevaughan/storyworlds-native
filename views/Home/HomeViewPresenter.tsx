import React, { FC } from "react";
import ScreenProps from "../../navigation/ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase";
import HomeView from "./HomeView";

const HomeViewPresenter: FC<ScreenProps> = (props: ScreenProps) => {
    return <HomeView
        currentUser={firebase.auth().currentUser}
        clearOnboarding={clearOnboarding}
        goToListWorlds={() => {
            props.navigation.navigate("ListWorlds")
        }}
        goToCreateWorld={() => {
            props.navigation.navigate("CreateWorld")
        }}
        createFirebaseUser={createFirebaseUser}
    />
}

function clearOnboarding() {
    AsyncStorage
        .removeItem('onboardingComplete')
        .catch(err => console.warn(err.message))
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

export default HomeViewPresenter;
