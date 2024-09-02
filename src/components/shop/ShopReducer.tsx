import * as React from "react";

interface IOption {
    id: number;
    name: string;
    value: number;
}

interface IShopState {
    options: IOption[];
    quantity: number;
    selected: number;
    total?: number;
    decrementDisabled?: boolean;
    incrementDisabled?: boolean;
}

export const initialState: IShopState = {
    options: [
        { id: 1, name: "Bread", value: 2 },
        { id: 2, name: "Milk", value: 4 },
        { id: 3, name: "Eggs", value: 3 },
        { id: 4, name: "Rice", value: 1 },
        { id: 5, name: "Chicken Brest", value: 5 },
        { id: 6, name: "Bananas", value: 1 },
        { id: 7, name: "Apples", value: 2 },
        { id: 8, name: "Butter", value: 4 },
        { id: 9, name: "Cheese", value: 5 },
        { id: 10, name: "Potatos", value: 1 },

    ],
    quantity: 1,
    selected: 1,
};

interface IInit {
    type: "init";
}

interface IReduceButtonStatesAction {
    type: "reduceButtonStates";
}

interface IReduceTotalAction {
    type: "reduceTotal";
}

interface IDecrementQuantityAction {
    type: "decrementQuantity";
}

interface IIncrementQuantityAction {
    type: "incrementQuantity";
}

interface ISelectItemAction {
    type: "selectItem";
    id: number;
}

type IShopAction =
    | IInit
    | IReduceButtonStatesAction
    | IReduceTotalAction
    | IDecrementQuantityAction
    | IIncrementQuantityAction
    | ISelectItemAction;

const reduceButtonStates = (state: IShopState): IShopState => {
    return {
        ...state,
        decrementDisabled: state.quantity === 0,
        incrementDisabled: state.quantity === 10,
    };
};

const reduceTotal = (state: IShopState): IShopState => {
    const option = state.options.find(option => option.id === state.selected);

    if (!option) return state;

    return { ...state, total: state.quantity * option.value };
};

export const shopReducer: React.Reducer<IShopState, IShopAction> = 
    (state: IShopState, action: IShopAction): IShopState => {

    let newState: IShopState;

    switch (action.type) {
        case "init":
            newState = reduceTotal(state);
            return reduceButtonStates(newState);
        case "decrementQuantity":
            newState = { ...state, quantity: state.quantity - 1 };
            newState = reduceTotal(newState);
            return reduceButtonStates(newState);
        case "incrementQuantity":
            newState = { ...state, quantity: state.quantity + 1 };
            newState = reduceTotal(newState);
            return reduceButtonStates(newState);
        case "selectItem":
            newState = { ...state, selected: Number(action.id) };
            return reduceTotal(newState);
        default:
            throw new Error(`${action.type} is not a valid action`);            
    }
}