import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './topics.css';
import topic1 from '../../../assets/topic1.png';
import topic2 from '../../../assets/topic2.png';
import topic3 from '../../../assets/topic3.png';
import topic4 from '../../../assets/topic4.png';
import topic5 from '../../../assets/topic5.png';
import topic6 from '../../../assets/topic6.png';
import topic7 from '../../../assets/topic7.png';
import topic8 from '../../../assets/topic8.png';
import topic9 from '../../../assets/topic9.png';
import topic10 from '../../../assets/topic10.png';
import health from '../../../assets/health.png'
import education from '../../../assets/education.png';
import energy from '../../../assets/energy.png';

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
        { Community: 'Domestic and Gender Violence', Posts: 5, Latest: 'post title and date', image: topicImages['Domestic Violence'] },
        { Community: 'Child Abuse', Posts: 5, Latest: 'post title and date', image: topicImages['Education'] },
        { Community: 'Child Defilement', Posts: 5, Latest: 'post title and date', image: topicImages['Child Defilement'] },
        { Community: 'Online Abuse & Grooming', Posts: 5, Latest: 'post title and date', image: topicImages['Health'] },
        { Community: 'Early Marriages', Posts: 5, Latest: 'post title and date', image: topicImages['Marriages'] },
        { Community: 'Access to Information', Posts: 5, Latest: 'post title and date', image: topicImages['Info'] },
        { Community: 'Data Protection', Posts: 5, Latest: 'post title and date', image: topicImages['Data'] },
    ]);

    const navigate = useNavigate();

    const handleTopicClick = (topicName) => {
        console.log('Navigating to:', topicName);
        navigate(`/topic/${topicName}`);
    };

    return (
        <div className="logo text-4xl font-bold mt-40 text-center" style={{ fontFamily: "Outfit, sans-serif", color: "#023e8a" }}>
            <h1>MAZUFORUMS Community Topics</h1>

            <div className="container-fluid mt-10">
                <div className="row topic-row mt-10">
                    {rowData.map((topic, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 topic-column">
                            <div
                                className="card"
                                style={{
                                    backgroundImage: `url(${topic.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleTopicClick(topic.Community)}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">{topic.Community}</h5>
                                    <p className="card-text">Posts: {topic.Posts}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topics;
