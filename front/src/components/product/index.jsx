import React from 'react'
import './index.scss'
import CountdownTimer from '../time'
import ProductItem from '../product_item'
const Product = () => {
    return (
        <div id='product'>
            <div className="up">
                <div className="con">
                    <div className="red">
                        <div className="btn"></div>
                        <div className="text">Today’s</div>
                    </div>
                    <div className="title">
                        Flash Sales
                    </div>
                </div>
                <div className="time">
                <CountdownTimer targetDate="2025-02-26T00:00:00"></CountdownTimer>
                </div>
            </div>
            <div className="down">
                <ProductItem></ProductItem>
            </div>
            <div className="viewbtn">View All Products</div>
        </div>
    )
}

export default Product