import React from 'react';

import FoodItemForm from './FoodItemForm';
import Card from '../../UI/Card'

import styles from "./FoodItem.module.css"

const FoodItem = (props) => {

    function addToCartHandler(amount) {
        console.log(amount);
    }

    return (
        <Card className={styles.foodCard}>
            <img src={props.image} alt={props.name} />
            <div className={styles.foodCard__info}>
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
                <p>{props.price}</p>
                <FoodItemForm onAddCart={addToCartHandler}/>
            </div>     
        </Card>
    );
}

export default FoodItem;
