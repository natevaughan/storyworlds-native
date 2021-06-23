import { ViewStyle } from "react-native";
import { atom2, atom1 } from "./Constants";

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
        padding: atom1
    }

    /**
     * Margin
     */
    m2: ViewStyle = {
        margin: atom1
    }

    m4: ViewStyle = {
        margin: atom2
    }

    mt2: ViewStyle = {
        marginTop: atom1,
    }


    mt4: ViewStyle = {
        marginTop: atom2,
    }

    mb2: ViewStyle = {
        marginBottom: atom1,
    }

    mb4: ViewStyle = {
        marginBottom: atom2,
    }

    ml2: ViewStyle = {
        marginLeft: atom1,
    }

    ml4: ViewStyle = {
        marginLeft: atom2,
    }

    mr2: ViewStyle = {
        marginRight: atom1,
    }

    mr4: ViewStyle = {
        marginRight: atom2,
    }

    mx2: ViewStyle = {
        marginVertical: atom1,
    }

    mx4: ViewStyle = {
        marginVertical: atom2,
    }

    my2: ViewStyle = {
        marginHorizontal: atom1,
    }

    my4: ViewStyle = {
        marginHorizontal: atom2,
    }
}

export const position = new Position();