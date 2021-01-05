import './AboutUsSection.scss';
import PaysageOne from './paysage1.jpg'
import PaysageTwo from './paysage2.jpg'

import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'

class AboutUsSection extends Component {
    render() {
        return(
                <Carousel>
                    <Carousel.Item>
                        <img src={PaysageTwo} className="d-block w-100" alt="Test slide" />
                        <Carousel.Caption>
                            <h3>TEST</h3>
                            <p>Lorem ipsum test hello</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={PaysageTwo} className="d-block w-100" alt="Test slide" />
                        <Carousel.Caption>
                            <h3>TEST</h3>
                            <p>Lorem ipsum test hello</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        );
    }
}

export default AboutUsSection;