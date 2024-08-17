import React from 'react';
import { FaThumbsUp, FaHeart, FaRegLaugh, FaSadTear, FaThumbsDown } from 'react-icons/fa';

const ReplyItem = ({ reply, handleReplyReaction }) => {
    const renderReactions = (reactions = {}) => {
        const reactionCounts = { like: 0, love: 0, laugh: 0, sad: 0, dislike: 0 };

        Object.values(reactions).forEach(reaction => {
            if (reactionCounts[reaction] !== undefined) {
                reactionCounts[reaction]++;
            }
        });

        return (
            <div className="reactions-summary">
                {reactionCounts.like > 0 && <span className="reaction-count"><FaThumbsUp /> {reactionCounts.like}</span>}
                {reactionCounts.love > 0 && <span className="reaction-count"><FaHeart /> {reactionCounts.love}</span>}
                {reactionCounts.laugh > 0 && <span className="reaction-count"><FaRegLaugh /> {reactionCounts.laugh}</span>}
                {reactionCounts.sad > 0 && <span className="reaction-count"><FaSadTear /> {reactionCounts.sad}</span>}
                {reactionCounts.dislike > 0 && <span className="reaction-count"><FaThumbsDown /> {reactionCounts.dislike}</span>}
            </div>
        );
    };

    return (
        <li className="reply-item">
            <p className="reply-content">{reply.content}</p>
            <div className="reply-date">Replied on {reply.date}</div>
            <div className="reply-reactions">
                <button onClick={() => handleReplyReaction(reply.id, 'like')}><FaThumbsUp /></button>
                <button onClick={() => handleReplyReaction(reply.id, 'love')}><FaHeart /></button>
                <button onClick={() => handleReplyReaction(reply.id, 'laugh')}><FaRegLaugh /></button>
                <button onClick={() => handleReplyReaction(reply.id, 'sad')}><FaSadTear /></button>
                <button onClick={() => handleReplyReaction(reply.id, 'dislike')}><FaThumbsDown /></button>
            </div>
            {renderReactions(reply.reactions)}
        </li>
    );
};

export default ReplyItem;
