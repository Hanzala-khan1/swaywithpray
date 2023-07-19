import React, { useEffect, useState } from 'react'
import Navbar from '../component/Nav'
import "./css/services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Newsletterpopup from '../component/Newsletterpopup';
import ShowNewsletter from '../component/ShowNewsletter';

const Services = () => {
    const [popup, setPopup] = useState(true);
    const [Newsletter, setNewsletter] = useState(false)


    const onshow = () => {
        setNewsletter(true)
    }

    const handlepopup = () => {
        setPopup(false);
        setNewsletter(false)
        localStorage.setItem('popupShown', 'true');
    };

    useEffect(() => {
        const popupShown = localStorage.getItem('popupShown');
        if (popupShown === 'true') {
            setPopup(false);
        }
    }, []);
    return (
        <>
            <Navbar />
            {popup && <div class="popup-overlay" onClick={handlepopup}></div>}
            {popup && <Newsletterpopup handlepopup={handlepopup} />}
            {Newsletter && <div class="popup-overlay" onClick={handlepopup}></div>}
            {Newsletter && <ShowNewsletter handlepopup={handlepopup} />}
            <div class="containerimage" id="div1">
                <div className='bottomtraingle'>
                    <svg class="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
            </div>
            <div class="containerimage" id="div2">
                <div className='traingle'>
                    <svg class="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="none">
                        <polygon points="100,0 0,0 100,100" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
                <div className='blackbox'>
                    <div className='inner_text'>
                        <h1>
                            Wedding Choreography
                        </h1>
                        <p>
                            Hey there! I am Prayrana. I am a Bollywood dancer cum instructor, based out of Austin, Texas. I am an experienced professional in my field and I offer Bollywood dance choreography services for Indian and South Asian weddings, and similar events in South Austin, Circle C, Sunset valley, Cedar Park, Round Rock, Pflugerville, Buda and West Oak Hill.
                        </p>
                        <a href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target='_blank'>
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                </div>
                <div className='bottomtraingle'>
                    <svg class="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.9)" ></polygon>
                    </svg>
                </div>
            </div >
            <div class="containerimage" id="div3">
                <div className='traingle'>
                    <svg class="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="none">
                        <polygon points="100,0 0,0 100,100" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
                <div className='blackbox'>
                    <div className='inner_text'>
                        <h1>
                            Bollywood Dance Classes
                        </h1>
                        <p>
                            An energetic Bollywood vibe is a must-have during ceremonies like Sangeet and Mehendi in the south Asian community. As someone who has worked extensively for such events. I have experience, (nationally and internationally)in creating distinct themes, selecting the right kind of music, and choreographing the bride and groom on a special number. We also offer assistance for Bollywood themed bachelorette parties.
                        </p>
                        <a onClick={onshow}>
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                </div>
                <div className='bottomtraingle'>
                    <svg class="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
            </div>
            <div class="containerimage" id="div4">
                <div className='traingle'>
                    <svg class="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="none">
                        <polygon points="100,0 0,0 100,100" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
                <div className='blackbox'>
                    <div className='inner_text'>
                        <h1>
                            Fitness
                        </h1>
                        <p>
                            We also offer assistance for Bollywood themed bachelorette parties. I have worked on fusion dance too, and can tailor my services based on the clients’ need. The bride and groom are the center of attention during their big day. I make sure they continue to steal the limelight by coming up with beautifully choreographer song sequences.
                        </p>
                        <a onClick={onshow}>
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                </div>
                <div className='bottomtraingle'>
                    <svg class="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
            </div>
            <div class="containerimage" id="div5">
                <div className='traingle'>
                    <svg class="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="none">
                        <polygon points="100,0 0,0 100,100" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
                <div className='blackbox'>
                    <div className='inner_text'>
                        <h1>
                            Studio for Rent.
                        </h1>
                        <p>
                            Your search ends here. Where you are a theatre
                            troupe or a dance group, we have just the right place for you
                            <br />
                            Features of our studio:
                            <br />
                            <ul >
                                <p style={{ display: "flex", alignItems: 'center', gap: "4rem" }}>
                                    <li>Epoxy flooring
                                    </li>
                                    <li>LED lighting
                                    </li>
                                    <li>425 sq. ft. area
                                    </li>
                                </p>
                                <p style={{ display: "flex", alignItems: 'center', gap: "4rem" }}>
                                    <li>Mirror-embedded walls
                                    </li>
                                    <li>Air-conditioned</li>
                                </p>
                            </ul>
                        </p>
                        <a href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target='_blank'>
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                </div>
                <div className='bottomtraingle'>
                    <svg class="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
            </div>

            {/* ////////////////////////////////////////////////// */}
            <div class="containerimage" id="div5">
                <div className='traingle'>
                    <svg class="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="none">
                        <polygon points="100,0 0,0 100,100" fill="rgba(8, 8, 8, 0.9)"></polygon>
                    </svg>
                </div>
                <div className='blackbox'>
                    <div className='inner_text'>
                        <h1>
                            Special Events
                        </h1>
                        <p>
                            We also offer assistance for Bollywood themed bachelorette parties. I have worked on fusion dance too, and can tailor my services based on the clients’ need. The bride and groom are the center of attention during their big day. I make sure they continue to steal the limelight by coming up with beautifully choreographer song sequences.
                        </p>
                        <a onClick={onshow}>
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
