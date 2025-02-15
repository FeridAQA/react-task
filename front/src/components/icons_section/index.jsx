import React from 'react'
import './index.scss'

import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import GppGoodIcon from '@mui/icons-material/GppGood';

const Icons_sec = () => {
    return (
        <div id='icons_sec'>
            <div className="con">
                <div className="bigbox">
                    <div className="up">
                        <div className="iconbox">
                            <TwoWheelerIcon />
                        </div>
                    </div>
                    <div className="down">
                        <p className='tit'>FREE AND FAST DELIVERY</p>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className="bigbox">
                    <div className="up">
                        <div className="iconbox">
                            <HeadsetMicIcon />
                        </div>
                    </div>
                    <div className="down">
                        <p className='tit'>24/7 CUSTOMER SERVICE</p>
                        <p>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className="bigbox">
                    <div className="up">
                        <div className="iconbox">
                            <GppGoodIcon />
                        </div>
                    </div>
                    <div className="down">
                        <p className='tit'>MONEY BACK GUARANTEE</p>
                        <p>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Icons_sec