import optimizelyClient from "../utils/optimizely";
import { auth } from "../components/firebase/firebase";

// proof of concept stylesheet
class Buttons {

    // defaults to be overridden by Optimizely
    private readonly _colorMode = {
        background_color: "#ffffff",
        foreground_color: "#111111"
    }

    constructor() {
        const user = auth.currentUser
        if (user) {
            const userContext = optimizelyClient.createUserContext(user.uid);
            // "product_sort" corresponds to the flag key you create in the Optimizely app
            this._colorMode = userContext.decide('color_mode').variables;
            console.log(this._colorMode);
        }
    }

    get background (): any {
        return {
            backgroundColor: this._colorMode.background_color,
            color: this._colorMode.foreground_color,
        }
    }

    get container (): any {
        return {
            marginTop: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    get title (): any {
        return {
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
        }
    }

    get subtitle (): any {
        return {
            marginTop: 10,
            marginBottom: 30,
            fontSize: 18,
            textAlign: 'center',
        }
    }

    get bigButton (): any {
        return {
            marginBottom: 15,
            padding: 30,
            borderRadius: 15,
            color: this._colorMode.foreground_color,
        }
    }

    get bigButtonText (): any {
        return {
            color: this._colorMode.foreground_color,
            fontSize: 18,
        }
    }
}

export const buttons = new Buttons();