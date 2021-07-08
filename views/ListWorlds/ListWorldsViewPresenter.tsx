import * as React from "react";
import { FC, useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import World from "../../model/World";
import ScreenProps from "../../navigation/ScreenProps";
import ListWorldsView from "./ListWorldsView";
import { currentlyPlaying } from "../../redux/stores";
import { CURRENTLY_PLAYING } from "../../redux/actions";

const ListWorldsViewPresenter: FC<ScreenProps> = (props: ScreenProps) => {

    let [loading, setLoading] = useState(true);
    let [worlds, setWorlds] = useState<Array<World>>([]);

    useEffect(() => {
        db.collection("world")
            .get()
            .then((querySnapshot) => {
                const items: World[] = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data() as World)
                });
                setWorlds(items);
                setLoading(false);
            })
            .catch((error: any) => {
                console.log("Error getting documents: ", error);
            });
    }, [])


    function playWorld(world: World) {
        currentlyPlaying.dispatch({type: CURRENTLY_PLAYING, currentlyPlaying: world })
        props.navigation.navigate("Play", {world: world})
    }

    return <ListWorldsView worlds={worlds} loading={loading} playWorld={playWorld} />
}

export default ListWorldsViewPresenter;