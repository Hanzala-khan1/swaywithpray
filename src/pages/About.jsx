import React from 'react'
import "./css/About.css"
import aboutImg1 from "../assets/Nabout1.jpg"
import aboutImg2 from "../assets/Nabout2.jpg"
// import Navbar from '../component/Nav'
import { Link } from 'react-router-dom'
import ImageSlider from '../component/ImagaSlider'
import NavScrollExample from '../component/NavNew';

const About = () => {
    return (
        <>
            <NavScrollExample />
            {/* <div className='videoBanner'>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/fxUvm0yTFZI?autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    muted
                ></iframe>
            </div> */}
            <div className='AboutMain' id='AboutMain'>
                <h1 className='HeadAbout'>ABOUT PRAY</h1>
                <div className='aboutIntro'>
                    <div className='ImgDiv'>
                        <img src={aboutImg1} className='img'></img>
                        <img src={aboutImg2} className='img'></img>
                    </div>
                    <div className='paraDiv'>
                        <p>
                            Prayrana has been a professional Bollywood Choreographer for more than a decade. Her expertise encompasses the various other forms of Bollywood that the world has seen evolve in recent years. Here’s a look at her services:
                            <br />
                            <br />
                            <strong>
                                1. Private dance classes for individuals and groups:
                            </strong>
                            <br />
                            These classes are for individuals as well as groups of people who wish to perform on a Bollywood song for an event in school/college or personal gatherings and parties. The styles and techniques will be personalized to suit your comfort level and aesthetic requirements.
                            <br />
                            <br />
                            <strong>
                                2. Community/Group dance classes:
                            </strong>
                            <br />Dance is a great stress buster and allows people to be more active, socialize and develop creative and physical skills. These classes just help you with that. Come join our community and thrive with us.
                            <br />
                            <br />
                            <strong>
                                3. Weddings:
                            </strong>
                            <br />
                            Weddings are an elaborate affair for South Asian families. Every custom/ritual is done with great pomp and joy.Pray has taught many South Asian and American brides and grooms their first dance for Sangeet and Mehendi ceremonies. Additionally, if you (solo) or alongside bridesmaids and family members, wish to perform on a special song at any of your wedding functions, Pray can choreograph any song to suit the theme and mood of the setting. She can tailor any performance or evening of performances as per your need.
                            <br />   <br />
                            Here's a list of services designed for weddings:
                            <br />

                            1) Sangeet and Mehendi workshops;  <br />
                            2) Bride's/Groom's solo and couple’s first dance;  <br />
                            3) Mother of the bride performance;  <br />
                            4) Father-daughter dance performance;  <br />
                            5) Bridesmaids' group dance;  <br />
                            6) Groomsmen group dance;  <br />
                            7) Family and friends of the bride/groom performance;  <br />  <br />
                            <strong>
                                4. Bachelorette and Bachelor parties:
                            </strong>
                            Every modern bride and groom look forward to their bachelorette/bachelor party, and why not? It's your day afterall!
                            To top it all, Austin is a great place to be for a bachelorette/bachelor's gala.  You can plan a Bollywood afternoon with Pray and have her teach your gang the song they could perform at the wedding while having a fun activity at the party or just have a fun activity with some booty shaking Bollywood moves.
                            <br />
                            <br />
                            <strong>
                                Corporates:
                            </strong>
                            In recent times, many corporate setups are incorporating Bollywood song and dance sequences to encourage more engagement and entertainment in their office parties.
                            <br />   <br />
                            Here's a list of customized services for my corporate clients:
                            <br />
                            1) Monthly dance workshops (part of the Employee wellness program);<br />
                            2) Fitness sessions using Bollywood fusion dance forms;<br />
                            3) Private tutorials for annual events;<br />
                            4) Fun workshops for teams that can help with team building and employee morale,<br />

                        </p>
                        <Link to="/contact-us" className='AboutButton' >
                            Get in Touch
                        </Link>
                        <a className='AboutButton' href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target='_blank'>
                            Watch my Videos!
                        </a>
                        {/* <div>
                            <a className='AboutButton' target='_blank'>
                                Meet My Team
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='AboutMain' id='AboutMain'>
                <h1 className='HeadAbout'>MEET THE TEAM</h1>
                <div class="slider-container">

                    {/* <ImageSlider /> */}

                </div>
            </div>
        </>
    )
}

export default About
