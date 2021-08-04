import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import cartContext from '../../react-context/cart-context';
import styles from './Order.module.css'
import Button from '../UI/Button';

const Order = (props) => {
    const cartData = useContext(cartContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");


    function onChangeFirstNameHandler(e) {
        setFirstName(e.target.value)
    }
    function onChangeLastNameHandler(e) {
        setLastName(e.target.value)
    }
    function onChangePhoneNumberHandler(e) {
        setPhoneNumber(e.target.value)
    }
    function onChangeAddressHandler(e) {
        setAddress(e.target.value)
    }
    function onSubmitPersonalFormHandler(e) {
        e.preventDefault();
        const phone = phoneNumber.replace(/[()]/g, '').replace(/-/g, '').replaceAll(/\s+/g, '');
        const personDataForm = {
            fullName: `${firstName} ${lastName}`,
            phone: phone,
            address: address
        }
        cartData.setPersonData(personDataForm);
        props.onOrderClose();
        props.onChequeShow();
    }

    return (
        <Modal>
            <div className={styles.order__wrapper}>
                <h5 className={styles.order__title}>Ваши данные:</h5>
                <form onSubmit={onSubmitPersonalFormHandler} className={styles.order__form}>
                    <div className={styles.order__formNamesWrapper}>
                        <div className={styles.order__formInputWrapper}>
                            <label htmlFor="firstName">Ваше имя</label>
                            <input onChange={onChangeFirstNameHandler} value={firstName} id="firstName" type="text" />
                        </div>
                        <div className={styles.order__formInputWrapper}>
                            <label htmlFor="lastName">Ваша фамилия</label>
                            <input onChange={onChangeLastNameHandler} value={lastName} id="lastName" type="text" />
                        </div>
                    </div>
                    <div className={styles.order__formInputWrapper}>
                        <label htmlFor="phone">Ваш телефон</label>
                        <p><input onChange={onChangePhoneNumberHandler} value={phoneNumber} id="phone" type="tel" />
                        </p>
                    </div>
                    <div className={styles.order__formInputWrapper}>
                        <label htmlFor="address">Адрес доставки</label>
                        <input onChange={onChangeAddressHandler} value={address} id="address" type="text" />
                    </div>
                    <Button className={styles.button}>Далее</Button>
                </form>
            </div>
        </Modal>
    );
}

export default Order;
