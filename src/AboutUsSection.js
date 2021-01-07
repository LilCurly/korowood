import './AboutUsSection.scss';
import PaysageOne from './paysage1.jpg'
import PaysageTwo from './paysage2.jpg'

import React from 'react'
import {Carousel} from 'react-bootstrap'
import {gsap, TimelineLite, Power1} from 'gsap'

function AboutUsSection() {
    return(
        <Carousel onSelect={() => {
            let carouselAnim = new TimelineLite();
            carouselAnim.from('.Aboutus-title', {y: -15, opacity: 0, ease: Power1.easeOut, delay: 0.6})
            .from('.Aboutus-desc', {y: -15, opacity: 0, ease: Power1.easeOut})
        }}>
            <Carousel.Item>
                <img src={PaysageTwo} className="d-block w-100" alt="Test slide" />
                <Carousel.Caption>
                    <h3 className="Aboutus-title">TEST</h3>
                    <p className="Aboutus-desc">Lorem ipsum test hello</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={PaysageTwo} className="d-block w-100" alt="Test slide" />
                <Carousel.Caption>
                    <h3 className="Aboutus-title">TEST</h3>
                    <p className="Aboutus-desc">Lorem ipsum test hello</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default AboutUsSection;