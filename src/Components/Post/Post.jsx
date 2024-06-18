import React from 'react'

const Post = ({ content, replyCount }) => {
    return (
        <div className="post">
            <p>{content}</p>
            <p>Replies: {replyCount}</p>
            {/* Add other post details here (optional) */}
        </div>

    );
};

export default Post;
