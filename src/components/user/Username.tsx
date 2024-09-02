import * as React from "react";
import { UserContext } from "./UserContext";

const Username: React.FC = () => {
    const user = React.useContext(UserContext);

    return (
        <p>
            Hello. 
            You are looged in as <strong>{ user.userName }</strong>.
            Your age is: <strong>{ user.userAge }.</strong>
        </p>
    )
}

export default Username