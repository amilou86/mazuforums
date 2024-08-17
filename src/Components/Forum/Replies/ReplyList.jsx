import React from 'react';
import ReplyItem from './ReplyItem';

const ReplyList = ({ replies = [], handleReplyReaction }) => {
    return (
        <ul className="replies-list">
            {replies.length > 0 ? (
                replies.map(reply => (
                    <ReplyItem key={reply.id} reply={reply} handleReplyReaction={handleReplyReaction} />
                ))
            ) : (
                <p>No replies yet.</p>
            )}
        </ul>
    );
};

export default ReplyList;
