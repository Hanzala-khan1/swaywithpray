import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logoNe.png"
import './css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [animation, Setanimation] = useState(false)
    const navigate = useNavigate()
    const handleExploreClick = () => {
        Setanimation(true)
        setTimeout(() => {
            navigate('/About');
        }, 2000);

    };

    return (
        <>
            <div className={`main ${animation ? "animation-div" : ""}`} >
                <div className="headingMain">
                    {/* <div className="headsway">SWAY WITH
                        <br></br>
                        <span className='pray'>PRAY</span>
                    </div> */}
                    <img src={logo} alt='Sway with Pray Logo'
                        style={{
                            width: "168px",
                            height: "250px",
                            marginRight: "1rem",
                            // dropShadow: "5px 5px 10px black"
                        }} />
                </div>
                <div className="startButton">
                    <div className="Explore" onClick={handleExploreClick}>
                        Learn More
                    </div>
                    <div className="icon">
                        <a href='https://web.facebook.com/swaywithpray/?_rdc=1&_rdr' target="_blank">
                            <FontAwesomeIcon icon={faFacebook} className='iconsfonthome' />
                        </a>
                        <a href='https://www.instagram.com/swaywithpray/?hl=en' target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className='iconsfonthome' />
                        </a>
                        <a href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target="_blank">
                            <FontAwesomeIcon icon={faYoutube} className='iconsfonthome' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
