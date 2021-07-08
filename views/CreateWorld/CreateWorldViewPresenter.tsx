import ScreenProps from "../../navigation/ScreenProps";
import React, { FC, useState } from "react";
import CreateWorldView from "./CreateWorldView";

const CreateWorldViewPresenter: FC<ScreenProps> = (props: ScreenProps) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const closeModal = () => {
        props.navigation.goBack()
    };
    return (
        <CreateWorldView
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            closeModal={closeModal}
        />
    )
}

export default CreateWorldViewPresenter;