import React, {useContext} from 'react';

import FoodItemForm from './FoodItemForm';
import Card from '../../UI/Card';
import cartContext from '../../../react-context/cart-context'
import styles from "./FoodItem.module.css"

const FoodItem = (props) => {

    let contextData = useContext(cartContext)

    function addToCartHandler(amount) {
        let object = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: +amount,
            img: props.image
        }
        contextData.addItem(object);
    }

    return (
        <Card className={styles.foodCard}>
            <img src={props.image} alt={props.name} />
            <div className={styles.foodCard__info}>
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
                <p>{props.price} сум</p>
                <FoodItemForm onAddCart={addToCartHandler}/>
            </div>     
        </Card>
    );
}

export default FoodItem;
