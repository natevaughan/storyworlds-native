import * as React from "react";
import { Component, FC } from "react";
import { db } from "../components/firebase/firebase";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TestItem from "../model/World";
import ScreenProps from "./ScreenProps";

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
                    style={styles.list}
                    data={resolvedItems}
                    renderItem={({item}) => (
                        <TouchableOpacity style={[styles.world, {backgroundColor: item.backgroundColor}]} onPress={() => this.props.navigation.navigate("Play", {world: item})}>
                            <Text style={[styles.title, {color: item.foregroundColor}]}>{item.name}</Text>
                            <Text style={{color: item.foregroundColor}}>{item.description}</Text>
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
        <View style={styles.main}>
            <Text style={styles.header}>Items</Text>
        </View>
    )
}

let styles = StyleSheet.create({
    header: {
        fontSize: 24,
        color: "#f9f9f9",
        marginBottom: 10,
    },
    world: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    main: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        backgroundColor: "#111111",
    }
});