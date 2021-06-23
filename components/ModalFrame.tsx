import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import ScreenProps from "../screens/ScreenProps";
import Close from "./Close";
import { position } from "../styles/Positioning";

interface ModalFrameProps extends ScreenProps {
    children: any
}

const ModalFrame: FC<ModalFrameProps> = (props: ModalFrameProps) => {
    return (
        <View>
            <TouchableOpacity style={[position.mt4, {flexDirection: "row", justifyContent: "flex-end", minHeight: 40 }]} onPress={() => {props.navigation.goBack()}}>
                <Close style={position.mr4} />
            </TouchableOpacity>
            {props.children}
        </View>
    )
};

export default ModalFrame;