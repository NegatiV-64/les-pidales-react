import React, { useReducer, useState } from 'react';
import cartContext from './cart-context';

// Defining the default value for the Reducer 
const defaultCartValue = {
    items: [],
    totalPrice: 0
}

// Defining the function for the Reducer 
function cartReducerHandler(stateSnap, action) {

    switch (action.typeOfAction) {
        case "ADD_ITEM_TO_CART":
            const updateTotalPrice = +stateSnap.totalPrice + action.itemToGet.amount * action.itemToGet.price
            const existedCartItemIndex = stateSnap.items.findIndex(item => item.id === action.itemToGet.id)
            const existedCartItem = stateSnap.items[existedCartItemIndex];

            let updatedItems;

            if (existedCartItem) {
                let updateExistingItem = {
                    ...existedCartItem,
                    amount: existedCartItem.amount + action.itemToGet.amount
                }
                updatedItems = [
                    ...stateSnap.items
                ]
                updatedItems[existedCartItemIndex] = updateExistingItem
            }

            else {
                updatedItems = stateSnap.items.concat(action.itemToGet)
            }

            return {
                items: updatedItems,
                totalPrice: updateTotalPrice
            }

        case "REMOVE_ITEM_FROM_CART":
            const existingCartItemIndex = stateSnap.items.findIndex(item => item.id === action.itemToGet.id)
            const existingCartItem = stateSnap.items[existingCartItemIndex];
            console.log(existingCartItem.price);

            let updatedExistingItems;
            const updatedTotalPrice = stateSnap.totalPrice - existingCartItem.price;

            if (existingCartItem.amount === 1) {
                updatedExistingItems = stateSnap.items.filter(function(item) {
                    return item.id !== action.itemToGet.id
                })
            }
            else {
                let updatedExistingItem = {...existingCartItem, amount: existingCartItem.amount - 1};
                updatedExistingItems = [...stateSnap.items];
                updatedExistingItems[existingCartItemIndex] = updatedExistingItem;
            }

            return {
                items: updatedExistingItems,
                totalPrice: updatedTotalPrice
            }

        case "RESET_CART": 
            return {
                items: [],
                totalPrice: 0
            }

        default:
            break;
    }

    return defaultCartValue;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartState] = useReducer(cartReducerHandler, defaultCartValue);
    const [personInfoState, setPersonInfoState] = useState({});

    function addItemToCartHandler(item) {
        dispatchCartState({
            typeOfAction: "ADD_ITEM_TO_CART",
            itemToGet: item
        })
    }

    function removeItemFromCartHandler(item) {
        dispatchCartState({
            typeOfAction: "REMOVE_ITEM_FROM_CART",
            itemToGet: item
        })
    }
    function onAddPersonData(obj) {
        setPersonInfoState(obj);
    }

    function resetCartHandler() {
        dispatchCartState({
            typeOfAction: "RESET_CART",
        })
    }

    let CartContextState = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        personData: personInfoState,
        setPersonData: onAddPersonData,
        resetCartItems: resetCartHandler,
    }

    return (
        <cartContext.Provider value={CartContextState}>
            {props.children}
        </cartContext.Provider>
    );
}

export default CartProvider;
