import React from 'react';
import ReactDOM from 'react-dom'

import styles from './Loader.module.css'


const BackLoader = () => {
    return (
        <div className={styles.loaderBack}></div>
    );
}

const FrontLoader = () => {
    return (
        <div className={styles.loader}>Loading...</div>
    )
}

let portalElement = document.getElementById("loader")

const Loader = () => {
    return (
        <>
           {ReactDOM.createPortal(<BackLoader></BackLoader>, portalElement)}
           {ReactDOM.createPortal(<FrontLoader></FrontLoader>, portalElement)}
        </>
    );
}

export default Loader;
