import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TRISHA from "../assets/Trisha.jpg";
import PREETESH from "../assets/Preetesh.jpg";
import ERIN from "../assets/Erin.jpg";
import Laasya from "../assets/laasya.jpg";
import Julie from "../assets/Julie.jpg";
import Stephanie from "../assets/Stephanie.jpg";
import Divya from "../assets/Divya.jpg"
import Anuradha from "../assets/Anuradha.jpg"

const ImageSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(3); // Default value for larger screens

    const updateSlidesPerView = () => {
        if (window.innerWidth <= 425) {
            setSlidesPerView(1); // Show 1 slide on small screens
        } else
            if (window.innerWidth <= 768) {
                setSlidesPerView(2); // Show 1 slide on small screens
            } else if (window.innerWidth <= 1024) {
                setSlidesPerView(3); // Show 3 slides on larger screens
            } else {
                setSlidesPerView(3);
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
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                style={{ padding: "1rem 2rem" }}
            >
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <img src={Stephanie} alt="Image 1" />
                            <div className='team-info'>
                                <h3 className="title">Stephanie</h3>
                                <span className="post">Dancer and Instructor</span>
                                <p>Stephanie started her dance background in Corpus Christi, Texas where she studied Ballet, Jazz, Folklorico and Classical Flamenco for 10 years. When she settled into Austin, she danced with Aztlan Dance Company for 10 years a Latin Contemporary group. She then went on to A'lante Flamenco where she delved into Flamenco for another 10 years, all while teaching a Salsa Aerobics class with Esquina Tango for 16 years. Now she is  having a blast with Bollywood and loving it!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <img src={ERIN} alt="Image 1" />
                            <div className='team-info'>
                                <h3 className="title">ERIN</h3>
                                <span className="post">Fitness Instructor</span>
                                <p>Erin dance journey started to the beat of west African drums and segued into Native American rhythms; then she explored flamenco and tango, while also flirting with salsa and swing. So it was only natural that when she met Bollywood it was love at first sight. She loves to teach Bollywood fitness as it is a complete cardio and toning workout in a fun and supportive environment </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <img src={TRISHA} alt="Image 1" />
                            <div className='team-info'>
                                <h3 className="title">TRISHA</h3>
                                <span className="post">Dancer</span>
                                <p>Trisha is a software engineer by profession and dancer at heart. Her hobbies include traveling, cooking, and now gardening too. Some days she likes to party and some days she loves spending time by myself. Dancing brings her joy and makes her feel alive. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <img src={PREETESH} alt="Image 1" />
                            <div className='team-info'>
                                <h3 className="title">PREETESH</h3>
                                <span className="post">Video Editor</span>
                                <p>
                                    Preetesh Kayanadath has 13 years of experience as a Video editor and Motion graphics artist. He has worked with companies like Brandish media entertainment , IL&FS EDUCATION, Shiamak Davar Institute of Performing Arts. Now has his own Startup media production Mania Studio, Mumbai, and also a part of SWP.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <img src={Laasya} alt="Image 1" />
                            <div className='team-info'>
                                <h3 className="title">Laasya</h3>
                                <span className="post">Dancer</span>
                                <p>Laasya loves pink, flowers, social activities, and of course  dancing. She is always happy and having fun if she is on the dance floor!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <img src={Julie} alt="Image 1" />
                            <div className='team-info'>
                                <h3 className="title">Julie</h3>
                                <span className="post">Dancer</span>
                                <p>By day Julie is a software developer for Veterans Affairs, enjoying the opportunity to support our Veterans. By night and weekend, she likes to hear some great music and move around to it with a smile, and maybe some glitter.s She has danced Tango, Flamenco, Tahitian Hula, Zapateado, Cumbia, Samba and now Bollywood. Twenty years ago after she heard Kuch Kuch Hota Hai she fell in love with Bollywood music.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <img src={Anuradha} alt="Image 1" />
                            <div className='team-info'>
                                <h3 className="title">Anuradha</h3>
                                <span className="post">Dancer</span>
                                <p>Anuradha works on technical problems by day, but would prefer to spend most of it learning and creating art forms. Aside from SWP, she studies Kathak dance and the Indian classical arts as both a practitioner and amateur historian.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <img src={Divya} alt="Image 1" />
                            <div className='team-info'>
                                <h3 className="title">Divya</h3>
                                <span className="post">Dancer</span>
                                <p>hey say that dancing is the joy of movement and the heart of life. I wholeheartedly agree, which is why I never miss a chance to dance. Growing up in various parts of India rooted me in many Indian art forms. I explored my interest in different dance forms, which my parents loved watching, especially the folk dances, and their encouragement inspired me to keep dancing..</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default ImageSlider;
