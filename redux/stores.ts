import { createStore } from "redux";
import { currentlyPlayingReducer } from "./reducers";

export const currentlyPlaying = createStore(currentlyPlayingReducer);