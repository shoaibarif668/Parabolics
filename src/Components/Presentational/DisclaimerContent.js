import React, {Fragment} from "react"
import PropTypes from "prop-types";
import styles from "../Styles/legal.module.css"
import {nanoid} from "nanoid";
import {Container} from "react-bootstrap";

const DisclaimerContent = (props) => {
    return (
        <>
            <section className={styles.legalWrapper}>
                <Container>

                    <h1>{props.title}</h1>
                    <div>{props.textArray && props.textArray.map((text) => {
                        return (
                            <Fragment key={nanoid()}>
                                <p>{text}</p>
                            </Fragment>
                        )
                    })}</div>
                </Container>

            </section>
        </>
    )
}
export default DisclaimerContent;

DisclaimerContent.propTypes = {
    title: PropTypes.string.isRequired,
    textArray: PropTypes.array.isRequired,
}