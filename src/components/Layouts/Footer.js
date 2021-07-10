import React from 'react';

import styles from './Footer.module.css'
import { FaTelegram, FaReact, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {

    let footerContainer = `container ${styles.footer__container}`

    return (
        <footer className={styles.footer}>
            <div className={footerContainer}>
                <div className={styles.footer__left}>
                    <p>Les Pidales</p>
                    <p>Это демосайт и прав нет.</p>
                </div>
                <div className={styles.footer__center}>
                    Coded with <FaReact /> by <a href="https://github.com/NegatiV-64">Bektemirov Aziz</a>
                </div>
                <ul className={styles.footer__right}>
                    <li>
                        <a href="https://t.me/Rick_Decart">
                            <FaTelegram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aza.smaktun/">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/NegatiV-64">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aziz-bektemirov-0336181a5!">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
