import React, { useContext } from 'react';
import cartContext from '../../react-context/cart-context';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

import styles from './Cheque.module.css'

const Cheque = (props) => {

    const contextData = useContext(cartContext);

    console.log(contextData.items);
    console.log(contextData.totalPrice);
    console.log(contextData.personData);

    let orderedFood = contextData.items.map(item =>
        <div key={item.id} className={styles.cheque__tableRow}>
            <div className={styles.cheque__tableName}>{item.name}</div>
            <div className={styles.cheque__tableAmount}>(x{item.amount})</div>
            <div className={styles.cheque__tablePrice}>{+item.price * +item.amount}</div>
        </div>
    );

    function onFinalOrderHandler(e) {
        e.preventDefault();
        let fullOrder = {
            orderedFood: contextData.items,
            orderedTotalPrice: contextData.totalPrice + 10000,
            orderedPersonName: contextData.personData.fullName,
            orderedPhone: contextData.personData.phone,
            orderedAddress: contextData.personData.address
        };

        const messageText = `
        *Новый заказ*\nЗаказ №${new Date().getDate() + 1}/${new Date().getHours()}${new Date().getMinutes()}${new Date().getMilliseconds()}\nИмя: ${fullOrder.orderedPersonName}\nНомер: ${fullOrder.orderedPhone}\nАдрес: ${fullOrder.orderedAddress}\n${fullOrder.orderedFood.map(item => `${item.name}. Количество: ${item.amount}\n`)}
        `

        fetch("https://api.telegram.org/bot1704742052:AAFQxq3mx9MDZrna356tEiwzf37FkvzbiZE/sendMessage", {
            method: "POST",
            body: JSON.stringify({
                chat_id: "71474323",
                text: messageText,
                parse_mode: "markdown"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(contextData.resetCartItems())
            .catch(error => console.log("Error: " + error))
        props.onChequeClose()
    }


    return (
        <Modal>
            <div className={styles.cheque__wrapper}>
                <div className={styles.cheque__container}>
                    <h3>Ваш заказ:</h3>
                    <div className={styles.cheque__table}>
                        {orderedFood}
                    </div>
                    <h3>Ваши данные</h3>
                    <div className={styles.cheque__client}>
                        <p><span>Имя: </span> {contextData.personData.fullName}</p>
                        <p><span>Номер: </span>{contextData.personData.phone.includes("+") ? contextData.personData.phone : `+${contextData.personData.phone}`}</p>
                        <p><span>Адрес доставки: </span>{contextData.personData.address}</p>
                    </div>
                    <h4>Общая сумма с доставкой: {contextData.totalPrice + 10000} сум</h4>
                    <Button onClick={onFinalOrderHandler} className={styles.button}>Заказать</Button>
                </div>
            </div>
        </Modal>
    );
}

export default Cheque;
