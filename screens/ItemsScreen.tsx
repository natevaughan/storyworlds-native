import * as React from "react";
import { Component, FC } from "react";
import { db } from "../components/firebase/firebase";
import { Button, View, Text, FlatList } from "react-native";
import TestItem from "../model/TestItem";
import ScreenProps from "./ScreenProps";

interface  ItemsScreenState {
    items?: Array<TestItem>
}

export default class ItemsScreen extends Component<ScreenProps, ItemsScreenState> {

    constructor(props: ScreenProps) {
        super(props);
        this.state = {
            items: [{name: "Loading..."}]
        };
    }

    componentDidMount() {
        db.collection("test")
            .get()
            .then((querySnapshot) => {
                const items: TestItem[] = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data() as TestItem)
                });
                this.setState({items: items});
            })
            .catch((error: any) => {
                console.log("Error getting documents: ", error);
            });
    }

    render() {
        const resolvedItems = (this.state.items ? this.state.items : [{name: "No items yet"}]).map(item => {
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
                renderItem={({item}) => <Text>{item.name}</Text>}
            />
        );
    }
}

const ListHeader: FC = () => {
    return (
        <View style={styles.headerComponent}>
            <Text style={styles.header}>Items</Text>
            <Button title="Create new item" onPress={createItem}/>
        </View>
    )
}


function createItem() {
    db.collection("test").add({
        name: "item " + Math.trunc(Math.random() * 10000)
    }).then((item) => {
        console.log("created item")
    });
}

let styles = {
    header: {
      fontSize: 24,
    },
    headerComponent: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        backgroundColor: "yellow",
    }
}