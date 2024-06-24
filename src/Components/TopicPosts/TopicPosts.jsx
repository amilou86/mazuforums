import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TopicPosts.css';
import { FaHeart } from 'react-icons/fa';
import CreatePostModal from '../CreatePostModal/CreatePostModal';

const TopicPosts = () => {
    const { topicName } = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([
        { id: 1, title: "New Books", content: "My daughter's primary school needs new books, the current ones are old and out of date. When will they be replaced?", date: new Date().toLocaleString(), replies: [], likes: 0, likedBy: [] },
        { id: 2, title: "School Meals", content: "My son's high school serves very unhealthy meals, we need the menu to include healthier options", date: new Date().toLocaleString(), replies: [], likes: 0, likedBy: [] },
    ]);

    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handlePostSubmit = (newPostData) => {
        setPosts([...posts, newPostData]);
        setShowModal(false); // Close modal after submitting post
    };

    const handleReplySubmit = (e, postId) => {
        e.preventDefault();
        const replyContent = e.target.elements.replyContent.value;
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                const newReply = { content: replyContent, date: new Date().toLocaleString() };
                return { ...post, replies: [...post.replies, newReply] };
            }
            return post;
        });
        setPosts(updatedPosts);
        e.target.elements.replyContent.value = '';
    };

    const handleLike = (postId) => {
        const userId = "user123"; // Replace this with actual user ID from authentication context or state

        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                if (!post.likedBy.includes(userId)) {
                    return {
                        ...post,
                        likes: post.likes + 1,
                        likedBy: [...post.likedBy, userId]
                    };
                }
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleBackToTopics = () => {
        navigate('/topics');
    };

    const handleClickCreatePost = () => {
        setShowModal((prevShowModal) => !prevShowModal); // Toggle modal visibility
    };

    return (
        <div>
            <h1>{topicName} Discussions</h1>
            <div className="d-flex justify-content-between mb-3">
                <button onClick={handleBackToTopics} className="btn-custom-back">Back to Topics</button>
                <button onClick={handleClickCreatePost} className="btn-custom-create">Create New Post</button>
            </div>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                        <div className="post-date">Posted on {post.date}</div>
                        <ul>
                            {post.replies.map((reply, index) => (
                                <li key={index} className="reply-item">
                                    <p className="reply-content">{reply.content}</p>
                                    <div className="reply-date">Replied on {reply.date}</div>
                                </li>
                            ))}
                        </ul>
                        <div className="post-likes">
                            <button onClick={() => handleLike(post.id)} className="btn-custom-like">
                                <FaHeart /> {/* Using the FaHeart icon */}
                            </button>
                            <span className="likes-count">{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
                        </div>
                        <form onSubmit={(e) => handleReplySubmit(e, post.id)} className="reply-form">
                            <input type="text" name="replyContent" placeholder="Reply to this post" className="form-control" />
                            <button type="submit" className="btn-custom-reply mt-2">Reply</button>
                        </form>
                    </li>
                ))}
            </ul>

            {showModal && (
                <CreatePostModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSubmit={handlePostSubmit}
                />
            )}
        </div>
    );
};

export default TopicPosts;
