import React from 'react';
import Banner from "../Components/Presentational/Banner"
import Counter from '../Components/Presentational/Counter';
import Content from '../Components/Presentational/Content';

import mobile from "../Assets/Images/mobile.png"
import mobile_bg from "../Assets/Images/mobile_bg.png"

import comp from "../Assets/Images/com.png"
import comp_bg from "../Assets/Images/com_bg.png"
import Pricing from '../Components/Presentational/Pricing';
const Home = () => {
    return(
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
            text="We have designed our arsenal of trading tools to scan the markets and find the best trading opportunities for Stocks, Options, Crypto, Forex, & Futures. Our signals and tools can also be accessed on both Discord and Telegram." 
            image={comp} 
            bgImage={comp_bg}/>
        <Pricing isFirst={false}/>
        </>
    )
}
export default Home;