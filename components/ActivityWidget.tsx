import React, { FC, useEffect, useState } from "react";
import { Text } from "react-native";

const ActivityWidget: FC = () => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        fetch("https://www.boredapi.com/api/activity")
            .then(res => {
                res.json().then((d) => {
                    setData(d)
                })
            })
    }, [])

    if (data) {
        return (
            <Text>{data.activity}</Text>
        )
    } else {
        return (
            <Text>Loading...</Text>
        )
    }
};

export default ActivityWidget;