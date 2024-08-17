import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;
        // Extract the section ID from the pathname if present
        const sectionId = pathname.split('/').pop(); // Get the last segment of the path

        if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                // Introduce a small delay to ensure the element is rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
};

export default ScrollToTop;
