import React from 'react';

const cartContext = React.createContext({
    items: 0,
    totalPrice: 0,
    addItem: (item) => { },
    removeItem: (item) => { },
    personData: {},
    setPersonData: () => {},
    resetCartItems: ()=> {}
});

export default cartContext