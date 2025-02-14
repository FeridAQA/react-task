import React from 'react'
import './index.scss'
import CustomizedAccordions from '../accordion'
import HeaderSwiper from '../header_swiper'

const Header = () => {
    return (
        <div id='header'>
            <div className="con">
                <div className="left">
                    <CustomizedAccordions></CustomizedAccordions>
                    <div className="bar">Electronics</div>
                    <div className="bar">Home & Lifestyle</div>
                    <div className="bar">Medicine</div>
                    <div className="bar">Sports & Outdoor</div>
                    {/* <div className="bar">Baby’s & Toys</div> */}
                </div>
                <div className="right">
                    <HeaderSwiper></HeaderSwiper>
                </div>
            </div>
        </div>
    )
}

export default Header