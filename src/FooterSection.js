import './FooterSection.scss'
import {ReactComponent as ContactSvg} from './contact.svg'
import {ReactComponent as EmailSvg} from './email.svg'
import {ReactComponent as PhoneSvg} from './phone.svg'

import React from 'react'

function FooterSection() {
    return (
        <div className="footerSectionContainer">
            <div className="footerSocialLinks">
                <ul> 
                    <li>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-facebook"></span>
                        </a> 
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-twitter"></span>
                        </a> 
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-instagram"></span>
                        </a> 
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-linkedin"></span>
                        </a> 
                    </li>
                </ul>
            </div>
            <div className="footerContactUs">
                <div className="footerContactUsTitle">
                    N'attendez plus, contactez nous! <ContactSvg className="contactSvg" />
                </div>
                <div className="footerContactUsInfo">
                    <div><EmailSvg className="contactIco" /> lilcurly@github.com</div>
                    <div><PhoneSvg className="contactIco" /> +324 69 69 69 69</div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;