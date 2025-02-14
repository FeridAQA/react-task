import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './styles.css';

import { Pagination, Autoplay } from 'swiper/modules';

import axios from 'axios';
import config from '../../config';

export default function HeaderSwiper() {
    const [header, setHeader] = useState([]);
    const [loading, setLoading] = useState(true);

    const get_header = async () => {
        try {
            const res = await axios.get(`${config.BASE_URL}/headers`);
            console.log(res);
            setHeader(res.data);
        } catch (error) {
            console.error("Xəta baş verdi:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        get_header();
    }, []);

    return (
        <>
            {loading ? (
                <>Loading...</>
            ) : (
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {header.length > 0 ? (
                        header.map((item) => (
                            <SwiperSlide key={item._id}>
                                <img src={item.src} alt="" />
                            </SwiperSlide>
                        ))
                    ) : (
                        <>data gəlmədi</>
                    )}
                </Swiper>
            )}
        </>
    );
}
