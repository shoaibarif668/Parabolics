import React from 'react';
import styles from "../Styles/counter.module.css"
import {Container,Row,Col} from "react-bootstrap"
import CounterContent from '../Stateful/CounterContent';
const Counter = () => {
    return(
        <>
        <div className={styles.counter__wrapper}>
            <Container>
                <Row>
                    <Col md={4} sm={12} xs={12}>
                        <CounterContent count={23000} text="Total Members"/>
                    </Col>
                    <Col md={4} sm={12} xs={12}>
                        <CounterContent count={2000} text="Total Discord Members"/>
                    </Col>
                    <Col md={4} sm={12} xs={12}>
                        <CounterContent count={11000} text="Total Telegram Members"/>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default Counter;