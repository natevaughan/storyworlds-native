import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import ScreenProps from "../navigation/ScreenProps";
import Close from "./svg/Close";
import { position } from "../styles/Positioning";

interface ModalFrameProps extends ScreenProps {
    children: any
    onClose: () => void
}

const ModalFrame: FC<ModalFrameProps> = (props: ModalFrameProps) => {
    return (
        <View>
            <TouchableOpacity
                style={[position.mt4, position.px2, position.pr4, {flexDirection: "row", justifyContent: "flex-end", minHeight: 40 }]}
                onPress={props.onClose}
            >
                <Close />
            </TouchableOpacity>
            {props.children}
        </View>
    )
};

export default ModalFrame;