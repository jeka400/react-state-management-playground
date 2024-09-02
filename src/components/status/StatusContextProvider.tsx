import * as React from "react";
import { useState, Dispatch, SetStateAction, createContext } from "react";

type StatusContextType = [string, Dispatch<SetStateAction<string>>];

export const StatusContext = createContext<StatusContextType | undefined>(undefined);

interface IStatusProviderProps {
    children: React.ReactNode;
}

export const StatusProvider: React.FC<IStatusProviderProps> = ({ children }) => {
    const [status, setStatus] = useState<string>("Set a status");

    return (
        <StatusContext.Provider value={ [status, setStatus] }>
            { children }
        </StatusContext.Provider>
    );
};