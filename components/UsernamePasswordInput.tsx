import React, { FC, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

interface UsernamePasswordInputProps {
    submitLabel?: string
    onSubmit: (email: string, password: string) => void
}

const UsernamePasswordInput: FC<UsernamePasswordInputProps> = (props: UsernamePasswordInputProps) => {
    const [email, onEmailChange] = useState("")
    const [password, onPasswordChange] = useState("")

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onEmailChange}
                placeholder="username"
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={onPasswordChange}
                placeholder="password"
                secureTextEntry={true}
                value={password}
            />
            <TouchableOpacity style={styles.submitButton} onPress={() => {props.onSubmit(email, password)}}>
                <Text>{props.submitLabel || "submit"}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default UsernamePasswordInput;

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        minWidth: 150,
    },
    submitButton: {
        padding: 20,
        backgroundColor: "#cccccc"
    }
});