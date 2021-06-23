import { ViewStyle } from "react-native";
import { four, two } from "./Constants";

/**
 * Atomic constants for composing padding, alignment
 * Similar to Tailwind CSS
 */
class Position {

    centeredX: ViewStyle = {
        flex: 1,
        alignItems: 'center',
    }

    wFull: ViewStyle = {
        width: '100%'
    }

    /**
     * Padding
     */
    p2: ViewStyle = {
        padding: two
    }

    /**
     * Margin
     */
    m2: ViewStyle = {
        margin: two
    }

    m4: ViewStyle = {
        margin: four
    }

    mt2: ViewStyle = {
        marginTop: two,
    }


    mt4: ViewStyle = {
        marginTop: four,
    }

    mb2: ViewStyle = {
        marginBottom: two,
    }

    mb4: ViewStyle = {
        marginBottom: four,
    }

    ml2: ViewStyle = {
        marginLeft: two,
    }

    ml4: ViewStyle = {
        marginLeft: four,
    }

    mr2: ViewStyle = {
        marginRight: two,
    }

    mr4: ViewStyle = {
        marginRight: four,
    }

    mx2: ViewStyle = {
        marginVertical: two,
    }

    mx4: ViewStyle = {
        marginVertical: four,
    }

    my2: ViewStyle = {
        marginHorizontal: two,
    }

    my4: ViewStyle = {
        marginHorizontal: four,
    }
}

export const position = new Position();