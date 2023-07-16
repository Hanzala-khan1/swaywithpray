import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import logo from "../assets/logo2.png"
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"> <img src={logo} alt="Logo" /></Link>
                {/* <img src={logo} alt="Logo" /> */}
            </div>
            <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                        {/* Add the dropdown menu */}
                        <ul className='dropdown'>
                            <li>
                                <Link to="/services">Wedding Choreography</Link>
                            </li>
                            <li>
                                <Link to="/services">Bollywood Dance Classes</Link>
                            </li>
                            <li>
                                <Link to="/services/">Fitness</Link>
                            </li>
                            <li>
                                <Link to="/services">Studio for Rent</Link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    {/* <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li> */}
                    {/* <li>
                        <Link to="/blogs">Blogs</Link>
                    </li> */}
                    <li>
                        <Link to="/contact-us">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className='icons'>
                <a href='https://web.facebook.com/swaywithpray/?_rdc=1&_rdr' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className='iconsfont' />
                </a>
                <a href='https://www.instagram.com/swaywithpray/?hl=en' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='iconsfont' />
                </a>
                <a href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className='iconsfont' />
                </a>
            </div>
            <div className="navbar-menu-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    );
};

export default Navbar;