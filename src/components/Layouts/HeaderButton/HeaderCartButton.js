import React, { useContext } from 'react';

import { MdShoppingCart } from "react-icons/md"
import Button from '../../UI/Button';

import cartContext from '../../../react-context/cart-context'

import styles from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {

    const contextData = useContext(cartContext)
    let listOfItems = contextData.items;
    let test = listOfItems.reduce(function (sum, current) {
        return (
            sum + current.amount
        )
    }, 0)

    return (
        <Button onClick={props.onCartShow} className={styles.nav__btn}>
            <MdShoppingCart className={styles.nav__btnIcon} />
            Моя корзина (
            <span>{test}</span>)
        </Button>
    );
}

export default HeaderCartButton;
