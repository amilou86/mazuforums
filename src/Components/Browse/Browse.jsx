import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Browse.css';
import { usePosts } from '../Context/PostContext';
import health from '../../assets/health.png';
import education from '../../assets/education.png';
import energy from '../../assets/energy.png';
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

const Browse = () => {
    const { postsData } = usePosts();
    const [mostPopular, setMostPopular] = useState(null);
    const [mostRecent, setMostRecent] = useState(null);
    const [hottest, setHottest] = useState(null);

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
        'Domestic and Gender Violence': topic4,
        'Child Abuse': topic8,
        'Child Defilement': topic2,
        'Online Abuse & Grooming': topic10,
        'Early Marriages': topic3,
        'Access to Information': topic5,
        'Data Protection': topic8,
        'defaultImage': topic10,
    };

    useEffect(() => {
        console.log("Posts Data in Browse: ", postsData);
        if (postsData) {
            let popularTopic = null;
            let recentTopic = null;
            let hottestTopic = null;

            let maxPosts = -1;
            let latestDate = new Date(0);
            let maxLikes = -1;

            Object.keys(postsData).forEach(topic => {
                console.log(`Processing topic: ${topic}, Posts:`, postsData[topic]);

                // Determine the most popular topic by number of posts
                if (postsData[topic].length > maxPosts) {
                    maxPosts = postsData[topic].length;
                    popularTopic = topic;
                }

                // Determine the most recent topic by the latest post date
                const latestPostInTopic = postsData[topic].reduce((latest, post) => {
                    return new Date(post.date) > new Date(latest.date) ? post : latest;
                }, { date: new Date(0) });

                if (new Date(latestPostInTopic.date) > latestDate) {
                    latestDate = new Date(latestPostInTopic.date);
                    recentTopic = topic;
                }

                // Determine the hottest topic by the most likes
                const hottestPostInTopic = postsData[topic].reduce((max, post) => post.likes > max.likes ? post : max, { likes: -1 });

                if (hottestPostInTopic.likes > maxLikes) {
                    maxLikes = hottestPostInTopic.likes;
                    hottestTopic = topic;
                }
            });

            console.log("Most Popular Topic:", popularTopic);
            console.log("Most Recent Topic:", recentTopic);
            console.log("Hottest Topic:", hottestTopic);

            setMostPopular(popularTopic);
            setMostRecent(recentTopic);
            setHottest(hottestTopic);
        }
    }, [postsData]);

    const getTopicImage = (topic) => {
        return topicImages[topic] || topicImages['defaultImage'];
    };

    return (
        <div className='browse'>
            <div className='browse-header'>
                <h1>Browse Topics</h1>
            </div>
            {postsData && (
                <div className="topics-container">
                    {mostPopular && (
                        <div className="topicsbrowse" key={mostPopular}>
                            <Link to={`/topic/${mostPopular}`}>
                                <img src={getTopicImage(mostPopular)} alt={`${mostPopular} topic image`} />
                                <div className="caption">
                                    <p>Most Popular Topic: {mostPopular}</p>
                                </div>
                            </Link>
                        </div>
                    )}
                    {mostRecent && (
                        <div className="topicsbrowse" key={mostRecent}>
                            <Link to={`/topic/${mostRecent}`}>
                                <img src={getTopicImage(mostRecent)} alt={`${mostRecent} topic image`} />
                                <div className="caption">
                                    <p>Most Recent Topic: {mostRecent}</p>
                                </div>
                            </Link>
                        </div>
                    )}
                    {hottest && (
                        <div className="topicsbrowse" key={hottest}>
                            <Link to={`/topic/${hottest}`}>
                                <img src={getTopicImage(hottest)} alt={`${hottest} topic image`} />
                                <div className="caption">
                                    <p>Hottest Topic: {hottest}</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Browse;
