import React, { FC, useState } from "react";
import UsernamePasswordInputView from "./UsernamePasswordInputView";

interface UsernamePasswordInputProps {
    submitLabel?: string
    onSubmit: (email: string, password: string) => void
}

const UsernamePasswordInputViewPresenter: FC<UsernamePasswordInputProps> = (props: UsernamePasswordInputProps) => {
    const [email, onEmailChange] = useState("")
    const [password, onPasswordChange] = useState("")

    return (
        <UsernamePasswordInputView
            email={email}
            onEmailChange={onEmailChange}
            password={password}
            onPasswordChange={onPasswordChange}
            onSubmit={props.onSubmit}
        />
    );
};

export default UsernamePasswordInputViewPresenter;
