import FadeInOut from "react-native-fade-in-out";
import { Text } from "react-native";
import React, { FC } from "react";
import { text } from "../../styles/Text";
import { position } from "../../styles/Positioning";
import { containers } from "../../styles/Containers";

interface SplashScreenViewProps {
    visible: boolean
    fadeTime: number
}

const SplashView: FC<SplashScreenViewProps> = (props: SplashScreenViewProps) => {
    return (
        <FadeInOut visible={props.visible} duration={props.fadeTime} style={containers.screen}>
            <Text style={text.xxxl}>storyworlds</Text>
            <Text style={[text.lg, position.mx4]}>collaborative interactive fiction</Text>
        </FadeInOut>
    )
}

export default SplashView;