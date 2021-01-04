import './HeaderLinks.scss';

import React, {Component} from 'react'

class HeaderLinks extends Component {
    render() {
        return (
            <ul className={"Header-links " + (this.props.isHorizontal ? 'Header-links-horizontal' : 'Header-links-vertical')}>
                <li>
                    <span>Qui sommes-nous ?</span>
                </li>
                <li>
                    <span>Nos engagements</span>
                </li>
                <li>
                    <span>Nos réalisations</span>
                </li>
                <li>
                    <span>Notre catalogue</span>
                </li>
                <li>
                    <span>Nous contacter</span>
                </li>
            </ul>
        );
    }
}

export default HeaderLinks;