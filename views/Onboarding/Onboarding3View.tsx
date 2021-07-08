import * as React from 'react';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { containers } from "../../styles/Containers";
import { colors } from "../../styles/Colors";
import { text } from "../../styles/Text";

interface Onboarding3ViewProps {
    onComplete: () => void
}

const Onboarding3View: FC<Onboarding3ViewProps> = (props: Onboarding3ViewProps) => {
    return (
      <View style={containers.screen}>
        <Text style={text.lg}>Get started</Text>
        <View style={[containers.separator, colors.bgDefault]}/>
        <TouchableOpacity
            style={[containers.buttonXl, colors.bgSuccess]}
            onPress={props.onComplete}>
            <Text style={[colors.textBg, text.xl]}>start exploring</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Onboarding3View;