//import logo from './logo.svg';
import './App.scss';

import React, {useState, useEffect} from 'react'

import Header from './Header'
import HeaderHamburgerNavigation from './HeaderHamburgerNavigation'
import AboutUsSection from './AboutUsSection'
import CommitmentSection from './CommitmentSection'
import {gsap, TimelineLite, Power1} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import trigger from '@web2033/trigger'
import {withGetScreen} from 'react-getscreen'

gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const [isHamburgerOpen, hamburgerHandler] = useState(false);

  let anim = new TimelineLite();

  useEffect(() => {
    anim.from('.Header', {y: -15, opacity: 0, ease: Power1.easeOut, delay: 0.3}, 'Start');
    anim.from('.Aboutus-title', {y: -15, opacity: 0, ease: Power1.easeOut, delay: 0.6}, 'Start')
    .from('.Aboutus-desc', {y: -15, opacity: 0, ease: Power1.easeOut})
    trigger({
      targets: '.Commitment-header',
      margin: '0px',
      action(node) {
        if (props.isMobile() || props.isTablet()) {
          gsap.from(node, {y: 45, opacity: 0, duration: 0.8, ease: Power1.easeOut})
        } else {
          gsap.from(node, {y: 45, opacity: 0, duration: 0.8, ease: Power1.easeOut, scrollTrigger: {toggleActions: "restart complete"}})
        }
      }
    })
    trigger({
      targets: '.Commitment-right',
      margin: '0px',
      action(node) {
        if (props.isMobile() || props.isTablet()) {
          gsap.from(node, {y: 30, opacity: 0, duration: 0.9, ease: Power1.easeOut})
        } else {
          gsap.from(node, {x: 60, opacity: 0, duration: 0.9, ease: Power1.easeOut, scrollTrigger: {toggleActions: "restart complete"}})
        }
      }
    })
    trigger({
      targets: '.Commitment-left',
      margin: '0px',
      action(node) {
        if (props.isMobile() || props.isTablet()) {
          gsap.from(node, {y: 30, opacity: 0, duration: 0.9, ease: Power1.easeOut})
        } else {
          gsap.from(node, {x: -60, opacity: 0, duration: 0.9, ease: Power1.easeOut, scrollTrigger: {toggleActions: "restart complete"}})
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <div className="Header">
        <Header isHamburgerOpen={isHamburgerOpen} hamburgerHandler={hamburgerHandler} />
        <HeaderHamburgerNavigation isHamburgerOpen={isHamburgerOpen} hamburgerHandler={hamburgerHandler} />
      </div>
      <div className="Body">
        <AboutUsSection />
        <CommitmentSection />
      </div>
    </div>
  );
}

export default withGetScreen(App, {mobileLimit: 780, tabletLimit: 1000, shouldListenOnResize: true});
