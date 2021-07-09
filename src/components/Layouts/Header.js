import React from 'react';

import lesLogo from '../../resources/les_logo.png'
import Button from '../UI/Button';
import styles from './Header.module.css';

import { MdShoppingCart, MdCall } from "react-icons/md"

const Header = () => {

    let navContainerClasses = `container ${styles.nav__container}`

    return (
        <header className={styles.header}>
            <nav>
                <div className={navContainerClasses}>
                    <a href="#!" className={styles.nav__logo}>
                        <img src={lesLogo} alt="Les Pidales" />
                    </a>
                    <ul className={styles.nav__list}>
                        <li>
                            <Button className={styles.nav__btn}>
                                <MdShoppingCart className={styles.nav__btnIcon} />
                                Моя корзина
                            </Button>
                        </li>
                        <li>
                            <a href="tel:1010" className={styles.nav__btn + " " + styles.nav__btnLink}>
                                <MdCall className={styles.nav__btnIcon}/>
                                Позвонить
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.headerContent}>
                <div className={styles.headerContent__container}>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
