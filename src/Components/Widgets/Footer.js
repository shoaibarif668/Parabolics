import React from "react"
import { Container, Image } from "react-bootstrap";
import styles from "../Styles/Widget.module.css"
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaPinterestP} from "react-icons/fa"
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/logo.png"
const Footer = () => {
    return(
        <>
        <footer>
            <section className={styles.footer__top__wrapper}>
                <div className={styles.footer__logo}>
                    <Image src={Logo} alt="Parabolics"/>
                    <p>contact@parabolics.io</p>
                </div>
                <div className={styles.footer__socials}>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
                    <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterestP/></a>
                </div>
            </section>
            <section className={styles.footer__bottom__wrapper}>
                <Container>
                    <div className={styles.footer__legal}>
                        <h6>Copyright © 2022 Parabolics All rights reserved.</h6>
                        <div className={styles.legal__pages}>
                            <Link to="/disclaimer">Disclaimer</Link>
                            <Link to="/disclaimer">Privacy Policy</Link>
                            <Link to="/disclaimer">Terms Of Use</Link>
                        </div>
                    </div>
                </Container>
            </section>
        </footer>
        </>
    )
}
export default Footer;