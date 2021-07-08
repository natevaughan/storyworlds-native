import React, { FC, useState } from "react";
import ScreenProps from "../../navigation/ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase";
import HomeView from "./HomeView";
import { currentlyPlaying } from "../../redux/stores";
import World from "../../model/World";


const HomeViewPresenter: FC<ScreenProps> = (props: ScreenProps) => {

    let [cp, setCp] = useState<World | undefined>(currentlyPlaying.getState())
    currentlyPlaying.subscribe(() => {
        console.log("setting cp to " + JSON.stringify(currentlyPlaying.getState()))
        setCp(currentlyPlaying.getState())
    })

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
        currentlyPlaying={cp}
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
