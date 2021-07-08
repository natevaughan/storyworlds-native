import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { forms } from "../../styles/Forms";
import { containers } from "../../styles/Containers";
import { colors } from "../../styles/Colors";
import { position } from "../../styles/Positioning";

interface UsernamePasswordInputViewProps {
    email: string
    onEmailChange: Dispatch<SetStateAction<string>>
    password: string
    onPasswordChange: Dispatch<SetStateAction<string>>
    submitLabel?: string
    onSubmit: (email: string, password: string) => void
}

const UsernamePasswordInputView: FC<UsernamePasswordInputViewProps> = (props: UsernamePasswordInputViewProps) => {
    return (
        <SafeAreaView>
            <TextInput
                style={forms.input}
                onChangeText={props.onEmailChange}
                placeholder="username"
                value={props.email}
                keyboardType="email-address"
            />
            <TextInput
                style={forms.input}
                onChangeText={props.onPasswordChange}
                placeholder="password"
                secureTextEntry={true}
                value={props.password}
            />
            <TouchableOpacity style={[containers.buttonXl, position.mx2, colors.bgSuccess, colors.textBg]} onPress={() => {props.onSubmit(props.email, props.password)}}>
                <Text>{props.submitLabel || "submit"}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default UsernamePasswordInputView;
