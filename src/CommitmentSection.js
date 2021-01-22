import './CommitmentSection.scss';

import React from 'react'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {withGetScreen} from 'react-getscreen'

import CommitmentBanner from './CommitmentBanner'

function CommitmentSection(props) {

    const {ref, inView, entry} = useInView({
        triggerOnce: false,
        threshold: 0.3
    })

    const shouldStartAnimation = () => {
        const currentY = entry === undefined ? 0 : entry.boundingClientRect.y
        return !(!inView && currentY > 0)
    }

    const getAnimation = () => {
        if (shouldStartAnimation()) {
            return { opacity: 1, y: 0}
        } else {
            return { opacity: 0, y: 40}
        }
    }

    const getStyle = () => {
        if (props.isMobile()) {
            return {paddingBottom: '0px'}
        }
    }

    return (
        <div className="Commitment-section" style={getStyle()}>
            <motion.div className="Commitment-header" ref={ref} initial={{ opacity: 0, y: 40}} animate={getAnimation()} transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}>
                <h2>Nos Engagements</h2>
            </motion.div>
            <div className="Commitment-container">
                <CommitmentBanner side={"Commitment-right"} />
                <CommitmentBanner side={"Commitment-left"} />
                <CommitmentBanner side={"Commitment-right"} />
            </div>
        </div>
    );
}

export default withGetScreen(CommitmentSection, {mobileLimit: 1000, tabletLimit: 1000, shouldListenOnResize: true});