import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Onboarding1: FC = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>welcome</Text>
            </View>
            <View style={styles.info}>
                <Text>play interactive, text-based stories</Text>
            </View>
            <View style={styles.playContainer}>
                <Text style={styles.playTitle}>Mars</Text>
                <Text style={styles.play}>&gt; fly north</Text>
                <Text style={styles.play}>You enter an asteroid belt</Text>
            </View>
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
        color: "#000000"
    },
    subtitle: {
        fontSize: 18,
    },
    info: {
        marginRight: "45%",
        marginLeft: "5%",
        marginTop: 30,
        marginBottom: -20,
        textAlign: "left",
        width: "50%",
        borderColor: "#dddddd",
        borderWidth: 1,
        padding: 10,
        zIndex: 100,
        backgroundColor: "#ffffff"
    },
    playContainer: {
        marginRight: "5%",
        marginLeft: "45%",
        textAlign: "left",
        width: "50%",
        padding: 10,
        backgroundColor: "#111166",
    },
    play: {
        color: "#ffffff"
    },
    playTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#ffffff"
    },
});
