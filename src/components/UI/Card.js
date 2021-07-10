import React from 'react';

import styles from './Card.module.css'

const Card = (props) => {
    let classes = `${styles.card} ${props.className}`
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;