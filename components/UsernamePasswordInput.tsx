import React, { FC, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { forms } from "../styles/Forms";
import { containers } from "../styles/Containers";
import { colors } from "../styles/Colors";

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
                style={forms.input}
                onChangeText={onEmailChange}
                placeholder="username"
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={forms.input}
                onChangeText={onPasswordChange}
                placeholder="password"
                secureTextEntry={true}
                value={password}
            />
            <TouchableOpacity style={[containers.buttonXl, colors.bgSuccess, colors.textBg]} onPress={() => {props.onSubmit(email, password)}}>
                <Text>{props.submitLabel || "submit"}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default UsernamePasswordInput;
