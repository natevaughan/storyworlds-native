import { ViewStyle } from "react-native";

/**
 * Abstraction for padding, alignment
 */
class Containers {

    /**
     * Views
     */
    get centered (): ViewStyle {
        return {
            marginTop: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    get centeredX (): ViewStyle {
        return {
            flex: 1,
            alignItems: 'center',
        }
    }

    get separator (): ViewStyle {
        return {
            marginVertical: 30,
            height: 1,
            width: '80%',
        }
    }

    /**
     * Buttons
     */
    get buttonXl (): ViewStyle {
        return {
            marginBottom: 15,
            padding: 30,
            borderRadius: 15,
        }
    }

    /**
     * Padding
     */
    get p2 (): ViewStyle {
        return {
            padding: 10
        }
    }

    /**
     * Margin
     */
    get mt2 (): ViewStyle {
        return {
            marginTop: 10,
        }
    }


    get mt4 (): ViewStyle {
        return {
            marginTop: 20,
        }
    }

    get mb2 (): ViewStyle {
        return {
            marginBottom: 10,
        }
    }


    get mb4 (): ViewStyle {
        return {
            marginBottom: 20,
        }
    }

    get mx2 (): ViewStyle {
        return {
            marginTop: 10,
            marginBottom: 10,
        }
    }

    get mx4 (): ViewStyle {
        return {
            marginTop: 20,
            marginBottom: 20,
        }
    }

    get wFull (): ViewStyle {
        return {
            width: '100%'
        }
    }
}

export const containers = new Containers();