import { ViewStyle } from "react-native";
import { atom1 } from "./Constants";

class Forms {
    get input(): ViewStyle {
        return {
            margin: atom1,
            borderWidth: 1,
            padding: atom1,
            minWidth: atom1 * 12,
        }
    }
}

export const forms = new Forms();
