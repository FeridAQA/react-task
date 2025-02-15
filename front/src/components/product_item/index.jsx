import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';
import config from '../../config';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, CircularProgress } from '@mui/material';


const ProductSwiper = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${config.BASE_URL}/products`);
            setProducts(res.data);
        } catch (error) {
            console.error("Xəta baş verdi:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="swiper-container">
            {loading ? (
                <div className='loading'><Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box></div>
            ) : (
                <>
                    <div className="custom-prev" onClick={() => swiperRef.current?.slidePrev()}>
                        <FaArrowLeft />
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1224: { slidesPerView: 3, spaceBetween: 20 },
                            1424: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                        className="product-swiper"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product._id} className="product-card">
                                <div className="imgbox">
                                    <img src={product.src} alt={product.title} />
                                <div className="add"><p>Add To Cart</p></div>
                                </div>
                                <p className='discount'>- {product.discount}%</p>
                                <div className="heart">
                                    <FavoriteBorderIcon />
                                </div>
                                <div className="eye">
                                    <RemoveRedEyeIcon />
                                </div>
                                <h3 className='title'>{product.title}</h3>
                                <p className="prices">
                                    <span className="current-price">${product.price1}</span>
                                    <span className="old-price">${product.price2}</span>
                                </p>
                                
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="custom-next" onClick={() => swiperRef.current?.slideNext()}>
                        <FaArrowRight />
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductSwiper;
