import * as React from "react";
import { FC } from "react";
import Onboarding1 from "../components/Onboarding1";
import Onboarding2 from "../components/Onboarding2";
import Onboarding3 from "../components/Onboarding3";
import Swiper from 'react-native-swiper'
import ScreenProps from "./ScreenProps";
import { StyleSheet } from "react-native";

const Onboarding: FC<ScreenProps> = (props: ScreenProps) => {
    return (
        <Swiper showsButtons={true} loop={false}>
            <Onboarding1 />
            <Onboarding2 />
            <Onboarding3 navigation={props.navigation} />
        </Swiper>
    );
}
export default Onboarding;