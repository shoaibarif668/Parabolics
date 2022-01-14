import React,{useState} from "react";
import styles from "../Styles/CounterContent.module.css"
import PropTypes from 'prop-types';
import VisibilitySensor  from "react-visibility-sensor"
import CountUp from 'react-countup';

const CounterContent = (props) => {
    const [focus, setFocus] = useState(false);
    return(
        <>
        <div className={styles.counter__content__wrapper}>
            <CountUp start={focus ? 0 : null} end={props.count} duration={4} redraw={true}>
                {({ countUpRef }) => (
                    <VisibilitySensor onChange={(isVisible) => {
                        if (isVisible) { setFocus(true); }
                    }}>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
            <h3>{props.text}</h3>
        </div>
        </>
    )
}
export default CounterContent

CounterContent.propTypes = {
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};