import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { name: 'About', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/resume/Shubham_Jain_Resume.pdf', target: '_blank' }
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl z-50">
      
      {/* Main Pill Navbar */}
      <nav className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-800 rounded-full text-gray-800 dark:text-white z-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                className="text-2xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Shubham Jain
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 pl-2">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  target={item.target || '_self'}
                  className={
                    item.name === 'Resume'
                      ? "px-5 py-2 ml-2 rounded-full text-sm font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:scale-105 shadow-sm transition-all duration-200 uppercase tracking-widest"
                      : "px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-200 text-gray-500 dark:text-gray-400"
                  }
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 transform transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 transform scale-110 transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Dropdown Menu */}
      <div 
        className={`absolute top-full left-0 w-full mt-3 transition-all duration-300 transform origin-top-center ${
          isMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl border border-gray-200 dark:border-gray-800 rounded-2xl p-3 md:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.target || '_self'}
                  className={
                    item.name === 'Resume'
                      ? "block px-4 py-3 mt-2 rounded-xl text-sm font-bold bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-center shadow-sm uppercase tracking-widest transition-all duration-200 hover:bg-black dark:hover:bg-white"
                      : "block px-4 py-3 rounded-xl text-base font-semibold hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-200 text-gray-700 dark:text-gray-300 text-center"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;