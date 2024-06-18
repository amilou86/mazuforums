import React from 'react'

const Subforum = ({ subforum }) => {
    return (
        <div className='subforum'>
            <h3>{Subforum.title}</h3>
            {/* below links to all discussions in subforum */}
            <a href={`/subforums/${subforum.title}`}>View Discussions</a>
        </div>
    );
}

export default Subforum