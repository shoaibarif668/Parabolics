import React from "react";
import {AiOutlineArrowUp} from "react-icons/ai"
import PropTypes from 'prop-types';
import styles from "../Styles/ScrollToTop.module.css"
const ScrollToTop = ({scrollToTop}) => {
    return(
        <>
        <div className={styles.btn__wrapper}>
            <button onClick={scrollToTop}><AiOutlineArrowUp/></button>
        </div>
        </>
    )
}
export default ScrollToTop;

ScrollToTop.propTypes = {
    scrollToTop: PropTypes.func.isRequired,
}