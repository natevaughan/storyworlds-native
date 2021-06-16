import * as React from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import World from "../model/World";
import ScreenProps from "./ScreenProps";

interface  PlayScreenProps extends ScreenProps {
    world: World
}

interface PlayScreenState {

}

export default class PlayScreen extends Component<PlayScreenProps, PlayScreenState> {

    // todo figure out how to pass props
    constructor(props: PlayScreenProps) {
        super(props);
    }

    render() {
        const world = this.props.world;
        return (
            <View>
                <View style={[styles.headerComponent, {backgroundColor: world.backgroundColor}]}>
                    <Text style={[styles.header, {color: world.foregroundColor}]}>
                        {world.name}
                    </Text>
                    <Text style={[styles.description, {color: world.foregroundColor}]}>
                        {world.description}
                    </Text>
                    <Text style={{color: world.foregroundColor}}>
                        &gt;
                    </Text>
                </View>
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
    headerComponent: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}