import React from 'react';

import Button from '../UI/Button';
import HeaderCartButton from "./HeaderButton/HeaderCartButton"

import styles from './Header.module.css';
import { MdCall } from "react-icons/md"

import lesLogo from '../../resources/les_logo.png'
import burger from '../../resources/Bacon-Cheese-Burger-PNG-Pic.png'


const Header = (props) => {

    let navClasses = `${styles.nav}`

    document.addEventListener("scroll", (e) => {
        if (window.scrollY > window.innerHeight/2) {
            document.querySelector("nav").classList.add("nav__scroll")
        } else {
            document.querySelector("nav").classList.remove("nav__scroll")
        }
    })

    let navContainerClasses = `container ${styles.nav__container}`

    return (
        <header className={styles.header}>
            <nav className={navClasses}>
                <div className={navContainerClasses}>
                    <a href="#!" className={styles.nav__logo}>
                        <img src={lesLogo} alt="Les Pidales" />
                    </a>
                    <ul className={styles.nav__list}>
                        <li>
                            {/* <button onClick={props.onCartShow}>Click</button> */}
                            <HeaderCartButton onCartShow={props.onCartShow}/>
                        </li>
                        <li>
                            <a href="tel:1010" className={styles.nav__btn + " " + styles.nav__btnLink}>
                                <MdCall className={styles.nav__btnIcon} />
                                Позвонить
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.headerContent}>
                <div className={styles.headerContent__container}>
                    <img className={styles.headerContent__img} src={burger} alt="Bacon Cheese Burger" />
                    <div className={styles.headerContent__info}>
                        <p>С любовью</p>
                        <h2>Пидалим для вас с <span>2014 года</span></h2>
                        <Button className={styles.headerContent__btn}>Сделать заказ</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
