import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './topics.css';
import topic1 from '../../assets/topic1.png';
import topic2 from '../../assets/topic2.png';
import topic3 from '../../assets/topic3.png';
import topic4 from '../../assets/topic4.png';
import topic5 from '../../assets/topic5.png';
import topic6 from '../../assets/topic6.png';
import topic7 from '../../assets/topic7.png';
import topic8 from '../../assets/topic8.png';
import topic9 from '../../assets/topic9.png';
import topic10 from '../../assets/topic10.png';
import health from '../../assets/health.png';
import education from '../../assets/education.png';
import energy from '../../assets/energy.png';

const Topics = () => {
    const topicImages = [
        topic1,
        topic2,
        topic3,
        topic4,
        topic5,
        topic6,
        topic7,
        topic8,
        topic9,
        topic10,
        health,
        education,
        energy
    ];

    const [usedImages, setUsedImages] = useState([]);
    const [rowData, setRowData] = useState([
        { Community: 'Education', Posts: 25, image: null },
        { Community: 'Energy', Posts: 5, image: null },
        { Community: 'Health', Posts: 55, image: null },
        { Community: 'Transport', Posts: 5, image: null },
    ]);

    const getRandomImage = () => {
        if (usedImages.length >= topicImages.length) {
            setUsedImages([]);
        }
        let availableImages = topicImages.filter(img => !usedImages.includes(img));
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        const selectedImage = availableImages[randomIndex];
        setUsedImages([...usedImages, selectedImage]);
        return selectedImage;
    };

    useEffect(() => {
        setRowData(prevRowData => prevRowData.map(topic => ({
            ...topic,
            image: topic.image || getRandomImage(),
        })));
    }, []);

    const navigate = useNavigate();

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
            image: getRandomImage(), // Assign randomly selected image
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
        <div className='forum-table'>
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

                <div className="row">
                    {rowData.map((topic, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{ backgroundImage: `url(${topic.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <Link to={`/topic/${topic.Community}`} onClick={() => handleTopicClick(topic.Community)}>
                                    <div className="card-body">
                                        <h5 className="card-title">{topic.Community}</h5>
                                        <p className="card-text">Posts: {topic.Posts}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topics;