import React from "react";
import { Container } from "react-bootstrap";
import BannerContent from "../Stateful/BannerContent";
import styles from "../Styles/banner.module.css"
const Banner = () => {
    return(
        <>
        <section className={styles.banner__wrapper}>
            <Container>
                <BannerContent/>
            </Container>
        </section>
        </>
    )
}
export default Banner;