import React from 'react'
import { useParams } from 'react-router-dom'

const DiscussionView = () => {
    const { subforumTitle } = useParams();

    return (
        <div className='discussion-view'>
            <h2>Discussions for {subforumTitle}</h2>
            {/* discussions rendered here */}
        </div>
    );
};

export default DiscussionView