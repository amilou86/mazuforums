import React from 'react';
import { useParams } from 'react-router-dom';
import './TopicDiscussions.css';
const TopicDiscussions = () => {
    const { topicName } = useParams(); // Get the topic name from the URL params

    // Mock discussions data (replace this with actual data fetched from the backend)
    const discussions = [
        { id: 1, title: "Discussion 1", author: "User 1", date: "June 1, 2024", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, title: "Discussion 2", author: "User 2", date: "June 2, 2024", content: "Praesent ac odio eu felis ultrices fringilla nec non ante." },
        // Add more discussions here
    ];

    return (
        <div className="topic-discussions">
            <h1 className="topic-name">{topicName} Discussions</h1>
            <div className="discussion-list">
                {discussions.map(discussion => (
                    <div key={discussion.id} className="discussion">
                        <h2 className="discussion-title">{discussion.title}</h2>
                        <p className="discussion-info">Author: {discussion.author} | Date: {discussion.date}</p>
                        <p className="discussion-content">{discussion.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopicDiscussions;
