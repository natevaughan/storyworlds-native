import * as React from "react";
import { FC } from "react";
import Onboarding1View from "./Onboarding1View";
import Onboarding2View from "./Onboarding2View";
import Onboarding3View from "./Onboarding3View";
import Swiper from 'react-native-swiper'
import ScreenProps from "../../navigation/ScreenProps";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnboardingViewPresenter: FC<ScreenProps> = (props: ScreenProps) => {
    function navigateHome() {
        AsyncStorage.setItem('onboardingComplete', "1")
            .catch((err) => {
                console.log(err);
            })
        props.navigation.navigate('Home')
    }

    return (
        <Swiper showsButtons={true} loop={false}>
            <Onboarding1View/>
            <Onboarding2View/>
            <Onboarding3View onComplete={navigateHome}/>
        </Swiper>
    );
}
export default OnboardingViewPresenter;