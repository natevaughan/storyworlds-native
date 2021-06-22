import { ViewStyle } from "react-native";

class Forms {
    get input(): ViewStyle {
        return {
            margin: 12,
            borderWidth: 1,
            padding: 10,
            minWidth: 150,
        }
    }
}

export const forms = new Forms();
