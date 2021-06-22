import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { containers } from "../styles/Containers";
import { text } from "../styles/Text";

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={containers.centered}>
      <Text style={text.xxxl}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={containers.p2}>
        <Text style={text.lg}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
