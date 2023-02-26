import { createContext, useReducer } from "react";
import {  Reducer } from "./Reducer";

export const ShopContext = createContext()

const initialState = {
    goods: [],
    loading: true,
    error: false,
    order: [],
    isBasketShow: false,
}



export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    state.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    state.incrementQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId}})
    }

    state.decrementQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}})
    }

    state.handleBasket = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    }

    state.removeOrderFromOrders = (itemId) => {
        dispatch({type: 'REMOVE_FROM_ORDER', payload: {id: itemId}})
    }

    state.FetchData = () => {
        dispatch({type: 'PENDING'})
    }

    state.SuccessData = (data) => {
        dispatch({type: 'SUCCESS', payload: {data}})
    }

    state.FailedData = () => {
        dispatch({type: 'FAILED'})
    }


    return (
        <ShopContext.Provider value={state}>{children}</ShopContext.Provider>
    )
}