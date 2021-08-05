import React, { useState, useEffect, useCallback } from 'react';

import FoodItem from './FoodItem/FoodItem';

import styles from './FoodMenu.module.css'

const FoodMenu = (props) => {

    const [foodMenuState, setFoodMenuState] = useState([]);
    const [burgersFetchError, setBurgersFetchError] = useState(false);
    const [loadingState, setLoadingState] = useState(false);

    let foodContainer = `container ${styles.food__container}`

    const fetchingBurgers = useCallback(
        async () => {
            setLoadingState(true)
            try {
                // const response = await fetch("https://lespidales-default-rtdb.firebaseio.com/burgers.json");
                const response = await fetch("./fooddata.json");
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных с сервера!');
                }
                const data = await response.json();
                setFoodMenuState(data)
            } catch (error) {
                setBurgersFetchError(error.message)
            }
            setLoadingState(false);
        },
        [],
    )

    useEffect(() => {
        fetchingBurgers()
    }, [fetchingBurgers])

    let menuContent;

    if (foodMenuState.length > 0) {
        menuContent = foodMenuState.map(item =>
            <FoodItem
                key={item.id}
                id={item.id}
                image={item.img}
                name={item.name}
                desc={item.description}
                price={item.price}
            />
        )
    }

    if (burgersFetchError) {
        menuContent = <p>{burgersFetchError}</p>
    }

    if (loadingState) {
        menuContent = <p>Загрузка, подождите...</p>
    }

    return (
        <main> 
            <section className={styles.food}>
                <div className={foodContainer}>
                    <h2 className={styles.food__title}>Наше Меню</h2>
                    <div className={styles.food__row}>
                        {menuContent}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default FoodMenu;
