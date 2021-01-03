import logo from './logo.svg';
import './Header.css'

import {React, Component} from 'react'
import {Divide as Hamburger} from 'hamburger-react'
import {withGetScreen} from 'react-getscreen'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburgerToggled: false
        };
    }

    render() {
        const toggleHamburger = () => {
            this.setState({
                hamburgerToggled: !this.state.hamburgerToggled
            })
        }

        return(
            <div className="App-header">
                <div className="Header-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="Header-links">
                    {
                        this.props.isMobile() ?
                        <Hamburger toggled={this.state.hamburgerToggled} toggle={toggleHamburger} /> :
                        <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default withGetScreen(Header)