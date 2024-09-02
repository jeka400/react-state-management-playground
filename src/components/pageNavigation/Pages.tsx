import * as React from "react";
import Username from "../user/Username";
import Status from "../status/Status";
import SetStatus from "../status/SetStatus";

export const Page1: React.FC = () => {
    return (
        <div className="card p-3 mb-3">
            <p>This is the content of page 1.</p>
            <hr />
            <Username />
            <hr />
            <SetStatus />
            <Status/>
        </div>
    )
}

export const Page2: React.FC = () => {
    return (
        <div className="card p-3 mb-3">
            <p>This is the content of page 2.</p>
            <hr /> 
            <Username />
            <hr />
            <Status />
        </div>
    )
}

export const Page3: React.FC = () => {
    return (
        <div className="card p-3 mb-3">
            <p>This is the content of page 3.</p>
            <hr />
            <Username />
            <hr />
            <SetStatus />
            <Status />
        </div>
    )
}