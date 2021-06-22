import * as React from "react";
import { Component, FC } from "react";
import { db } from "../components/firebase/firebase";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TestItem from "../model/World";
import ScreenProps from "./ScreenProps";
import { containers } from "../styles/Containers";
import { text } from "../styles/Text";
import { colors } from "../styles/Colors";

interface  ListWorldsScreenState {
    loading: boolean
    worlds?: Array<TestItem>
}

export default class ListWorldsScreen extends Component<ScreenProps, ListWorldsScreenState> {

    constructor(props: ScreenProps) {
        super(props);
        this.state = {
            loading: true,
            worlds: []
        };
    }

    componentDidMount() {
        db.collection("world")
            .get()
            .then((querySnapshot) => {
                const items: TestItem[] = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data() as TestItem)
                });
                this.setState({worlds: items});
            })
            .catch((error: any) => {
                console.log("Error getting documents: ", error);
            });
    }

    render() {
        if (this.state.worlds && this.state.worlds.length > 0) {
            const resolvedItems = this.state.worlds.map(item => {
                return {
                    key: item.name,
                    ...item
                }
            });
            return (
                <FlatList
                    ListHeaderComponent={ListHeader}
                    style={colors.bgDefault}
                    data={resolvedItems}
                    renderItem={({item}) => (
                        <TouchableOpacity style={[containers.p2, {backgroundColor: item.backgroundColor}]} onPress={() => this.props.navigation.navigate("Play", {world: item})}>
                            <Text style={[text.xxxl, {color: item.foregroundColor}]}>{item.name}</Text>
                            <Text style={[text.lg, {color: item.foregroundColor}]}>{item.description}</Text>
                        </TouchableOpacity>
                    )}
                />
            );
        } else if (this.state.loading) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>No worlds yet</Text>
                </View>
            )
        }
    }
}

const ListHeader: FC = () => {
    return (
        <View style={containers.centered}>
            <Text style={text.xxxl}>Items</Text>
        </View>
    )
}