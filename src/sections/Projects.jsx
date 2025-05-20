import { useState } from 'react';
import {
    faCode,
    faServer,
    faBrain,
    faMemory,
    faRecycle,
    faGraduationCap,
    faArrowUpRightFromSquare,
    faChevronRight,
    faListSquares
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 'learnify',
            title: 'Learnify',
            shortDesc: 'Gemini-powered study helper for students',
            description: [
                'Architected an educational platform implementing custom prompt engineering techniques for content generation.',
                'Integrated Google Gemini API with Node.js, automating study content creation and boosting productivity by 60%.',
                'Helped assist students in creation of flashcards, study guides, and practice tests.'
            ],
            icon: faGraduationCap,
            image: '',
            hasImage: false,
            techStack: ['React', 'Node.js', 'HTML/CSS', 'JavaScript', 'Google Gemini API'],
            github: 'https://github.com/TheSj78/learnify',
            liveDemo: null,
            color: 'blue'
        },
        {
            id: 'compiler',
            title: 'Compiler',
            shortDesc: 'SimpleC compiler built with C, assembly, lex, and yacc',
            description: [
                'Developed a compiler for SimpleC language using C, implementing lexical analysis with lex and parsing with yacc.',
                'Engineered code generation phase that translated abstract syntax trees into optimized x86_64 assembly code.',
                'Implemented semantic analysis to catch type errors and validate program structure at compile time.'
            ],
            icon: faCode,
            hasImage: false,
            techStack: ['C', 'Assembly', 'Lex', 'Yacc', 'Compiler Design'],
            github: '',
            liveDemo: '',
            color: 'purple'
        },
        {
            id: 'memory-allocator',
            title: 'Memory Allocator',
            shortDesc: 'Custom implementation of the malloc library in C',
            description: [
                'Reimplemented the malloc, free, calloc, and realloc functions from scratch in C.',
                'Engineered efficient memory allocation algorithms to minimize fragmentation and improve performance.',
                'Implemented memory coalescing techniques to optimize space utilization across multiple allocation requests.'
            ],
            icon: faMemory,
            hasImage: false,
            techStack: ['C', 'Systems Programming', 'Memory Management', 'Linux/Unix'],
            github: '',
            liveDemo: '',
            color: 'green'
        },
        {
            id: 'sort-o-matic',
            title: 'Sort-o-Matic',
            shortDesc: 'AI-powered garbage sorting device with full-stack website',
            description: [
                'Built a camera-based device to sort garbage (trash/recycle/compost) in real time with 85% accuracy using CNNs.',
                'Developed a full-stack website to control the device and track waste management with real-time analytics.',
                'Won 3rd place at EcoHacks competing against 600+ participants.'
            ],
            icon: faRecycle,
            image: '/images/sort-o-matic.jpg',
            hasImage: false,
            techStack: ['Python', 'TensorFlow', 'Keras', 'CNN Architecture', 'HTML/CSS/JS', 'Firebase'],
            github: 'https://github.com/TheSj78/sort-omatic',
            liveDemo: null,
            color: 'teal'
        }
    ];

    // Generate gradient based on project color
    const getGradient = (color) => {
        const gradients = {
            'blue': 'from-blue-500/10 to-blue-500/5',
            'purple': 'from-purple-500/10 to-purple-500/5',
            'green': 'from-green-500/10 to-green-500/5',
            'teal': 'from-teal-500/10 to-teal-500/5'
        };
        return gradients[color] || 'from-gray-500/10 to-gray-500/5';
    };

    // Generate accent color based on project color
    const getAccentColor = (color) => {
        const colors = {
            'blue': 'text-blue-500',
            'purple': 'text-purple-500',
            'green': 'text-green-500',
            'teal': 'text-teal-500'
        };
        return colors[color] || 'text-gray-500';
    };

    // Generate border color based on project color
    const getBorderColor = (color) => {
        const colors = {
            'blue': 'border-blue-200 dark:border-blue-900/30',
            'purple': 'border-purple-200 dark:border-purple-900/30',
            'green': 'border-green-200 dark:border-green-900/30',
            'teal': 'border-teal-200 dark:border-teal-900/30'
        };
        return colors[color] || 'border-gray-200 dark:border-gray-700';
    };

    return (
        <section id="projects" className="w-full min-h-screen bg-white dark:bg-gray-900 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
                    Projects
                </h2>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${getBorderColor(project.color)}`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.color)} z-0`}></div>

                            <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8">
                                {/* Left Column - Icon or Image */}
                                <div className="w-full md:w-1/3 flex items-center justify-center">
                                    {project.hasImage ? (
                                        <div className="w-full aspect-video rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-md">
                                            {/* Replace with an actual image component */}
                                            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                                                <span className="text-gray-500 dark:text-gray-400">
                                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${getAccentColor(project.color)} bg-gray-100 dark:bg-gray-800`}>
                                            <FontAwesomeIcon icon={project.icon} className="text-4xl" />
                                        </div>
                                    )}
                                </div>

                                {/* Right Column - Content */}
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                                        <span>{project.title}</span>
                                        <div className={`ml-2 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                                            <FontAwesomeIcon icon={faChevronRight} className={`text-sm ${getAccentColor(project.color)}`} />
                                        </div>
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.shortDesc}</p>

                                    <ul className="space-y-2 mb-6">
                                        {project.description.map((item, i) => (
                                            <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                                                <span className={`inline-block mr-2 mt-1 ${getAccentColor(project.color)}`}>•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1 text-sm rounded-full ${hoveredProject === project.id ? 'bg-opacity-30 dark:bg-opacity-20' : 'bg-opacity-20 dark:bg-opacity-10'} 
                          transition-all duration-300 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                                                                text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 
                                                                hover:bg-gray-900 hover:text-white hover:border-gray-900 
                                                                dark:hover:bg-gray-100 dark:hover:text-gray-900 dark:hover:border-gray-100 transition-all duration-300"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                                <span>GitHub</span>
                                            </a>
                                        )}

                                        {project.liveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                                                                text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 
                                                                hover:bg-gray-900 hover:text-white hover:border-gray-900 
                                                                dark:hover:bg-gray-100 dark:hover:text-gray-900 dark:hover:border-gray-100 transition-all duration-300"
                                            >
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;