import React, { Component, FC } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, PanResponderGestureState } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import swipeDirections from 'react-native-swipe-gestures';

interface OnboardingProps {
    navigation: any
}

const Onboarding1: FC<OnboardingProps> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>welcome to storyworlds</Text>
            <Text style={styles.subtitle}>collaborative interactive fiction</Text>
        </View>
    );
}

export default Onboarding1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
    }
});
