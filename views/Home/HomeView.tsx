import React, { FC } from "react";
import EmailPasswordInput from "../../components/UsernamePasswordInput/UsernamePasswordInputViewPresenter";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { containers } from "../../styles/Containers";
import { position } from "../../styles/Positioning";
import { colors } from "../../styles/Colors";
import { text } from "../../styles/Text";
import LocationWidget from "../../components/LocationWidget";

interface HomeViewProps {
    currentUser: any | null
    clearOnboarding: () => void
    goToListWorlds: () => void
    goToCreateWorld: () => void
    createFirebaseUser: (email: string, password: string) => void
}

const HomeView: FC<HomeViewProps> = (props: HomeViewProps) => {
    let additionalElements = (
        <>
            <EmailPasswordInput submitLabel="Sign up" onSubmit={props.createFirebaseUser} />
        </>
    )

    if (props.currentUser) {
        additionalElements = (
            <>
                <TouchableOpacity
                    style={[containers.buttonXl, position.mx2, colors.bgSuccess]}
                    onPress={props.goToListWorlds}
                >
                    <Text style={[text.lg, colors.textBg]}>browse all storyworlds</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[containers.buttonXl, position.mx2, colors.bgNeutral]}
                    onPress={props.goToCreateWorld}
                >
                    <Text style={[text.lg, colors.textBg]}>create new storyworld</Text>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <View style={containers.screen}>
            <Text style={text.xxxl}>storyworlds</Text>
            <Text style={[text.lg, position.mx4]}>collaborative interactive fiction</Text>
            {additionalElements}
            <Button title="(Clear onboarding preference)" onPress={props.clearOnboarding} />
            <LocationWidget />
        </View>
    );
}

export default HomeView;