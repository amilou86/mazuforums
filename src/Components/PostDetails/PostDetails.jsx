import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetails.css';
import { FaThumbsUp, FaHeart, FaRegLaugh, FaSadTear, FaThumbsDown } from 'react-icons/fa';
import { usePosts } from '../Context/PostContext';

const PostDetails = () => {
    const { topicName, postId } = useParams();
    const navigate = useNavigate();
    const { postsData, setPostsData } = usePosts();
    const [post, setPost] = useState(null);
    const [newReplyContent, setNewReplyContent] = useState('');

    useEffect(() => {
        const topicPosts = postsData[topicName] || [];
        const selectedPost = topicPosts.find(p => p.id === parseInt(postId));
        setPost(selectedPost);
    }, [topicName, postId, postsData]);

    const handleReaction = (type) => {
        const userId = "user123"; // Example user ID

        // Check if the user has already reacted with a different emoji
        if (post.reactions[userId] && post.reactions[userId] !== type) {
            const updatedReactions = { ...post.reactions, [userId]: type };
            const updatedPost = { ...post, reactions: updatedReactions };
            updatePostInContext(updatedPost);
        } else if (!post.reactions[userId]) { // If user has not reacted before
            const updatedReactions = { ...post.reactions, [userId]: type };
            const updatedPost = { ...post, reactions: updatedReactions };
            updatePostInContext(updatedPost);
        }
    };

    const handleReplyReaction = (replyId, type) => {
        const userId = "user123"; // Example user ID
        const updatedReplies = post.replies.map(reply => {
            if (reply.id === replyId) {
                // Check if the user has already reacted with a different emoji
                if (reply.reactions[userId] && reply.reactions[userId] !== type) {
                    const updatedReactions = { ...reply.reactions, [userId]: type };
                    return { ...reply, reactions: updatedReactions };
                } else if (!reply.reactions[userId]) { // If user has not reacted before
                    const updatedReactions = { ...reply.reactions, [userId]: type };
                    return { ...reply, reactions: updatedReactions };
                }
            }
            return reply;
        });

        const updatedPost = { ...post, replies: updatedReplies };
        updatePostInContext(updatedPost);
    };

    const handleAddReply = (e) => {
        e.preventDefault();
        if (newReplyContent.trim() === '') {
            alert('Please enter a reply.');
            return;
        }
        const newReply = {
            id: post.replies.length + 1,
            content: newReplyContent.trim(),
            date: new Date().toISOString().split('T')[0],
            reactions: {}
        };
        const updatedPost = {
            ...post,
            replies: [...post.replies, newReply]
        };
        updatePostInContext(updatedPost);
        setNewReplyContent('');
    };

    const updatePostInContext = (updatedPost) => {
        const updatedPosts = postsData[topicName].map(p => {
            if (p.id === updatedPost.id) {
                return updatedPost;
            }
            return p;
        });
        setPostsData({
            ...postsData,
            [topicName]: updatedPosts
        });
        setPost(updatedPost);
    };

    const handleBackToPosts = () => {
        navigate(`/topic/${topicName}`);
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    const renderReactions = (reactions) => {
        const reactionCounts = {
            like: 0,
            love: 0,
            laugh: 0,
            sad: 0,
            dislike: 0
        };

        Object.values(reactions).forEach(reaction => {
            if (reactionCounts[reaction] !== undefined) {
                reactionCounts[reaction]++;
            }
        });

        return (
            <div className="reactions-summary">
                {reactionCounts.like > 0 && <span className="reaction-count"><FaThumbsUp color="#3b5998" /> {reactionCounts.like}</span>}
                {reactionCounts.love > 0 && <span className="reaction-count"><FaHeart color="#e74c3c" /> {reactionCounts.love}</span>}
                {reactionCounts.laugh > 0 && <span className="reaction-count"><FaRegLaugh color="#f7b731" /> {reactionCounts.laugh}</span>}
                {reactionCounts.sad > 0 && <span className="reaction-count"><FaSadTear color="#6c757d" /> {reactionCounts.sad}</span>}
                {reactionCounts.dislike > 0 && <span className="reaction-count"><FaThumbsDown color="#343a40" /> {reactionCounts.dislike}</span>}
            </div>
        );
    };

    return (
        <div className="post-details-container">
            <button onClick={handleBackToPosts} className="btn-custom-back">Back to Posts</button>
            <div className="post-section">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-content">{post.content}</p>
                <div className="post-date">Posted on {post.date}</div>
                <div className="post-reactions">
                    <button onClick={() => handleReaction('like')} className={`btn-custom-reaction ${post.reactions["user123"] === 'like' ? 'selected' : ''}`}><FaThumbsUp color="#3b5998" /></button>
                    <button onClick={() => handleReaction('love')} className={`btn-custom-reaction ${post.reactions["user123"] === 'love' ? 'selected' : ''}`}><FaHeart color="#e74c3c" /></button>
                    <button onClick={() => handleReaction('laugh')} className={`btn-custom-reaction ${post.reactions["user123"] === 'laugh' ? 'selected' : ''}`}><FaRegLaugh color="#f7b731" /></button>
                    <button onClick={() => handleReaction('sad')} className={`btn-custom-reaction ${post.reactions["user123"] === 'sad' ? 'selected' : ''}`}><FaSadTear color="#6c757d" /></button>
                    <button onClick={() => handleReaction('dislike')} className={`btn-custom-reaction ${post.reactions["user123"] === 'dislike' ? 'selected' : ''}`}><FaThumbsDown color="#343a40" /></button>
                </div>
                {renderReactions(post.reactions)}
            </div>

            <h5 className="replies-heading">REPLIES</h5>
            <div className="replies-section">
                <ul className="replies-list">
                    {post.replies.map(reply => (
                        <li key={reply.id} className="reply-item">
                            <p className="reply-content">{reply.content}</p>
                            <div className="reply-date">Replied on {reply.date}</div>
                            <div className="reply-reactions">
                                <button onClick={() => handleReplyReaction(reply.id, 'like')} className={`btn-custom-reaction ${reply.reactions["user123"] === 'like' ? 'selected' : ''}`}><FaThumbsUp color="#3b5998" /></button>
                                <button onClick={() => handleReplyReaction(reply.id, 'love')} className={`btn-custom-reaction ${reply.reactions["user123"] === 'love' ? 'selected' : ''}`}><FaHeart color="#e74c3c" /></button>
                                <button onClick={() => handleReplyReaction(reply.id, 'laugh')} className={`btn-custom-reaction ${reply.reactions["user123"] === 'laugh' ? 'selected' : ''}`}><FaRegLaugh color="#f7b731" /></button>
                                <button onClick={() => handleReplyReaction(reply.id, 'sad')} className={`btn-custom-reaction ${reply.reactions["user123"] === 'sad' ? 'selected' : ''}`}><FaSadTear color="#6c757d" /></button>
                                <button onClick={() => handleReplyReaction(reply.id, 'dislike')} className={`btn-custom-reaction ${reply.reactions["user123"] === 'dislike' ? 'selected' : ''}`}><FaThumbsDown color="#343a40" /></button>
                            </div>
                            {renderReactions(reply.reactions)}
                        </li>
                    ))}
                </ul>
            </div>

            <form onSubmit={handleAddReply} className="add-reply-form">
                <textarea
                    value={newReplyContent}
                    onChange={(e) => setNewReplyContent(e.target.value)}
                    placeholder="Write your reply..."
                    className="reply-input"
                />
                <button type="submit" className="btn btn-primary">Add Reply</button>
            </form>
        </div>
    );
};

export default PostDetails;
