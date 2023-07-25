import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../component/Nav';
import img1 from "../assets/wedding_choerogrphy.jpg";
import img2 from "../assets/services2.jpg";
import img3 from "../assets/services3.jpg";
import img4 from "../assets/Bollywod_dance.jpg";
import img5 from "../assets/Nhome.jpg";
import img6 from "../assets/services1.jpg";
import img7 from "../assets/special_event.jpg";
import img8 from "../assets/Ncontact.jpg";
import img9 from "../assets/firness.jpg";
import img10 from "../assets/About1.jpg";
import img11 from "../assets/home.jpg";
import img12 from "../assets/pray.jpg";

import "./css/gellery.css";


const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <div className='blogs'>
                <h1 className=''>Gallery Videos</h1>
            </div>
            <div className="portfolio">


                <iframe

                    src="https://www.youtube.com/embed/gW3NNajDQg0?autoplay=0&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

                <iframe

                    src="https://www.youtube.com/embed/1ggYv032z58?autoplay=0&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

                <iframe

                    src="https://www.youtube.com/embed/S0uqMN21GDI?autoplay=0&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

                <iframe

                    src="https://www.youtube.com/embed/r0vMOxxDSZQ?autoplay=0&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

                <iframe

                    src="https://www.youtube.com/embed/r0vMOxxDSZQ?autoplay=0&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

                <iframe

                    src="https://www.youtube.com/embed/r0vMOxxDSZQ?autoplay=0&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>

            {/* //////////////////////////////////////////// */}
            <div className='blogs'>
                <h1 className=''>Gallery Images</h1>
            </div>
            <div class="container page-top">

                <div class="row">
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img1} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img2} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img3} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img4} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img5} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img5} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img6} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img7} class="zoom img-fluid " alt="" />
                        </a>
                    </div>

                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img8} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img9} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img10} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="" class="fancybox" rel="ligthbox">
                            <img src={img11} class="zoom img-fluid " alt="" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery
