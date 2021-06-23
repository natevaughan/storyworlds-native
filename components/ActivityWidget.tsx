import React, { FC, useEffect, useState } from "react";
import { Text } from "react-native";
import { getActivity } from "../api/ActivityApi";

const ActivityWidget: FC = () => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        getActivity().then(d => {
            if (d) {
                setData(d)
            }
        }).catch(err => {
            console.warn(err)
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