import React from 'react';
import Plans from './Plans';
import styles from "../Styles/pricing.module.css"
import PropTypes from 'prop-types';
const Pricing = ({isFirst}) => {
    const perks__list__1 = ["Stocks","Options","Crypto","Forex","Futures","Educational Content","Trade Signals"];
    const perks__list__2 = ["Premium Indicators","Market Wide Screeners","Advanced AI Scanners","Live Watchlists","Quantitative Data Sets","Discord/Telegram Access","+ More"]
    return(
        <>
        <section className={`${styles.pricing__section} ${isFirst ? styles.space : ""}`}>
            <h1>Choose your <span> Plan</span></h1>
            <p>Save Big with a Yearly Membership & Receive 4 Months Free</p>
            <Plans
                planTitle="Parabolics Premium"
                perks1={perks__list__1}
                perks2={perks__list__2}
                monthlyPrice={75}
                yearlyPrice={599}
            />
        </section>
        </>
    )
}
export default Pricing

Pricing.propTypes = {
    isFirst: PropTypes.bool.isRequired,
}