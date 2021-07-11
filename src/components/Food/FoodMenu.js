import React, { useState, useEffect } from 'react';

import FoodItem from './FoodItem/FoodItem';

import styles from './FoodMenu.module.css'

const FoodMenu = (props) => {

    const [foodMenuState, setFoodMenuState] = useState([]);

    let foodContainer = `container ${styles.food__container}`

    useEffect(() => {
        fetch("./fooddata.json")
            .then(response => response.json())
            .then(data => setFoodMenuState(data))
    }, [])


    if (foodMenuState.length > 0) {
        const MenuItem = foodMenuState.map(item =>
            <FoodItem
                key={item.id}
                id={item.id}
                image={item.img}
                name={item.name}
                desc={item.description}
                price={item.price}
            />
        )

        return (
            <section className={styles.food}>
                <div className={foodContainer}>
                    <h2 className={styles.food__title}>Наше Меню</h2>
                    <div className={styles.food__row}>
                        {MenuItem}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <div className="container">
            <p>Loading...</p>
        </div>
    );
}

export default FoodMenu;
