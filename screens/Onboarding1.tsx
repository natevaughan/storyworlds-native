import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, PanResponderGestureState } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import swipeDirections from 'react-native-swipe-gestures';

interface OnboardingProps {
    navigation: any
}

export default class Onboarding1 extends Component<OnboardingProps> {

    constructor(props: OnboardingProps) {
        super(props);
    }

    onSwipeUp(gestureState: PanResponderGestureState) {
        console.log('SwipeUp')
    }

    onSwipeDown(gestureState: PanResponderGestureState) {
        console.log('SwipeDown')
    }

    onSwipeLeft(gestureState: PanResponderGestureState) {
        this.props.navigation.push('TabTwo')
    }

    onSwipeRight(gestureState: PanResponderGestureState) {
        console.log('SwipeRight')
    }

    onSwipe(gestureName: string, gestureState: PanResponderGestureState) {
        // @ts-ignore
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                break;
            case SWIPE_DOWN:
                break;
            case SWIPE_LEFT:
                break;
            case SWIPE_RIGHT:
                break;
        }
    }

    render() {

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeDown={(state) => this.onSwipeDown(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{
                    flex: 1
                }}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>welcome to storyworlds</Text>
                    <Text style={styles.subtitle}>collaborative interactive fiction</Text>
                    <Text style={styles.link} onPress={() => {
                        console.log("tapped next")
                        this.props.navigation.push('TabTwo')
                    }}>next</Text>
                </View>
            </GestureRecognizer>
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
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
    },
    link: {
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
