import ScreenProps from "./ScreenProps";
import React, { FC, useState } from "react";
import { Text, TextInput } from "react-native";
import ModalFrame from "../components/ModalFrame";
import { text } from "../styles/Text";
import { forms } from "../styles/Forms";
import { position } from "../styles/Positioning";

const CreateWorldModal: FC<ScreenProps> = (props: ScreenProps) => {
    const [name, onNameChange] = useState("")
    const [description, onDescriptionChange] = useState("")
    return (
        <ModalFrame {...props} >
            <Text style={[text.xxl, text.center]}>Create new storyworld</Text>
            <Text style={[text.lg, position.m2]}>Name</Text>
            <TextInput
                style={forms.input}
                onChangeText={onNameChange}
                placeholder="name"
                value={name}
                keyboardType="default"
            />
            <Text style={[text.lg, position.m2]}>Description</Text>
            <TextInput
                style={forms.input}
                onChangeText={onDescriptionChange}
                placeholder="description"
                value={description}
                keyboardType="default"
            />
            <Text style={[text.lg, position.m2]}>BackgroundColor</Text>
        </ModalFrame>
    )
}

export default CreateWorldModal;