import React, { FC } from "react";
import ScreenProps from "../../navigation/ScreenProps";
import PlayView from "./PlayView";

const PlayViewPresenter: FC<ScreenProps> = (props: ScreenProps) => {
    return <PlayView {...props.route.params.world} />
}

export default PlayViewPresenter;