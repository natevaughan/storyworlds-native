import * as React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Onboarding3Props {
  navigation: any
}
export default class Onboarding3 extends Component<Onboarding3Props> {

  constructor(props: Onboarding3Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Get started</Text>
        <View style={styles.separator}/>
        <Button
            title="Go to Home"
            onPress={() => {
              AsyncStorage.setItem('onboardingComplete', "1")
                  .catch((err) => {
                      console.log(err);
                  })
                this.props.navigation.navigate('Home')
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
