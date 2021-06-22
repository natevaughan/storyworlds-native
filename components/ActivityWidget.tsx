import React, { FC, useState } from "react";
import { Text } from "react-native";

const ActivityWidget: FC = () => {
    const [data, setData] = useState(undefined)
    if (data) {
        return (
            <Text>{data.activity}</Text>
        )
    } else {
        fetch("https://www.boredapi.com/api/activity")
            .then(res => {
                res.json().then((d) => {
                    setData(d)
                })
            })
        return (
            <Text>Loading...</Text>
        )
    }
};

export default ActivityWidget;