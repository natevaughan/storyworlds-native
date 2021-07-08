import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import World from "../../model/World";
import ScreenProps from "../../navigation/ScreenProps";
import { text } from "../../styles/Text";
import { position } from "../../styles/Positioning";
import { FC } from "react";


const PlayView: FC<World> = (props: World) => {
    const bgColor = {backgroundColor: props.backgroundColor};
    const textColor = {color: props.foregroundColor};
    return (
        <View style={[position.centeredX, bgColor]}>
            <Text style={[text.xxl, position.mt4, textColor]}>
                {props.name}
            </Text>
            <Text style={[text.lg, text.left, textColor]}>
                {props.description}
            </Text>
            <Text style={[text.left, position.wFull, text.left, textColor]}>
                &gt;
            </Text>
        </View>
    );
}

export default PlayView;