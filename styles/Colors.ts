import optimizelyClient from "../utils/optimizely";
import { auth } from "../components/firebase/firebase";
import { pSBC } from "../utils/pSBC";
import { TextStyle, ViewProps, ViewStyle } from "react-native";

// proof of concept stylesheet
class Colors {

    // defaults to be overridden by Optimizely
    private readonly _palette = {
        background_color: "#ffffff",
        foreground_color: "#111111",
        success_color: "#33AA33",
        warning_color: "#aa3333",
        neutral_color: "#3333cc",
    }

    constructor() {
        const user = auth.currentUser
        if (user) {
            const userContext = optimizelyClient.createUserContext(user.uid);
            const overrides = userContext.decide('color_mode').variables;
            // overwrite defaults with experimental vars from Optimizely
            this._palette = Object.assign(this._palette, overrides)
        }
    }

    get foreground (): string {
        return this._palette.foreground_color
    }

    get background (): string {
        return this._palette.foreground_color
    }

    get success (): string {
        return this._palette.success_color
    }

    get warning (): string {
        return this._palette.warning_color
    }

    get neutral (): string {
        return this._palette.neutral_color
    }
    get bgDefault (): ViewStyle {
        return {
            backgroundColor: this._palette.background_color
        }
    };

    get bgSuccess (): ViewStyle {
        return {
            backgroundColor: this._palette.success_color
        }
    }

    get bgWarning (): ViewStyle {
        return {
            backgroundColor: this._palette.warning_color
        }
    }

    get bgNeutral (): ViewStyle {
        return {
            backgroundColor: this._palette.neutral_color
        }
    }

    get textDefault (): TextStyle {
        return {
            color: this._palette.foreground_color
        }
    }

    get textBg (): TextStyle {
        return {
            color: this._palette.background_color
        }
    }

    get textLight (): TextStyle {
        return {
            color: pSBC(0.42, this._palette.foreground_color) || this._palette.foreground_color
        }
    }
}

export const colors = new Colors();