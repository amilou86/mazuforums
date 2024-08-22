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
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const [comments, setComments] = useState({
        story: [],
        image: [],
        video: [],
    });
    const [newComment, setNewComment] = useState('');
    const [activePost, setActivePost] = useState(null); // State to manage which post is being commented on

    const handleLike = (type) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [type]: !prevLikes[type],
        }));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleCommentChange = (e) => setNewComment(e.target.value);

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            setComments((prevComments) => ({
                ...prevComments,
                [activePost]: [...prevComments[activePost], newComment],
            }));
            setNewComment('');
        }
    };

    const currentTime = new Date(); // Example timestamp for demo purposes

    return (
        <div className="flex pt-16 h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/4 bg-[#E5E5E5] text-[#14213D] p-5">
                <h2 className="text-xl font-bold mb-8">Citizen Journalist Portal</h2>
                <ul className="space-y-4">
                    <li>
                        <button
                            onClick={openModal} // Open modal on click
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
                {/* Post with gradient border */}
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
                            <div className="mb-2">
                                <h4 className="text-lg font-semibold">Comments:</h4>
                                {comments.story.map((comment, index) => (
                                    <p key={index} className="text-gray-600">{comment}</p>
                                ))}
                            </div>
                            <textarea
                                value={newComment}
                                onChange={handleCommentChange}
                                placeholder="Add a comment..."
                                className="w-full p-2 mb-4 rounded border border-gray-300"
                            />
                            <button
                                onClick={() => {
                                    setActivePost('story');
                                    handleCommentSubmit();
                                }}
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Add Comment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Repeat the same for other post types (image, video) */}
                {/* For brevity, here’s how you’d add comments to the image post */}
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
                            <div className="mb-2">
                                <h4 className="text-lg font-semibold">Comments:</h4>
                                {comments.image.map((comment, index) => (
                                    <p key={index} className="text-gray-600">{comment}</p>
                                ))}
                            </div>
                            <textarea
                                value={newComment}
                                onChange={handleCommentChange}
                                placeholder="Add a comment..."
                                className="w-full p-2 mb-4 rounded border border-gray-300"
                            />
                            <button
                                onClick={() => {
                                    setActivePost('image');
                                    handleCommentSubmit();
                                }}
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Add Comment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Repeat similarly for video posts */}
            </main>

            {/* Modal for Search by Keyword */}
            {isModalOpen && <SearchKeyword isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
        </div>
    );
};

export default CJPHero;
