import './HeaderHamburgerNavigation.scss';

import React, {Component} from 'react'
import HeaderLinks from './HeaderLinks.js'

class HeaderHamburgerNavigation extends Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div className={"Navigation-container " + (this.props.isHamburgerOpen ? 'Container-visible': 'Container-invisible')}>
                <HeaderLinks isHorizontal={false} />
            </div>
        );
    }
}

export default HeaderHamburgerNavigation;