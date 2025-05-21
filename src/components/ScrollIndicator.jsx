import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
    const [visible, setVisible] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Make the arrow appear after 4 seconds
        const showTimer = setTimeout(() => {
            // Show the element and start fading in

            setVisible(true);
            setOpacity(1);
        }, 4000);

        // Function to handle scroll and fade out when halfway down
        const handleScroll = () => {
            // Calculate when we're halfway down the viewport height
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const qtrPoint = windowHeight / 4;

            if (scrollPosition > qtrPoint) {
                // Start fading out
                setOpacity(0);

                // After fade completes, hide the element completely
                setTimeout(() => {
                    setVisible(false);
                }, 500); // Match this with transition duration
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            clearTimeout(showTimer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-20"
            style={{ opacity }}
        >
            <svg
                className="w-8 h-8 text-blue-400 animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    );
};

export default ScrollIndicator;