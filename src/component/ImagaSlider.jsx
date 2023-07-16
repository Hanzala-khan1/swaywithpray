import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
////////////////////
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
///////////////////////////
import aboutImg1 from "../assets/Nabout1.jpg"
import aboutImg2 from "../assets/Nabout2.jpg"
/////////////////////
// import SwiperCore, { Navigation, Autoplay } from 'swiper';
// SwiperCore.use([Navigation, Autoplay]);
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const ImageSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(3); // Default value for larger screens

    const updateSlidesPerView = () => {
        if (window.innerWidth <= 768) {
            setSlidesPerView(1); // Show 1 slide on small screens
        } else {
            setSlidesPerView(3); // Show 3 slides on larger screens
        }
    };

    useEffect(() => {
        // Add event listener on component mount to update slidesPerView
        window.addEventListener('resize', updateSlidesPerView);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);
    return (
        <div>
            <Swiper
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={slidesPerView}
            // spaceBetween={20}
            // navigation
            // scrollbar={{ draggable: true }}
            // autoplay={{
            //     delay: 1000, // Delay between slides (in milliseconds)
            //     disableOnInteraction: false, // Allow user interaction to interrupt autoplay
            // }}
            >
                <SwiperSlide>
                    <div className='slide'>
                        <img src={aboutImg1} alt="Image 1" />
                        <div className='team-info'>
                            <h3 className="title">Williamson</h3>
                            <span className="post">Web Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <img src={aboutImg1} alt="Image 1" />
                        <div className='team-info'>
                            <h3 className="title">Williamson</h3>
                            <span className="post">Web Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <img src={aboutImg1} alt="Image 1" />
                        <div className='team-info'>
                            <h3 className="title">Williamson</h3>
                            <span className="post">Web Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <img src={aboutImg1} alt="Image 1" />
                        <div className='team-info'>
                            <h3 className="title">Williamson</h3>
                            <span className="post">Web Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <img src={aboutImg1} alt="Image 1" />
                        <div className='team-info'>
                            <h3 className="title">Williamson</h3>
                            <span className="post">Web Developer</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default ImageSlider;
