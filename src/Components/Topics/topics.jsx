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
        <div className='forum-table' style={{ width: '100%', height: '100%' }}>
            <h1>MazuForums Community Topics</h1>
            <div className="container-fluid">
                <table className='table table-bordered table-hover table-responsive'>
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
                                    <Link to={`/topic/${topic.Community}`}>
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

            <form onSubmit={handleAddTopic} className="mt-3">
                <input type="text" name="title" placeholder="New Topic Title" className="form-control" />
                <button type="submit" className="btn btn-primary mt-2">Create Topic</button>
            </form>
        </div>
    );
};

export default Topics;
