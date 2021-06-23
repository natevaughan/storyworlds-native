import React, { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";

const LocationWidget: FC = () => {
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        Location.requestForegroundPermissionsAsync().then((res) => {
            if (res.status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            } else {
                Location.getCurrentPositionAsync({}).then(location => {
                    setLocation(location);
                });
            }
        })
    }, []);

    let text = 'Accessing location...';

    if (errorMsg) {
        text = errorMsg;
    } else if (location && location.coords.altitude != null) {
        text = `Altitude ${Math.round(location.coords.altitude)}m`;
    }

    return (
        <View>
            <Text>{text}</Text>
        </View>
    );
};

export default LocationWidget;