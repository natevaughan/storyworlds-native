import { Text, TextInput } from "react-native";
import { text } from "../../styles/Text";
import { position } from "../../styles/Positioning";
import { forms } from "../../styles/Forms";
import ModalFrame from "../../components/ModalFrame";
import React, { FC } from "react";

interface CreateWorldViewProps {
    name: string
    setName: (name: string) => void
    description: string
    setDescription: (description: string) => void
    closeModal: () => void
}

const CreateWorldView: FC<CreateWorldViewProps> = (props: CreateWorldViewProps) => {
    return (
        <ModalFrame onClose={props.closeModal}>
            <Text style={[text.xxl, text.center]}>Create new storyworld</Text>
            <Text style={[text.lg, position.m2]}>Name</Text>
            <TextInput
                style={forms.input}
                onChangeText={props.setName}
                placeholder="name"
                value={props.name}
                keyboardType="default"
            />
            <Text style={[text.lg, position.m2]}>Description</Text>
            <TextInput
                style={forms.input}
                onChangeText={props.setDescription}
                placeholder="description"
                value={props.description}
                keyboardType="default"
            />
            <Text style={[text.lg, position.m2]}>BackgroundColor</Text>
        </ModalFrame>
    )
}

export default CreateWorldView;