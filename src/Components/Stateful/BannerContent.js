import React, {useCallback, useState} from "react";
import styles from "../Styles/bannerContent.module.css"
import {Spinner} from "react-bootstrap"
import {FaPlus} from "react-icons/fa"
import axios from "axios";
import {toast} from "react-toastify";
import validator from 'validator' //Validates email for us

const BannerContent = () => {
    const [details, setDetails] = useState({
        mail: "",
    })
    const [isLoading, setIsLoading] = useState(false)

    const subscription = useCallback(
        (e) => {
            e.preventDefault()
            if (validator.isEmail(details.mail)) {
                if (localStorage.getItem("subscription") === details.mail) {
                    toast.error("Can not insert the same email")
                } else {
                    setIsLoading(true)
                    axios
                        .post(`https://apo5gzt4s0.execute-api.us-east-2.amazonaws.com/dev/subscribe?mail=${details.mail}`, "")
                        .then((response) => {
                            toast.success(response.data.message)
                            localStorage.setItem("subscription", details.mail)
                        })
                        .catch((error) => {
                            toast.error(error.message)
                        })
                        .finally(() => {
                            setIsLoading(false)
                        })
                }

            } else {
                toast.error("Please Insert Valid Address")
            }

        }, [details.mail])
    const inputEvent = (e) => {
        const {name, value} = e.target;

        setDetails((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    };
    return (
        <>
            <div className={`${styles.banner__content__wrapper}`}>
                <h1 className={`${styles.heading}`}>Trading Made Easy!</h1>
                <h6 className={`${styles.sub__heading}`}>Join Our Community Of Top Traders Improving Accuracy</h6>
                <h6 className={`${styles.sub__heading}`}>& Optimizing Performance With Artifical Intelligence</h6>
                <button className={`${styles.btn}`}>Learn More</button>

                <form className={`${styles.form}`} onSubmit={subscription}>
                    <div className={`${styles.input__wrapper}`}>
                        {!isLoading ?
                            <button className={`${styles.submit__btn}`} type="submit"><FaPlus/></button> :
                            <button className={styles.submit__btn} disabled={true} type="button">
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Loading...</span></button>}
                        <input type="email" className={`${styles.email__input}`} value={details.mail} name="mail"
                               onChange={inputEvent} placeholder="Email Address..." required={true}/>
                    </div>

                </form>
                <p className={`${styles.paragraph}`}>Join Our Newsletter for Daily Watchlists and Free Signals</p>
            </div>
        </>
    )
}
export default BannerContent;