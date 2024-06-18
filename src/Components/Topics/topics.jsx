import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Topics = () => {
    const [rowData, setRowData] = useState([
        { Community: 'Education', Posts: 5, Latest: 'post title and date' },
        { Community: 'Energy', Posts: 5, Latest: 'post title and date' },
        { Community: 'Health', Posts: 5, Latest: 'post title and date' },
        { Community: 'Transport', Posts: 5, Latest: 'post title and date' },
    ]);

    const handleAddTopic = (e) => {
        e.preventDefault();
        const newTopic = {
            Community: e.target.title.value,
            Posts: 0,
            Latest: 'No posts yet',
        };
        setRowData([...rowData, newTopic]);
    };

    return (
        <div className='forum-table' style={{ width: '100 % ', height: '100 % ' }} >
            <h1>MazuForums Community Topics</h1>
            <table>
                <thead>
                    <tr>
                        <th>Community Topic</th>
                        <th>Posts</th>
                        <th>Latest</th>
                    </tr>
                </thead>
                <tbody>
                    {rowData.map((topic) => (
                        <tr key={topic.Community}>
                            <td>{topic.Community}</td>
                            <td>{topic.Posts}</td>
                            <td>{topic.Latest}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul>
                {/* You can keep the topic list if needed */}
                {/* {mockTopics.map((topic) => (
          <li key={topic.title}>
            <Link to={`/forum/${topic.title}`}>{topic.title}</Link>
          </li>
        ))} */}
            </ul>

            <form onSubmit={handleAddTopic}>
                <input type="text" name="title" placeholder="New Topic Title" />
                <button type="submit">Create Topic</button>
            </form>
        </div >
    );
};

export default Topics;
