import './CommitmentBanner.scss';

import React from 'react'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {withGetScreen} from 'react-getscreen'

import Wood from './wood.jpg'

function CommitmentBanner(props) {
    const {ref, inView, entry} = useInView({
        threshold: 0.3
    })

    const getInitialValue = () => {
        if (props.isMobile()) {
            return { opacity: 0, y: 30 }
        } else {
            if (props.side === "Commitment-right") {
                return { opacity: 0, x: 50}
            } else {
                return { opacity: 0, x: -50}
            }
        }
    }

    const shouldStartAnimation = () => {
        const currentY = entry === undefined ? 0 : entry.boundingClientRect.y
        return !(!inView && currentY > 0)
    }

    const getAnimation = () => {
        if (shouldStartAnimation()) {
            if (props.isMobile()) {
                return { opacity: 1, y: 0 }
            } else {
                return { opacity: 1, x: 0 }
            }
        } else {
            return getInitialValue()
        }
    }
    
    return (
        <motion.div className={"Commitment-banner " + props.side} ref={ref} initial={getInitialValue()} animate={getAnimation()} transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}>
            <img src={Wood} alt="Wood" />
            <div className="Commitment-caption">
                <h3>Bois 100% belge</h3>
            </div>
        </motion.div>
    )
}

export default withGetScreen(CommitmentBanner, {mobileLimit: 780, tabletLimit: 1000, shouldListenOnResize: true});