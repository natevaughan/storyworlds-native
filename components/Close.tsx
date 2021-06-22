import React, { FC } from "react";
import Svg, { G, Path, } from 'react-native-svg';

const Close: FC = () => {
    return (
        <Svg width="34px"
             height="34px"
             viewBox="-0.5 -0.5 34 34"
        >
            <G>
                <Path d="M 1 1 L 31 31" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10"
                      pointer-events="stroke"/>
                <Path d="M 1 31 L 31 1" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10"
                      pointer-events="stroke"/>
            </G>
        </Svg>
    )
}

export default Close;