import React from 'react';

import styles from './Button.module.css'

const Button = (props) => {
    let classes = `${styles.button} ${props.className || ""}`
    return (
        <button onClick={props.onClick} className={classes}>
            {props.children}
        </button>
    );
}

export default Button;
