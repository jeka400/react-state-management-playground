import * as React from "react";
import { useState, useEffect } from 'react';
import Bluebird from "bluebird";

Bluebird.config({cancellation: true});

interface IUserResponse {
    userAge: number;
    userName: string;
}

interface IUserContext {
    userAge: number | null;
    userName: string;
}

export const UserContext = React.createContext<IUserContext>({
    userAge: null,
    userName: "..."
});

function fetchUser(): Bluebird<IUserResponse> {
    return new Bluebird((resolve) => {
        setTimeout(() => {
            resolve({ userAge: 20, userName: "Adam"});
        }, 3000);
    })
}

interface IUserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUserContext>({ userAge: null, userName: "..."});

    useEffect(() => {
        const promise = fetchUser().then((user) => {
            setUser(user);
        });
    
        return () => {
          promise.cancel();
        }
    }, []);

    return (
        <UserContext.Provider value={ user }>
            { children }
        </UserContext.Provider>
    )
    
}
