import React from 'react';
import styles from "../Styles/Social.module.css"
import {FaDiscord,FaTelegram} from "react-icons/fa"
const Socials = () => {
    return (
        <>
        <section className={styles.social__wrapper}>
            <h1>Join us on <span>Discord & Telegram</span></h1>
            <div className={styles.social__links}>
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className={styles.discord}><FaDiscord/></a>
                <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className={styles.telegram}><FaTelegram/></a>
            </div>
        </section>
        </>
    )
}
export default Socials;