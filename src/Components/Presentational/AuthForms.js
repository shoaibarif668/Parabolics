import React from 'react';
import { Image } from 'react-bootstrap';
import styles from "../Styles/auth.module.css"
import logo from "../../Assets/Images/logo.png"
import LoginForm from "../Stateful/LoginForm"
import PropTypes from 'prop-types';
import SignupForm from '../Stateful/SignupForm';
const AuthForm = (props) => {
    return(
        <>
        <section className={styles.auth__section}>
            <div className={styles.form__wrapper}>
                <div className={styles.logo__wrapper}>
                    <Image src={logo} alt="logo"/>
                </div>
                <div className={styles.form__header}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                {props.isLogin ? 
                <>
                <LoginForm/>
                </>:
                <>
                <SignupForm/>
                </>}
            </div>
        </section>
        </>
    )
}
export default AuthForm;

AuthForm.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    isLogin: PropTypes.bool.isRequired,
}