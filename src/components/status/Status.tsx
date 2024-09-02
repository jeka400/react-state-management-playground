import * as React from "react";
import { useContext } from "react";
import { StatusContext } from "./StatusContextProvider";

const Status: React.FC = () => {
    const context = useContext(StatusContext);

    if (!context) {
        throw new Error("Status must be used within a StatusProvider");
    }

    const [status] = context;

    return <p>{ status }</p>;
};

export default Status