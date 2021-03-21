import './CreationSection.scss'
import PergolaThree from './pergola3.jpg'
import PergolaFour from './pergola4.jpg'
import PergolaSeven from './pergola7.jpg'

import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {withGetScreen} from 'react-getscreen'

function CreationSection(props) {

    const {ref, inView, entry} = useInView({
        triggerOnce: false,
        threshold: 0.3
    })

    const getInitialValueHeader = () => {
        if (props.isMobile()) {
            return { opacity: 0, y: 30 }
        } else {
            return { opacity: 1, y: 0, color: "#262626", scale: 0.9 }
        }
    }

    const getInitialValueCarousel = () => {
        if (props.isMobile()) {
            return { opacity: 0, y: 30 }
        } else {
            return { opacity: 0, y: 300 }
        }
    }

    const shouldStartAnimation = () => {
        const currentY = entry === undefined ? 0 : entry.boundingClientRect.y
        return !(!inView && currentY > 0)
    }

    const getAnimationHeader = () => {
        if (shouldStartAnimation()) {
            if (props.isMobile()) {
                return { opacity: 1, y: 0 }
            } else {
                return { opacity: 1, y: 30, color: "#ebe8e8", scale: 1.2 }
            }
        } else {
            return getInitialValueHeader()
        }
    }

    const getAnimationCarousel = () => {
        if (shouldStartAnimation()) {
            if (props.isMobile()) {
                return { opacity: 1, y: 0 }
            } else {
                return { opacity: 1, y: 0 }
            }
        } else {
            return getInitialValueCarousel()
        }
    }

    const getTransitionHeader = () => {
        if (props.isMobile()) {
            return {duration: 0.8, ease: "easeOut", delay: 0.1}
        } else {
            return {duration: 1.5, ease: "easeOut", delay: 0.1}
        }
    }

    const getTransitionCarousel = () => {
        if (props.isMobile()) {
            return {duration: 1.3, ease: "easeOut", delay: 0.1}
        } else {
            return {duration: 1.5, ease: "easeOut", delay: 0.1}
        }
    }

    const getStyle = () => {
        if (props.isMobile()) {
            return {borderTop: '2px solid #262626', borderBottom: '2px solid #262626'}
        }
    }

    const [activeClass, toggleClass] = useState(true)

    return(
        <div className="CreationSection">
            <motion.div ref={ref} className="CreationSection-Header" initial={getInitialValueHeader()} animate={getAnimationHeader()} transition={getTransitionHeader()}>
                <h2 style={getStyle()}>Nos Réalisations</h2>
            </motion.div>
            <motion.div className="CreationSection-Carousel" initial={getInitialValueCarousel()} animate={getAnimationCarousel()} transition={getTransitionCarousel()}>
                <Carousel onSelect={() => {
                    toggleClass(false)
                }} onSlid={() => {
                    toggleClass(true)
                }}>
                    <Carousel.Item>
                        <img src={PergolaThree} className={activeClass && inView ? 'Zoom-Animation' : 'Zoom-Reset'} alt="Test slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={PergolaFour} className={activeClass && inView ? 'Zoom-Animation' : 'Zoom-Reset'} alt="Test slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={PergolaSeven} className={activeClass && inView ? 'Zoom-Animation' : 'Zoom-Reset'} alt="Test slide" />
                    </Carousel.Item>
                </Carousel>
            </motion.div>
        </div>
    )
}

export default withGetScreen(CreationSection, {mobileLimit: 1000, tabletLimit: 1000, shouldListenOnResize: true});