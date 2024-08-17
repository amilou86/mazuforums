// ReplyForm.jsx
import React, { useState } from 'react';

const ReplyForm = ({ onAddReply }) => {
    const [replyContent, setReplyContent] = useState('');

    const handleAddReply = (e) => {
        e.preventDefault();
        if (replyContent.trim() === '') {
            alert('Please enter a reply.');
            return;
        }

        onAddReply(replyContent.trim());
        setReplyContent('');
    };

    return (
        <form onSubmit={handleAddReply} className="add-reply-form">
            <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write your reply..."
                className="reply-input"
            />
            <button type="submit" className="btn btn-primary">Add Reply</button>
        </form>
    );
};

export default ReplyForm;
