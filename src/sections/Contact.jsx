import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full pt-16 px-6 py-16 bg-white dark:bg-gray-900 flex items-center justify-center"
        >
            <div className="w-full max-w-5xl mx-auto">
               <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* Main Email Card - Left Focus */}
                    <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 sm:p-10 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-center items-center text-center group hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
                        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Email Me</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">My inbox is always open!</p>
                        <div className="space-y-3">
                            <a href="mailto:zoom2shubham@gmail.com" className="block text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">zoom2shubham@gmail.com</a>
                            <a href="mailto:jain618@purdue.edu" className="block text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">jain618@purdue.edu</a>
                        </div>
                    </div>
                    
                    {/* Socials & Resume Side Stack */}
                    <div className="flex flex-col gap-6">
                        {/* GitHub & LinkedIn row */}
                        <div className="grid grid-cols-2 gap-6 h-full">
                            <a href="https://github.com/TheSj78" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center group hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-bold text-gray-800 dark:text-gray-200">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/shubhamjain2005" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center group hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="font-bold text-gray-800 dark:text-gray-200">LinkedIn</span>
                            </a>
                        </div>
                        
                        {/* Resume Box */}
                        <a href="/resume/Shubham_Jain_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-8 shadow-md flex items-center justify-center group hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden h-32">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
                            <span className="text-white font-bold text-xl tracking-widest relative z-10">VIEW RESUME</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;