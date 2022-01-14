import React from "react";
import styles from "../Styles/bannerContent.module.css"
import {FaPlus} from "react-icons/fa"
const BannerContent = () => {
    return(
        <>
        <div className={`${styles.banner__content__wrapper}`}>
            <h1 className={`${styles.heading}`}>Trading Made Easy!</h1>
            <h6 className={`${styles.sub__heading}`}>Join Our Newsletter with Daily</h6>
            <h6 className={`${styles.sub__heading}`}>Watchlists and Free Signals</h6>
            <button className={`${styles.btn}`}>Learn More</button>
            <form className={`${styles.form}`}>
                <div className={`${styles.input__wrapper}`}>
                    <button className={`${styles.submit__btn}`}><FaPlus/></button>
                    <input className={`${styles.email__input}`} type="email" placeholder="Email Address..."/>
                </div>
                
            </form>
            <p className={`${styles.paragraph}`}>Enter Email for Free Newsletter with Daily Watchlists and Free Perks</p>
        </div>
        </>
    )
}
export default BannerContent;