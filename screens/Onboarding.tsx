import * as React from "react";
import { FC } from "react";
import Onboarding1 from "../components/Onboarding1";
import Onboarding2 from "../components/Onboarding2";
import Onboarding3 from "../components/Onboarding3";
import Swiper from 'react-native-swiper'
import ScreenProps from "./ScreenProps";
import { StyleSheet, View, Text } from "react-native";

const Onboarding: FC<ScreenProps> = (props: ScreenProps) => {
    /**
     * Create an array with your screens' data - title, component and additional props.
     * Title is a string to be put inside of pill.
     * Props is an object with additional data for a particular screen.
     * Component can be either React component, render function or JSX element.
     * If it is a component or function, it will receive above-mentioned props and additional 'index' props
     */
    const data = [
        {
            component: Onboarding1,
        },
        {
            component: Onboarding2(),
            props: {}, // (optional) additional props
        },
        {
            component: Onboarding3,
            props: {navigation: props.navigation}, // (optional) additional props
        },
    ];

    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
            <Onboarding1 navigation={props.navigation} />
            <Onboarding2 />
            <Onboarding3 navigation={props.navigation} />
        </Swiper>
    );

}


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Onboarding;