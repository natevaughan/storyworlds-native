import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/Colors";
import World from "../../model/World";
import * as React from "react";
import { FC } from "react";
import { containers } from "../../styles/Containers";
import { text } from "../../styles/Text";
import { position } from "../../styles/Positioning";

interface ListWorldsViewProps {
    worlds: World[]
    loading: boolean
    playWorld: (world: World) => void
}

const ListWorldsView: FC<ListWorldsViewProps> = (props: ListWorldsViewProps) => {

    function renderWorld({item}) {
        return (
            <TouchableOpacity style={[position.p2, {backgroundColor: item.backgroundColor}]} onPress={() => { props.playWorld(item) }}>
                <Text style={[text.xxxl, {color: item.foregroundColor}]}>{item.name}</Text>
                <Text style={[text.xl, {color: item.foregroundColor}]}>{item.description}</Text>
                <Text style={[text.lg, {color: item.foregroundColor}]}>by user_{item.userId}</Text>
            </TouchableOpacity>
        )
    }

    if (props.worlds && props.worlds.length > 0) {
        return (
            <FlatList
                ListHeaderComponent={ListHeader}
        style={colors.bgDefault}
        data={props.worlds}
        keyExtractor={(item: World) => item.name}
        renderItem={renderWorld}
        />
    );
    } else if (props.loading) {
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
export default ListWorldsView;

const ListHeader: FC = () => {
    return (
        <View style={containers.screen}>
            <Text style={text.xxxl}>Items</Text>
        </View>
    )
}