import React, {useState} from "react";
import {Form} from "react-bootstrap";
import axios from "../../Utils/axiosInstance"
import {Link} from "react-router-dom";
import styles from "../Styles/login.module.css"
import {Spinner} from "react-bootstrap"
import {toast} from "react-toastify"

const SignupForm = () => {
    const [details, setDetails] = useState({
        mail: "",
        name: "",
        pass: ""
    })
    const [extras, setExtras] = useState({
        terms: ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const passwordValidation = () => {
        const password = details.pass;
        let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/; //Length > 8 , < 32, one special char and one numeric value

        if (!regularExpression.test(password)) {
            toast.error("Password's Length should be greater than 8 and less than 32, it should have one symbol and one numeric value");
            return false;
        } else return true;

    }
    const signup = (e) => {

        e.preventDefault()
        if (passwordValidation()) {
            setIsLoading(true)
            axios
                .post(`/register`, details)
                .then((response) => {
                    if (response.status === 200 || response.status === 201) {
                        toast.success(response.data.message)
                    }

                })
                .catch((error) => {
                    toast.error(error.message)

                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }
    const inputEvent = (e) => {
        const {name, value} = e.target;

        setDetails((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });

    };
    const checkboxChange = (e) => {
        const {name, checked} = e.target;
        setExtras((preValue) => {
            return {
                ...preValue,
                [name]: checked,
            };
        });
    }
    return (
        <>
            <Form onSubmit={signup}>
                <div className={styles.form__group}>
                    <input type="email" placeholder="Email" value={details.mail} name="mail" onChange={inputEvent}
                           className={styles.form__input} required/>
                </div>
                <div className={styles.form__group}>
                    <input type="text" placeholder="Name" value={details.name} name="name" onChange={inputEvent}
                           className={styles.form__input} required/>
                </div>
                <div className={styles.form__group}>
                    <input type="password" placeholder="Password" value={details.pass} name="pass"
                           onChange={inputEvent} className={styles.form__input} required/>
                </div>
                <div className={styles.form__group}>
                    <Form.Group className={styles.form__checkbox} controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="terms" value={extras.terms} onChange={checkboxChange}
                                    label="I agree to the Terms & Condition"/>
                    </Form.Group>
                </div>
                <div className={styles.button__wrapper}>
                    <button type="submit" disabled={extras.terms ? false : true}>Get Started</button>
                </div>
                {isLoading && <>
                    <div className="loading">
                        <Spinner animation="border" variant="success"/>
                    </div>
                </>}
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </Form>
        </>
    );
};
export default SignupForm;
