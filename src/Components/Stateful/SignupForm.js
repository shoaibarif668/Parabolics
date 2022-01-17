import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "../../Utils/axiosInstance"
import { Link } from "react-router-dom";
import styles from "../Styles/login.module.css"
import {Spinner} from "react-bootstrap"
import {toast} from "react-toastify"
const SignupForm = () => {
    const [details,setDetails] = useState({
        email:"",
        name:"",
        password:""
    })
    const [isLoading,setIsLoading] = useState(false)
    const signup = (e) => {
        setIsLoading(true)
        e.preventDefault()
        axios
        .post(`/signup`,details)
        .then((response)=>{
            if(response.status===200){
                toast.success(response.message)
            }
        })
        .catch((error) => {
            toast.error(error.message)
            
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    const inputEvent = (e) => {
        const { name, value } = e.target;
    
        setDetails((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      };
  return (
    <>
      <Form onSubmit={signup}>
        <div className={styles.form__group}>
          <input type="email" placeholder="name@example.com" value={details.email} name="email" onChange={inputEvent} className={styles.form__input}  required/>
        </div >
        <div className={styles.form__group}>
            <input type="text" placeholder="name" value={details.name} name="name" onChange={inputEvent} className={styles.form__input} required/>    
        </div>
        <div className={styles.form__group}>
            <input type="password" placeholder="password" value={details.password} name="password" onChange={inputEvent} className={styles.form__input} required/>    
        </div>
        <div className={styles.form__group}>
            <Form.Group className={styles.form__checkbox} controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to the Terms & Condition" />
            </Form.Group>
        </div>
        <div className={styles.button__wrapper}>
          <button type="submit">Get Started</button>
        </div>
        {isLoading && <>
            <div className="loading">
                <Spinner animation="border" variant="success" />
            </div>
        </>}
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </Form>
    </>
  );
};
export default SignupForm;
