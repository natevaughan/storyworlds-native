import { FC } from "react";
import Onboarding1 from "../components/Onboarding1";
import Onboarding2 from "../components/Onboarding2";
import Onboarding3 from "../components/Onboarding3";
import Gallery from "../components/Gallery";
import * as React from "react";

const Onboarding: FC = ({navigation}) => {
    /**
     * Create an array with your screens' data - title, component and additional props.
     * Title is a string to be put inside of pill.
     * Props is an object with additional data for a particular screen.
     * Component can be either React component, render function or JSX element.
     * If it is a component or function, it will receive above-mentioned props and additional 'index' props
     */
    const data = [
        {
            component: Onboarding1,
        },
        {
            component: Onboarding2(),
            props: {}, // (optional) additional props
        },
        {
            component: Onboarding3,
            props: {navigation: navigation}, // (optional) additional props
        },
    ];

    return (
        <Gallery
            data={data}
        />
    );
}

export default Onboarding;