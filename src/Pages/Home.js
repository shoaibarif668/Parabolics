import React from 'react';
import Banner from "../Components/Presentational/Banner"
import Counter from '../Components/Presentational/Counter';
import Content from '../Components/Presentational/Content';

import mobile from "../Assets/Images/mobile.png"
import mobile_bg from "../Assets/Images/mobile_bg.png"

import comp from "../Assets/Images/com.png"
import comp_bg from "../Assets/Images/com_bg.jpg"
import Pricing from '../Components/Presentational/Pricing';

const Home = () => {
    return (
        <>
            <Banner/>
            <Counter/>
            <Content
                heading="Know the markets, Trade like a "
                headingBold="Professional."
                subHeading="FIND THE BEST TRADES"
                text="Compete with the Hedge Funds by using Our Advanced Algorithms to find the most Optimal Opportunities by combining Artificial Intelligence with Quantitative Data Science. Be in the Know, Now!"
                image={mobile}
                bgImage={mobile_bg}/>
            <Content
                heading="Automated Alerts & "
                headingBold="Trading Signals."
                subHeading="Master the Market"
                text="Here at Parabolics, we have designed, backtested, and continually optimize our collection of Machine Learning models to beat the markets. By using Artificial Intelligence, Parabolics has been able to gain an edge and find the best trading opportunities for Stocks, Options, Crypto, Forex, & Futures. Our tools and Trade Signals can also be accessed on both Discord and Telegram."
                image={comp}
                bgImage={comp_bg}/>
            <Pricing isFirst={false}/>
        </>
    )
}
export default Home;