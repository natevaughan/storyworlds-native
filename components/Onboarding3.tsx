import * as React from 'react';
import { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { containers } from "../styles/Containers";
import { colors } from "../styles/Colors";
import { text } from "../styles/Text";

interface Onboarding3Props {
  navigation: any
}
export default class Onboarding3 extends Component<Onboarding3Props> {

  constructor(props: Onboarding3Props) {
    super(props);
  }

  render() {
    return (
      <View style={containers.centered}>
        <Text style={text.lg}>Get started</Text>
        <View style={[containers.separator, colors.bgDefault]}/>
        <TouchableOpacity
            style={containers.buttonXl}
            onPress={() => {
              AsyncStorage.setItem('onboardingComplete', "1")
                  .catch((err) => {
                      console.log(err);
                  })
                this.props.navigation.navigate('Home')
            }}>
            <Text style={{color: "#ffffff", fontSize: 18}}>start exploring</Text>
        </TouchableOpacity>
      </View>
    );
  }
}