import './CommitmentSection.scss';

import React from 'react'

import CommitmentBanner from './CommitmentBanner'

function CommitmentSection() {
    return (
        <div className="Commitment-section">
            <div className="Commitment-header">
                <h2>Nos Engagements</h2>
            </div>
            <div className="Commitment-container">
                <CommitmentBanner side={"Commitment-right"} />
                <CommitmentBanner side={"Commitment-left"} />
                <CommitmentBanner side={"Commitment-right"} />
            </div>
        </div>
    );
}

export default CommitmentSection;