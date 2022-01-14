import React from 'react';
import PropTypes from 'prop-types';
import styles from "../Styles/Content.module.css";
import {Container,Row,Col,Image} from "react-bootstrap"
const Content = (props) => {
    return(
        <>
        <div className={styles.content__wrapper} style={{backgroundImage : `url(${props.bgImage})`}}>
            <Container>
                <Row>
                    <Col md={6} xs={12} sm={12}>
                        <div className={styles.content}>
                            <div>
                                <h5>{props.subHeading}</h5>
                                <h1>{props.heading} <span>{props.headingBold}</span></h1>
                                <p>{props.text}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={12} sm={12}>
                        <div className={styles.content__image}>
                            <Image src={props.image} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default Content;

Content.propTypes = {
    subHeading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    headingBold: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bgImage: PropTypes.any.isRequired,
    image: PropTypes.any.isRequired,
};