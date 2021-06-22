import optimizelyClient from "../utils/optimizely";
import { auth } from "../components/firebase/firebase";
import { pSBC } from "../utils/pSBC";

// proof of concept stylesheet
class Colors {

    // defaults to be overridden by Optimizely
    private readonly _pallette = {
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
            this._pallette = Object.assign(this._pallette, overrides)
        }
    }

    get foreground (): string {
        return this._pallette.foreground_color
    }

    get background (): string {
        return this._pallette.foreground_color
    }

    get success (): string {
        return this._pallette.success_color
    }

    get warning (): string {
        return this._pallette.warning_color
    }

    get neutral (): string {
        return this._pallette.neutral_color
    }

    get backgroundSuccess (): any {
        return {
            backgroundColor: this._pallette.success_color
        }
    }

    get backgroundWarning (): any {
        return {
            backgroundColor: this._pallette.warning_color
        }
    }

    get backgroundNeutral (): any {
        return {
            backgroundColor: this._pallette.neutral_color
        }
    }

    get textForeground (): any {
        return {
            color: this._pallette.foreground_color
        }
    }

    get textBackground (): any {
        return {
            color: this._pallette.background_color
        }
    }

    get textLight (): any {
        return {
            color: pSBC(0.42, this._pallette.foreground_color) || this._pallette.foreground_color
        }
    }
}

export const colors = new Colors();