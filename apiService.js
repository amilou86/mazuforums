export const fetchHeroContent = async () => {
    try {
        const response = await fetch('/api/hero-content');

        if (response.ok && response.headers.get('content-type')?.includes('application/json')) {
            const data = await response.json();
            return data;
        } else {
            const text = await response.text();
            console.error(`Expected JSON but received ${response.headers.get('content-type')}. Response: ${text}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching hero content:', error);
        return null;
    }
};
