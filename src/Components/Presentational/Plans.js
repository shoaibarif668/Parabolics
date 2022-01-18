import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import {TiTick} from "react-icons/ti"
import styles from "../Styles/plans.module.css"
const Plans = (props) => {
    
    return(
        <>
        <div className={styles.plan__wrapper}>
            <h2>{props.planTitle}</h2>
            <div className={styles.plan__description}>
                <Container>
                    <ul>                    
                        <Row>
                            <Col sm={12} xs={12} md={6}>
                            {props.perks1.map((perks)=>{
                                return(
                                    <Fragment key={nanoid()}>
                                        <li><span><TiTick/></span> {perks}</li>                      
                                    </Fragment>
                                )
                            })}
                            </Col>
                            <Col sm={12} xs={12} md={6}>
                            {props.perks2 && props.perks2.map((perks)=>{
                                return(
                                    <Fragment key={nanoid()}>
                                        <li><span><TiTick/></span> {perks}</li>                      
                                    </Fragment>
                                )
                            })}
                            </Col>
                        </Row>
                    </ul>
                    <div className={styles.plan__membership__wrapper}>
                        <Row>
                            <Col md={6}>
                                <div className={styles.plan__membership}>
                                    <h3>${props.monthlyPrice}</h3>
                                    <h6>Monthly Membership</h6>
                                    <h6>Valid for one month</h6>
                                    <button type="button">Select</button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={styles.plan__membership}>
                                    <h3>${props.yearlyPrice}</h3>
                                    <h6>Yearly Membership</h6>
                                    <h6>Valid for one Year</h6>
                                    <button type="button">Select</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
        </>
    )
}
export default Plans;

Plans.propTypes = {
    planTitle : PropTypes.string.isRequired,
    perks1: PropTypes.array.isRequired,
    perks2: PropTypes.array,
    monthlyPrice: PropTypes.number.isRequired,
    yearlyPrice: PropTypes.number.isRequired,
}