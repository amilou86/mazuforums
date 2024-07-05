import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetails.css';
import { FaHeart } from 'react-icons/fa';
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

    const handleLike = () => {
        const userId = "user123";
        if (post && !post.likedBy.includes(userId)) {
            const updatedPost = {
                ...post,
                likes: post.likes + 1,
                likedBy: [...post.likedBy, userId]
            };
            updatePostInContext(updatedPost);
        }
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
            date: new Date().toISOString().split('T')[0]
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

    return (
        <div className="post-details-container">
            <button onClick={handleBackToPosts} className="btn-custom-back">Back to Posts</button>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-content">{post.content}</p>
            <div className="post-date">Posted on {post.date}</div>
            <div className="post-likes">
                <button onClick={handleLike} className="btn-custom-like">
                    <FaHeart />
                </button>
                <span className="likes-count">{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
            </div>

            <h5>REPLIES</h5>
            <ul className="replies-list">
                {post.replies.map(reply => (
                    <li key={reply.id} className="reply-item">
                        <p className="reply-content">{reply.content}</p>
                        <div className="reply-date">Replied on {reply.date}</div>
                    </li>
                ))}
            </ul>

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
