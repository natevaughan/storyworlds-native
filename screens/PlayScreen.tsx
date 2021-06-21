import * as React from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import World from "../model/World";
import ScreenProps from "./ScreenProps";

interface PlayScreenState {

}

export default class PlayScreen extends Component<ScreenProps, PlayScreenState> {

    constructor(props: ScreenProps) {
        super(props);
    }

    render() {
        const world = this.props.route.params.world as World;
        return (
            <View style={[styles.headerComponent, {backgroundColor: world.backgroundColor}]}>
                <Text style={[styles.header, {color: world.foregroundColor}]}>
                    {world.name}
                </Text>
                <Text style={[styles.description, styles.alignLeft, {color: world.foregroundColor}]}>
                    {world.description}
                </Text>
                <Text style={[styles.alignLeft, styles.wFull, {color: world.foregroundColor}]}>
                    &gt;
                </Text>
            </View>
        );
    }
}

let styles = {
    header: {
        fontSize: 24,
    },
    description: {
        fontSize: 16,
    },
    wFull: {
        width: "100%",
    },
    alignLeft: {
        textAlign: "left",
    },
    headerComponent: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
    }
}