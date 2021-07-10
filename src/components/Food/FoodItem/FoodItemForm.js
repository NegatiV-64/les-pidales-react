import React, { useState } from 'react';

import Button from "../../UI/Button"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";


import styles from './FoodItemForm.module.css'

const FoodItemForm = (props) => {

    const [numberItems, setNumberItems] = useState("1");

    function onChangeValueHandler(e) {
        setNumberItems(e.target.value);
    }

    function submitBtnHandler(e) {
        e.preventDefault();
        props.onAddCart(numberItems);
        setNumberItems("1")
    }

    function onAddItemValueHandler(){
        let oldValue = +numberItems;

        if (oldValue >= 5) {
            return alert("Не больше 5")
        } else {
            setNumberItems(`${oldValue+1}`)
        }
    }

    function onRemoveItemHandler() {
        let oldValue = +numberItems;

        if (oldValue <= 1) {
            return alert("Не меньше 1")
        } else {
            setNumberItems(`${oldValue-1}`)
        }
    }

    return (
        <form className={styles.foodCard__form} onSubmit={submitBtnHandler}>
            <div className={styles.foodCard__formWrapper}>
                <label className={styles.foodCard__label} htmlFor="orderNum">Введите количество</label>
                <div className={styles.foodCard__inputWrapper}>
                    <AiFillMinusCircle onClick={onRemoveItemHandler}/>
                    <input className={styles.foodCard__input} max="5" min="1" value={numberItems} onChange={onChangeValueHandler} id="orderNum" type="number" />
                    <AiFillPlusCircle onClick={onAddItemValueHandler}/>
                </div>
            </div>

            <Button className={styles.foodCard__button}>
                Заказать
            </Button>
        </form>
    );
}

export default FoodItemForm;
