import React, { useState } from 'react';
import { FaSearch, FaRegNewspaper, FaImage, FaVideo, FaDownload } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import SearchKeyword from './SearchKeyword.jsx'; 
import { formatDateTimeInCAT } from '../../utils/dateUtils';

const CJPHero = () => {
    const [likes, setLikes] = useState({
        story: false,
        image: false,
        video: false,
    });
    const [comments, setComments] = useState({
        story: [],
        image: [],
        video: [],
    });
    const [newComment, setNewComment] = useState({
        story: '',
        image: '',
        video: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username] = useState('currentUsername'); // Placeholder username

    const handleLike = (type) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [type]: !prevLikes[type],
        }));
    };

    const handleCommentChange = (type, event) => {
        setNewComment({
            ...newComment,
            [type]: event.target.value,
        });
    };

    const handleCommentSubmit = (type) => {
        if (newComment[type].trim()) {
            const timestamp = new Date();
            setComments((prevComments) => ({
                ...prevComments,
                [type]: [
                    ...prevComments[type],
                    {
                        username,
                        commentText: newComment[type],
                        timestamp,
                    },
                ],
            }));
            setNewComment({
                ...newComment,
                [type]: '',
            });
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const currentTime = new Date(); // Example timestamp for demo purposes

    return (
        <div className="flex pt-16 h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/4 bg-[#E5E5E5] text-[#14213D] p-5">
                <h2 className="text-xl font-bold mb-8">Citizen Journalist Portal</h2>
                <ul className="space-y-4">
                    <li>
                        <button
                            onClick={openModal}
                            className="flex items-center space-x-3 p-3 bg-[#14213D] text-[#E5E5E5] rounded hover:bg-blue-800 w-full"
                        >
                            <FaSearch />
                            <span>Search by Keyword</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center space-x-3 p-3 bg-[#FCA311] rounded hover:bg-green-800 w-full">
                            <FaRegNewspaper />
                            <span>Share a Story</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center space-x-3 p-3 bg-[#B4AFAF] rounded hover:bg-purple-800 w-full">
                            <FaImage />
                            <span>Share an Image</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center space-x-3 p-3 bg-[#FFFFFF] rounded hover:bg-red-800 w-full">
                            <FaVideo />
                            <span>Share a Video</span>
                        </button>
                    </li>
                </ul>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-5 space-y-8 scrollbar-hidden">
                {/* Story Post */}
                <div className="bg-gradient-to-r from-[#FCA311] via-[#D62828] to-[#8338ec] p-[2px] rounded-lg">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h3 className="text-xl font-semibold">User Story Title</h3>
                        <p className="text-sm text-gray-500">by <strong>username123</strong></p>
                        <p className="mt-2 text-gray-700">
                            This is a sample story content. Users will upload stories, and they will be displayed here.
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                            Posted on {formatDateTimeInCAT(currentTime)}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={() => handleLike('story')}
                                className="flex items-center space-x-2 text-blue-500"
                            >
                                <FiThumbsUp className={likes.story ? 'text-blue-700' : ''} />
                                <span>{likes.story ? 'Unlike' : 'Like'} this post</span>
                            </button>
                            <button className="flex items-center space-x-2 text-blue-500">
                                <FaDownload />
                                <span>Download</span>
                            </button>
                        </div>
                        {/* Comments Section */}
                        <div className="mt-4">
                            <input
                                type="text"
                                value={newComment.story}
                                onChange={(e) => handleCommentChange('story', e)}
                                className="w-full p-2 border rounded"
                                placeholder="Add a comment..."
                            />
                            <button
                                onClick={() => handleCommentSubmit('story')}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Submit
                            </button>
                            <div className="mt-4">
                                {comments.story.map((comment, index) => (
                                    <div key={index} className="mb-2">
                                        <p className="text-sm text-black-600">{comment.commentText}</p>
                                        <p className="font-semibold text-xs text-gray-400">
                                            {comment.username} - {formatDateTimeInCAT(comment.timestamp)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Post */}
                <div className="bg-gradient-to-r from-[#FCA311] via-[#D62828] to-[#8338ec] p-[2px] rounded-lg">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h3 className="text-xl font-semibold">User Image Title</h3>
                        <p className="text-sm text-gray-500">by <strong>username456</strong></p>
                        <img
                            src="https://via.placeholder.com/600x300"
                            alt="User Uploaded"
                            className="mt-2 rounded"
                        />
                        <p className="text-xs text-gray-400 mt-2">
                            Posted on {formatDateTimeInCAT(currentTime)}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={() => handleLike('image')}
                                className="flex items-center space-x-2 text-blue-500"
                            >
                                <FiThumbsUp className={likes.image ? 'text-blue-700' : ''} />
                                <span>{likes.image ? 'Unlike' : 'Like'} this post</span>
                            </button>
                            <button className="flex items-center space-x-2 text-blue-500">
                                <FaDownload />
                                <span>Download</span>
                            </button>
                        </div>
                        {/* Comments Section */}
                        <div className="mt-4">
                            <input
                                type="text"
                                value={newComment.image}
                                onChange={(e) => handleCommentChange('image', e)}
                                className="w-full p-2 border rounded"
                                placeholder="Add a comment..."
                            />
                            <button
                                onClick={() => handleCommentSubmit('image')}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Submit
                            </button>
                            <div className="mt-4">
                                {comments.image.map((comment, index) => (
                                    <div key={index} className="mb-2">
                                        <p className="text-sm text-black-600">{comment.commentText}</p>
                                        <p className="font-semibold text-xs text-gray-400">
                                            {comment.username} - {formatDateTimeInCAT(comment.timestamp)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Post */}
                <div className="bg-gradient-to-r from-[#FCA311] via-[#D62828] to-[#8338ec] p-[2px] rounded-lg">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h3 className="text-xl font-semibold">User Video Title</h3>
                        <p className="text-sm text-gray-500">by <strong>username789</strong></p>
                        <video controls className="mt-2 w-full rounded">
                            <source src="https://via.placeholder.com/600x300.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="text-xs text-gray-400 mt-2">
                            Posted on {formatDateTimeInCAT(currentTime)}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={() => handleLike('video')}
                                className="flex items-center space-x-2 text-blue-500"
                            >
                                <FiThumbsUp className={likes.video ? 'text-blue-700' : ''} />
                                <span>{likes.video ? 'Unlike' : 'Like'} this post</span>
                            </button>
                            <button className="flex items-center space-x-2 text-blue-500">
                                <FaDownload />
                                <span>Download</span>
                            </button>
                        </div>
                        {/* Comments Section */}
                        <div className="mt-4">
                            <input
                                type="text"
                                value={newComment.video}
                                onChange={(e) => handleCommentChange('video', e)}
                                className="w-full p-2 border rounded"
                                placeholder="Add a comment..."
                            />
                            <button
                                onClick={() => handleCommentSubmit('video')}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Submit
                            </button>
                            <div className="mt-4">
                                {comments.video.map((comment, index) => (
                                    <div key={index} className="mb-2">
                                        <p className="text-sm text-black-600">{comment.commentText}</p>
                                        <p className="font-semibold text-xs text-gray-400">
                                            {comment.username} - {formatDateTimeInCAT(comment.timestamp)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal for Search by Keyword */}
            {isModalOpen && <SearchKeyword isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
        </div>
    );
};

export default CJPHero;
