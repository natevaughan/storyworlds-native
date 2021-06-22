import React, { FC, useState } from "react";
import { Text } from "react-native";

const WeatherWidget: FC = () => {
    const [data, setData] = useState(undefined)
    fetch("https://www.7timer.info/bin/astro.php?lon=-87.623177&lat=41.881832&ac=0&unit=metric&output=json&tzshift=0").then(res => {
        res.json().then((d) => {
            setData(d)
        })
    })
    if (data) {
        return (
            <Text>{JSON.stringify(data.dataseries[0])}</Text>
        )
    } else {
        return (
            <Text>Loading...</Text>
        )
    }
};

export default WeatherWidget;