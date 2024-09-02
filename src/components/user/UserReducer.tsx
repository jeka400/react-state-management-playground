interface IUserState {
    userName: string;
    userAge: number;
}

interface IChangeNameAction {
    type: "changeName";
    value: string;
}

interface IChangeAgeAction {
    type: "changeAge";
    value: number;
}

type IUserAction = IChangeNameAction | IChangeAgeAction;

const userReducer = (state: IUserState, action: IUserAction): IUserState => {
    switch (action.type) {
        case "changeName": 
            return { ...state, userName: action.value };
        case "changeAge":
            return { ...state, userAge: action.value };
        default:
            throw new Error(`${action} is not a valid action`);
    }
}

export default userReducer;
export type { IUserAction, IUserState};