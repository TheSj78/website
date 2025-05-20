import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHomeSection, setIsHomeSection] = useState(true);

  // Check if user is not on home section and has scrolled down
  useEffect(() => {
    const handleScroll = () => {
      // Check if we're scrolled down enough to show the button
      const scrolled = window.scrollY > 300;
      
      // Check if we're in the home section
      const homeSection = document.querySelector('#home');
      const isInHomeView = homeSection && 
        window.scrollY < (homeSection.offsetTop + homeSection.offsetHeight);
      
      setIsHomeSection(isInHomeView);
      setIsVisible(scrolled && !isInHomeView);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 15l7-7 7 7" 
        />
      </svg>
    </a>
  );
};

export default ScrollToTopButton;