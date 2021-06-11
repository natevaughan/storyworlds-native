import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Onboarding2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit and expand stories created by others as you play them</Text>
      <View style={styles.separator} />
    </View>
  );
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
