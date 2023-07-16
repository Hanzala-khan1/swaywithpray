import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../component/Nav';

const Portfolio = () => {
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

        </>
    )
}

export default Portfolio
