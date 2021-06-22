import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { containers } from "../styles/Containers";
import ScreenProps from "../screens/ScreenProps";
import Close from "./Close";

interface ModalFrameProps extends ScreenProps {
    children: any
}

const ModalFrame: FC<ModalFrameProps> = (props: ModalFrameProps) => {
    return (
        <View>
            <TouchableOpacity style={[containers.mt4, {flexDirection: "row", justifyContent: "flex-end", minHeight: 40 }]} onPress={() => {props.navigation.goBack()}}>
                <Close />
            </TouchableOpacity>
            {props.children}
        </View>
    )
};

export default ModalFrame;