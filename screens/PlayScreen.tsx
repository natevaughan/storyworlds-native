import * as React from "react";
import { Component } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import World from "../model/World";
import ScreenProps from "./ScreenProps";
import { text } from "../styles/Text";
import { position } from "../styles/Positioning";

interface PlayScreenState {

}

export default class PlayScreen extends Component<ScreenProps, PlayScreenState> {

    constructor(props: ScreenProps) {
        super(props);
    }

    render() {
        const world = this.props.route.params.world as World;
        const bgColor: ViewStyle = { backgroundColor: world.backgroundColor }
        const textColor: TextStyle = { color: world.foregroundColor }
        return (
            <View style={[position.centeredX, bgColor]}>
                <Text style={[text.xxl, position.mt4, textColor]}>
                    {world.name}
                </Text>
                <Text style={[text.lg, text.left, textColor]}>
                    {world.description}
                </Text>
                <Text style={[text.left, position.wFull, text.left, textColor]}>
                    &gt;
                </Text>
            </View>
        );
    }
}