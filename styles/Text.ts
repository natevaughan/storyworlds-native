import { TextStyle } from "react-native";

class Text {

    /**
     * Sizes
     */
    get xxxl (): TextStyle {
        return {
            fontSize: 40,
            fontWeight: 'bold',
        }
    }

    get xxl (): TextStyle {
        return {
            fontSize: 32,
            fontWeight: "600",
        }
    }

    get xl (): TextStyle {
        return {
            fontSize: 24,
        }
    }

    get lg (): TextStyle {
        return {
            fontSize: 18,
        }
    }

    /**
     * Alignment
     */
    get center (): TextStyle {
        return {
            textAlign: 'center'
        }
    }

    get right (): TextStyle {
        return {
            textAlign: 'right'
        }
    }

    get left (): TextStyle {
        return {
            textAlign: 'left'
        }
    }
}

export const text = new Text();