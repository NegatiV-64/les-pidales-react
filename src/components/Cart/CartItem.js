import React from 'react';

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import styles from './CartItem.module.css'

const CartItem = (props) => {


    return (
        <div className={styles.cartItem}>
            <img src={props.image} alt={props.name} />
            <div className={styles.cartItem__info}>
                <h5>{props.name}</h5>
                <p>{props.price * props.amount} сум</p>
            </div>
            <div className={styles.cartItem__amount}>
                <button onClick={props.onRemove}>
                    <AiFillMinusCircle />
                </button>
                <p>x <span>{props.amount}</span></p>
                <button onClick={props.onAdd}>
                    <AiFillPlusCircle />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
