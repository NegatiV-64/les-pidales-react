import React, { useReducer } from 'react';
import cartContext from './cart-context';

const cartProvider = () => {
    return (
        <cartContext.Provider>

        </cartContext.Provider>
    );
}

export default cartProvider;
