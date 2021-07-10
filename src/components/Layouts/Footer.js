import React from 'react';

import styles from './Footer.module.css'
import { FaTelegram, FaReact, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {

    let footerContainer = `container ${styles.footer__container}`

    return (
        <footer>
            <div className={footerContainer}>
                <div>
                    Les Pidales.
                    Это демосайт и прав нет.
                </div>
                <div>
                    Coded with <FaReact /> by <a href="#!">Bektemirov Aziz</a>
                </div>
                <ul>
                    <li>
                        <a href="#!">
                            <FaTelegram />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
