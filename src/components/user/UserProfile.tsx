import * as React from "react";
import { useState, useReducer } from 'react';
import { UserContext } from "./UserContext";
import userReducer, { IUserState, IUserAction } from "./UserReducer";

const User: React.FC = () => {    
    const [favNum, setfavNum] = useState(21);
    const user = React.useContext(UserContext);

    const [state, dispatch] = useReducer<React.Reducer<IUserState, IUserAction>>(userReducer, {
        userName: "",
        userAge: 1,
    });

    return (
        <div className="container mt-4">
            <section className="mb-4">
                <div className="card p-3 shadow-sm">
                    <div className="card-body">
                        <label className="form-label">Enter your favorite number { user.userName }:</label>
                        <input 
                            type="number"
                            className="form-control mb-3"
                            value={ favNum } 
                            onChange={ (e) => setfavNum(Number(e.target.value)) } 
                        />
                        <p>Your favorite number is: <strong>{ favNum }</strong>.</p>
                    </div>
                </div>
            </section>
            <section className="mb-4">
                <div className="card p-3 shadow-sm">
                    <div className="card-body">
                        <input 
                            placeholder="Name"
                            className="form-control mb-3" 
                            value={ state.userName } 
                            onChange={ (e) => dispatch({type: "changeName", value: e.target.value}) }
                        />
                        <p>Name: { state.userName }</p>

                        <input
                            placeholder="Age"
                            className="form-control mb-3"
                            value={ state.userAge }
                            onChange={ (e) => dispatch({type: "changeAge", value: Number(e.target.value)}) } 
                            type="number"
                            min="1"
                        />
                        <p>Age: { state.userAge }</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default User;
