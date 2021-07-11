import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'

let portalElement = document.querySelector('#modal');

const ModalBack = (props) => {
    return (
        <div onClick={props.onClick} className={styles.modalBack}></div>
    )
}

const ModalFront = (props) => {
    return (
        <div className={styles.modalFront}>
            {props.children}
        </div>
    );
}

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<ModalBack onClick={props.onClose}></ModalBack>, portalElement)}
            {ReactDOM.createPortal(<ModalFront>{props.children}</ModalFront>, portalElement)}
        </>
    );
}

export default Modal;
