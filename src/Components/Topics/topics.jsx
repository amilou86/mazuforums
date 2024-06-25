import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Topics = () => {
    const [rowData, setRowData] = useState([
        { Community: 'Education', Posts: 5, Latest: 'post title and date' },
        { Community: 'Energy', Posts: 5, Latest: 'post title and date' },
        { Community: 'Health', Posts: 5, Latest: 'post title and date' },
        { Community: 'Transport', Posts: 5, Latest: 'post title and date' },
    ]);

    const location = useLocation();
    const navigate = useNavigate();
    const fromBrowse = location.state?.from === 'browse';

    const [posts, setPosts] = useState([]); // State to store fetched posts data

    useEffect(() => {
        // Simulate fetching posts for the selected topic on component mount or topic change
        const selectedTopic = location.pathname.split('/')[2]; // Extract topic name from URL
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/posts/${selectedTopic}`); // Replace with actual API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const fetchedPosts = await response.json();
                setPosts(fetchedPosts); // Update state with fetched posts
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        if (selectedTopic) {
            fetchPosts();
        }
    }, [location.pathname]); // Re-run effect on pathname change

    const handleAddTopic = (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim(); // Trimmed title value
        if (!title) {
            alert('Please enter a topic title.'); // Show alert if title is empty
            return;
        }
        const newTopic = {
            Community: title, // Use trimmed title
            Posts: 0,
            Latest: 'No posts yet',
        };
        setRowData([...rowData, newTopic]);
        e.target.title.value = ''; // Clear input field after submission
    };

    const handleTopicClick = async (topicName) => {
        try {
            const response = await fetch(`/api/posts/${topicName}`); // Replace with actual API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const fetchedPosts = await response.json();
            navigate(`/topic/${topicName}`, { state: { posts: fetchedPosts } });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <div className='forum-table' style={{ width: '100%', height: '100%' }}>
            <h1>MazuForums Community Topics</h1>

            <div className="container-fluid">
                <form onSubmit={handleAddTopic} className="row g-3 align-items-center">
                    <div className="col-auto">
                        <input type="text" name="title" placeholder="New Topic Title" className="form-control form-control-lg" style={{ minWidth: '300px' }} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Create Topic</button>
                    </div>
                </form>

                <table className='table table-bordered table-hover table-responsive mt-3'>
                    <thead>
                        <tr>
                            <th style={{ width: '70%' }}>Community Topic</th>
                            <th style={{ width: '15%' }}>Posts</th>
                            <th style={{ width: '15%' }}>Latest</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowData.map((topic) => (
                            <tr key={topic.Community}>
                                <td>
                                    <Link to={`/topic/${topic.Community}`} onClick={() => handleTopicClick(topic.Community)}>
                                        {topic.Community}
                                    </Link>
                                </td>
                                <td>{topic.Posts}</td>
                                <td>{topic.Latest}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Topics;
