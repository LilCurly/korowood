import './CommitmentBanner.scss';

import {Component} from 'react'

import Wood from './wood.jpg'

class CommitmentBanner extends Component {
    render() {
        return (
            <div className={"Commitment-banner " + this.props.side}>
                <img src={Wood} alt="Wood" />
                <div className="Commitment-caption">
                    <h3>Bois 100% belge</h3>
                </div>
            </div>
        );
    }
}

export default CommitmentBanner;