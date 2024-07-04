import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetails.css'; // Import your CSS file
import { FaHeart } from 'react-icons/fa';

const PostDetails = () => {
    const { topicName, postId } = useParams();
    const navigate = useNavigate();

    // Dummy data for different topics and posts
    const dummyPosts = {
        Education: [
            {
                id: 1,
                title: 'New Books',
                content: "Our children's schools need new text books, are they going to be replaced soon?",
                date: '2023-01-01',
                replies: [
                    { id: 1, content: 'This is very important!', date: '2023-01-02' },
                    { id: 2, content: 'Agreed!', date: '2023-01-03' }
                ],
                likes: 5,
                likedBy: ['user1', 'user2']
            },
            // Add more posts for Education
        ],
        Health: [
            {
                id: 1,
                title: 'Hospital Beds',
                content: 'There are not enough beds in the hospitals, we urgently need more.',
                date: '2023-02-01',
                replies: [
                    { id: 1, content: 'We also need the sheets and pillows replaced more often.', date: '2023-02-02' },
                ],
                likes: 3,
                likedBy: ['user3']
            },
            {
                id: 2,
                title: 'Appointment waiting times',
                content: "There are not enough appointments available in a reasonable time, we need access to medical treatment without a long wait.",
                date: '2024-06-26',
                replies: [
                    { id: 1, content: "I agree, we need more doctors and nurses so we can be treated when we need it", date: '2024-06-30' }
                ],
                likes: 5,
                likedBy: ['user5']
            }
        ],
        // Add more topics with their posts here
    };

    // State for the selected post
    const [post, setPost] = useState(null);

    // State for new reply content
    const [newReplyContent, setNewReplyContent] = useState('');

    useEffect(() => {
        // Replace this with an API call to fetch the specific post details
        const topicPosts = dummyPosts[topicName] || [];
        const selectedPost = topicPosts.find(p => p.id === parseInt(postId));
        setPost(selectedPost);
    }, [topicName, postId]);

    // Function to handle liking a post
    const handleLike = () => {
        const userId = "user123";
        if (post && !post.likedBy.includes(userId)) {
            const updatedPost = {
                ...post,
                likes: post.likes + 1,
                likedBy: [...post.likedBy, userId]
            };
            // Update the post in the state
            setPost(updatedPost);
            // Update the post in the dummy data (for simulation)
            const updatedPosts = dummyPosts[topicName].map(p => {
                if (p.id === post.id) {
                    return updatedPost;
                }
                return p;
            });
            // Update the dummy data
            dummyPosts[topicName] = updatedPosts;
        }
    };

    // Function to handle adding a reply
    const handleAddReply = () => {
        if (newReplyContent.trim() === '') {
            alert('Please enter a reply.');
            return;
        }
        const userId = "user123";
        const newReply = {
            id: post.replies.length + 1,
            content: newReplyContent.trim(),
            date: new Date().toISOString().split('T')[0] // Today's date
        };
        const updatedPost = {
            ...post,
            replies: [...post.replies, newReply]
        };
        // Update the post in the state
        setPost(updatedPost);
        // Update the post in the dummy data (for simulation)
        const updatedPosts = dummyPosts[topicName].map(p => {
            if (p.id === post.id) {
                return updatedPost;
            }
            return p;
        });
        // Update the dummy data
        dummyPosts[topicName] = updatedPosts;

        // Clear the new reply content
        setNewReplyContent('');
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

            {/* Display replies */}
            <h5>REPLIES</h5>
            <ul className="replies-list">
                {post.replies.map(reply => (
                    <li key={reply.id} className="reply-item">
                        <p className="reply-content">{reply.content}</p>
                        <div className="reply-date">Replied on {reply.date}</div>
                    </li>
                ))}
            </ul>

            {/* Add reply form */}
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
