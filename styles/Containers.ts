import { ViewStyle } from "react-native";
import { atom2 } from "./Constants";

/**
 * Composed containers
 */
class Containers {

    screen: ViewStyle = {
        marginTop: atom2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

    separator: ViewStyle = {
        marginVertical: 30,
        height: 1,
        width: '80%',
    }

    buttonXl: ViewStyle = {
        padding: 30,
        borderRadius: 15,
    }
}

export const containers = new Containers();