import ScreenProps from "./ScreenProps";
import React, { FC } from "react";
import { Text, View } from "react-native";
import ModalFrame from "../components/ModalFrame";
import { text } from "../styles/Text";

const CreateWorldModal: FC<ScreenProps> = (props: ScreenProps) => {
    return (
        <ModalFrame {...props} >
            <Text style={[text.xxl, text.center]}>Create new storyworld</Text>
        </ModalFrame>
    )
}

export default CreateWorldModal;