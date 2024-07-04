import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './topics.css'; // Ensure correct CSS import path
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
        // Add a default image or handle the missing image case
        'defaultImage': topic10,
    };

    const [rowData, setRowData] = useState([
        { Community: 'Education', Posts: 0, Latest: 'post title and date', image: topicImages['Education'] },
        { Community: 'Energy', Posts: 5, Latest: 'post title and date', image: topicImages['Energy'] },
        { Community: 'Health', Posts: 55, Latest: 'post title and date', image: topicImages['Health'] },
        { Community: 'Transport', Posts: 5, Latest: 'post title and date', image: topicImages['Transport'] },
        { Community: 'Human Rights', Posts: 0, Latest: 'post title and date', image: topicImages['Human Rights'] },
        { Community: 'Tourism', Posts: 5, Latest: 'post title and date', image: topicImages['Tourism'] },
        { Community: 'Digital Rights', Posts: 500, Latest: 'post title and date', image: topicImages['Digital Rights'] },
        { Community: 'Agriculture', Posts: 5, Latest: 'post title and date', image: topicImages['Agriculture'] },
        { Community: 'Economy', Posts: 5, Latest: 'post title and date', image: topicImages['Economy'] },
    ]);

    const navigate = useNavigate();

    const handleAddTopic = (e) => {
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
        setRowData([...rowData, newTopic]);
        e.target.title.value = '';
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
