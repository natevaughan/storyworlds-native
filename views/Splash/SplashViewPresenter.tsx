import React, { FC, useEffect, useState } from "react";
import ScreenProps from "../../navigation/ScreenProps";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashView from "./SplashView";

const SplashViewPresenter: FC<ScreenProps> = (props: ScreenProps) => {
    let constructTime = Date.now()
    let [visible, setVisible] = useState(true)
    // animation config
    const delayBeforeFadeTime = 700
    const fadeTime = 500

    useEffect(() => {
        let route = "Onboarding"

        let storagePromise = AsyncStorage.getItem('onboardingComplete')

        Promise.all([storagePromise]).then(resolved => {
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

        let elapsed = Date.now() - constructTime;
        console.log("Initialized app in " + elapsed + "ms")

        setTimeout(() => {
            setVisible(false)
            setTimeout(() => {
                props.navigation.navigate('Main', { screen: route })
            }, fadeTime);
        }, delayBeforeFadeTime - elapsed);
    })

    return (
        <SplashView visible={visible} fadeTime={fadeTime} />
    );
}

export default SplashViewPresenter;