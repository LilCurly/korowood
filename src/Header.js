import logo from './logo.svg';
import './Header.css'

import {React, Component} from 'react'
import {Divide as Hamburger} from 'hamburger-react'
import {withGetScreen} from 'react-getscreen'

import HeaderLinks from './HeaderLinks'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="App-header">
                <div className="Header-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="Header-right">
                    {
                        this.props.isMobile() ?
                        <Hamburger className="Header-hamburger" toggled={this.props.isHamburgerOpen} toggle={this.props.hamburgerHandler} /> :
                        <HeaderLinks isHorizontal={true} />
                    }
                </div>
            </div>
        );
    }
}

export default withGetScreen(Header, {mobileLimit: 780, tabletLimit: 1000, shouldListenOnResize: true})