import * as React from 'react';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { containers } from "../styles/Containers";
import { colors } from "../styles/Colors";
import { text } from "../styles/Text";
import ScreenProps from "../screens/ScreenProps";

const Onboarding3: FC<ScreenProps> = (props: ScreenProps) => {
    return (
      <View style={containers.centered}>
        <Text style={text.lg}>Get started</Text>
        <View style={[containers.separator, colors.bgDefault]}/>
        <TouchableOpacity
            style={[containers.buttonXl, colors.bgSuccess]}
            onPress={() => {
              AsyncStorage.setItem('onboardingComplete', "1")
                  .catch((err) => {
                      console.log(err);
                  })
                props.navigation.navigate('Home')
            }}>
            <Text style={[colors.textBg, text.xl]}>start exploring</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Onboarding3;