import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

// Ensure backend has endpoints set up to handle GET /api/topics and POST /api/topics requests.

const Topics = ({ setPostsData }) => {
    const topicImages = {
        'Education': education,
        'Energy': energy,
        'Health': health,
        'Transport': topic1,
        'Human Rights': topic7,
        'Tourism': topic8,
        'Digital Rights': topic9,
        'Agriculture': topic5,
        'Economy': topic6,
        'Domestic Violence': topic4,
        'Water': topic2,
        'Child Abuse': topic8,
        'Child Defilement': topic2,
        'Marriages': topic3,
        'Info': topic5,
        'Data': topic8,
        'defaultImage': topic10,
    };

    const [rowData, setRowData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch topics from the backend on component mount
        const fetchTopics = async () => {
            try {
                const response = await axios.get('/api/topics');
                setRowData(response.data);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };

        fetchTopics();
    }, []);

    const handleAddTopic = async (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim();
        if (!title) {
            alert('Please enter a topic title.');
            return;
        }
        const image = topicImages[title] || topicImages['defaultImage'];
        const newTopic = {
            Community: title,
            Posts: 0,
            Latest: 'No posts yet',
            image: image,
        };

        try {
            // Send the new topic to the backend
            const response = await axios.post('/api/topics', newTopic);

            // Update local state with the new topic
            setRowData([...rowData, response.data]);
            e.target.title.value = '';

            // Update postsData in parent component using the setter function passed as prop
            const updatedPostsData = {
                ...rowData.reduce((acc, topic) => {
                    acc[topic.Community] = [];
                    return acc;
                }, {}),
                [title]: [],
            };
            setPostsData(updatedPostsData);
        } catch (error) {
            console.error('Error adding topic:', error);
        }
    };

    const handleTopicClick = (topicName) => {
        navigate(`/topic/${topicName}`);
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

                <div className="row topic-row">
                    {rowData.map((topic, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 topic-column">
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
