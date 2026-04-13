import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGraduationCap, faBrain, faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const HeroBento = () => {
    return (
        <section id="home" className="w-full pt-32 pb-16 px-6 lg:px-8 xl:px-0 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]">
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[minmax(200px,_auto)]">
                
                {/* Cell 1: Main Introduction (span 2 cols) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-6 sm:p-10 flex flex-col justify-center relative overflow-hidden text-white shadow-xl shadow-blue-500/20"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tight leading-tight">
                            Hi, I'm Shubham.
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 max-w-xl font-medium leading-relaxed">
                            I'm a CS & AI student at Purdue University, passionate about building robust software, scalable web experiences, and intelligent ML models.
                        </p>
                    </div>
                </motion.div>

                {/* Cell 2: Image / Profile */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-1 md:row-span-2 bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm relative group overflow-hidden"
                >   
                    <div className="w-40 h-40 sm:w-56 sm:h-56 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 sm:mb-8 overflow-hidden ring-4 ring-gray-50 dark:ring-gray-700 transform transition-transform duration-500">
                      <img src="/images/Shubham_Jain_pfp-min.JPG" alt="Shubham Jain" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">Shubham Jain</h2>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6 text-center text-sm tracking-wide">CS & AI @ Purdue | Incoming @ Amazon</p>
                    
                    <div className="flex gap-4">
                        <a href="https://github.com/TheSj78" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-600 transition-all">
                             <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/shubhamjain2005" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all">
                             <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                        </a>
                    </div>
                </motion.div>

                {/* Cell 3: Education */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-1 md:row-span-1 bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between hover:border-orange-200 dark:hover:border-orange-900/50 transition-colors"
                >
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
                            </div>
                            <span className="text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-inner">GPA: 3.83</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Purdue University</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mt-1 font-medium">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs text-orange-500 dark:text-orange-400" /> West Lafayette, IN
                        </p>
                    </div>
                    <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-relaxed">
                            B.S. Computer Science<br />
                            B.S. Artificial Intelligence<br />
                            Minor in Mathematics
                        </p>
                        <div className="flex items-center justify-between mt-3">
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Expected Dec 2026</span>
                            <span className="text-xs text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md">5x Dean's List</span>
                        </div>
                    </div>
                </motion.div>

                {/* Cell 4: Interests / Core Focus */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                    className="md:col-span-1 md:row-span-1 bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-center hover:border-teal-200 dark:hover:border-teal-900/50 transition-colors"
                >
                    <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">Core Focus</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                                <FontAwesomeIcon icon={faLaptopCode} />
                            </div>
                            <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">Full-Stack Engineering</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                                <FontAwesomeIcon icon={faBrain} />
                            </div>
                            <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">Machine Learning & AI</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">Scalable System Design</span>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default HeroBento;
