import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import img1 from '../CJPassets/img1.png';
import img2 from '../CJPassets/img2.png';
import img3 from '../CJPassets/img3.png';
import img4 from '../CJPassets/img4.png';
import img5 from '../CJPassets/img5.png';
import img6 from '../CJPassets/img6.png';
import img7 from '../CJPassets/img7.png';
import img8 from '../CJPassets/img8.png';
import img9 from '../CJPassets/img9.png';
import img10 from '../CJPassets/img10.png';
import img11 from '../CJPassets/img11.png';
import img12 from '../CJPassets/img12.png';
import img13 from '../CJPassets/img13.png';
import img14 from '../CJPassets/img14.png';
import img15 from '../CJPassets/img15.png';
import img16 from '../CJPassets/img16.png';
import CJPSignIn from '../CitizenJournalistPortal/CJPSignIn.jsx'

const CitizenJournalistPortal = () => {
    const navigate = useNavigate();  // Initialize useNavigate

    const handleJoinClick = () => {
        navigate('/CJPsignin');  // Programmatically navigate to the SignIn component
    };

    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
                    The Power of The People
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    Let's change it up
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    Empowering everyday voices to share real stories, real-time. Our citizen journalist portal enables everyday individuals, often armed with just a smartphone and an internet connection, to report on events and issues they encounter in their communities.
                    Join our community of citizen journalists and contribute your own articles, stories, videos, and photography. Search for the issues most important to you and connect with like-minded members.
                </p>
                <button
                    onClick={handleJoinClick}  // Link button to handleJoinClick function
                    className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
                >
                    Join the movement
                </button>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
};

const squareData = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },
    { id: 14, src: img14 },
    { id: 15, src: img15 },
    { id: 16, src: img16 },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="relative w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default CitizenJournalistPortal;
