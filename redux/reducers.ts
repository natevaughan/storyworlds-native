import { CURRENTLY_PLAYING } from "./actions";
import World from "../model/World";

export function currentlyPlayingReducer(previousState: World | undefined, action: Action): World | undefined {
    console.log("Called currentlyPlaying with " + JSON.stringify(action))
    if (action.type === CURRENTLY_PLAYING) {
        console.log("updating...")
        // @ts-ignore
        return action.currentlyPlaying;
    } else {
        return previousState
    }
}