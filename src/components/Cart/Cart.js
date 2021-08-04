import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import styles from "./Cart.module.css"
import CartItem from './CartItem';
import Button from '../UI/Button';
import cartContext from '../../react-context/cart-context';

const Cart = (props) => {
    const contextData = useContext(cartContext);

    function onOneItemAddCartHadler(item) {
        let newData = { ...item, amount: 1 }
        contextData.addItem(newData)
        console.log(newData);
    }

    function onOneItemRemoveCartHandler(item) {
        contextData.removeItem(item);
    }

    function onFinalOrderClickHandler(e) {
        e.preventDefault();
        props.onOrderShow(true);
        props.onCartClose(false);
    }

    let cartItems = contextData.items.map(item =>
        <CartItem
            onRemove={onOneItemRemoveCartHandler.bind(null, item)}
            onAdd={onOneItemAddCartHadler.bind(null, item)}
            wholeData={item}
            key={item.id}
            id={item.id}
            image={item.img}
            name={item.name}
            price={item.price}
            amount={item.amount}
        />
    )

    let totalPrice = `${contextData.totalPrice} сум`;

    let cartItemsLenght = contextData.items.length > 0;
    return (
        <Modal onClose={props.onCartClose}>
            <div className={styles.cartWrapper}>
                {cartItems}
                <div className={styles.cartWrapper__totalPriceWrapper}>
                    <span className={styles.cartWrapper__totalPrice}>Итого</span>
                    <span className={styles.cartWrapper__priceNum}>{totalPrice}</span>
                </div>
                <div className={styles.cartWrapper__controls}>
                    <Button onClick={props.onCartClose} className={styles.cartWrapper__close}>Закрыть</Button>
                    {
                        cartItemsLenght &&
                        <Button onClick={onFinalOrderClickHandler} className={styles.cartWrapper__order}>Заказать</Button>
                    }
                </div>
            </div>
        </Modal>
    );
}

export default Cart;
