import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../component/Nav';
import img1 from "../assets/wedding_choerogrphy.jpg";
import img2 from "../assets/services2.jpg";
import img3 from "../assets/services3.jpg";
import img4 from "../assets/Bollywod_dance.jpg";
import img5 from "../assets/Nhome.jpg";
import "./css/gellery.css";


const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
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
            <div className="gellery">
                <img src={img1} data-aos="fade-right" alt="Image 1" />
                <img src={img2} data-aos="fade-right" alt="Image 2" />
                <img src={img3} data-aos="fade-right" alt="Image 3" />
                <img src={img4} data-aos="fade-right" alt="Image 4" />
                <img src={img5} data-aos="fade-right" alt="Image 5" />
            </div>
        </>
    )
}

export default Gallery
