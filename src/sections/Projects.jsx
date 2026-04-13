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
    faListSquares,
    faGamepad,
    faPuzzlePiece,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
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
            techStack: ['React', 'Node.js', 'HTML/CSS', 'JavaScript', 'Google Gemini API'],
            github: 'https://github.com/TheSj78/learnify',
            liveDemo: null,
            color: 'blue'
        },
        {
            id: 'slingshot-sumo',
            title: 'Slingshot Sumo',
            shortDesc: 'Real-time multiplayer physics-based wrestling game',
            description: [
                'Developed a real-time multiplayer physics-based web game with collision detection and player synchronization.',
                'Implemented a dynamic lobby system, randomized power-ups, and a shrinking arena to escalate gameplay intensity.',
                'Engineered a scalable backend using Node.js and WebSockets (Socket.io) for low-latency communication.'
            ],
            icon: faUsers,
            techStack: ['JavaScript', 'Node.js', 'Socket.io', 'HTML5 Canvas', 'CSS'],
            github: 'https://github.com/TheSj78/slingshot-sumo',
            liveDemo: 'https://slingshot-sumo.onrender.com/',
            color: 'orange'
        },
        {
            id: 'tiler',
            title: 'Tiler',
            shortDesc: 'Strategic human vs. bot puzzle game',
            description: [
                'Designed a single-player strategy game featuring multiple game modes and an interactive grid system.',
                'Engineered a responsive and intuitive user interface to visualize game states and valid moves seamlessly.',
                'Built intelligent AI bot logic that adapts to player moves and provides varying levels of difficulty.'
            ],
            icon: faPuzzlePiece,
            techStack: ['TypeScript', 'React', 'CSS', 'Vercel'],
            github: 'https://github.com/TheSj78/tiler',
            liveDemo: 'https://tiler-orpin.vercel.app/',
            color: 'indigo'
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
            techStack: ['Python', 'TensorFlow', 'Keras', 'CNN Architecture', 'HTML/CSS/JS', 'Firebase'],
            github: 'https://github.com/TheSj78/sort-omatic',
            liveDemo: null,
            color: 'teal'
        }
    ];

    const getGradient = (color) => {
        const gradients = {
            'blue': 'from-blue-500/10 to-blue-500/5',
            'purple': 'from-purple-500/10 to-purple-500/5',
            'green': 'from-green-500/10 to-green-500/5',
            'teal': 'from-teal-500/10 to-teal-500/5',
            'orange': 'from-orange-500/10 to-orange-500/5',
            'indigo': 'from-indigo-500/10 to-indigo-500/5'
        };
        return gradients[color] || 'from-gray-500/10 to-gray-500/5';
    };

    const getAccentColor = (color) => {
        const colors = {
            'blue': 'text-blue-500',
            'purple': 'text-purple-500',
            'green': 'text-green-500',
            'teal': 'text-teal-500',
            'orange': 'text-orange-500',
            'indigo': 'text-indigo-500'
        };
        return colors[color] || 'text-gray-500';
    };

    const getBorderColor = (color) => {
        const colors = {
            'blue': 'border-blue-200 dark:border-blue-900/30 group-hover:border-blue-400 dark:group-hover:border-blue-600',
            'purple': 'border-purple-200 dark:border-purple-900/30 group-hover:border-purple-400 dark:group-hover:border-purple-600',
            'green': 'border-green-200 dark:border-green-900/30 group-hover:border-green-400 dark:group-hover:border-green-600',
            'teal': 'border-teal-200 dark:border-teal-900/30 group-hover:border-teal-400 dark:group-hover:border-teal-600',
            'orange': 'border-orange-200 dark:border-orange-900/30 group-hover:border-orange-400 dark:group-hover:border-orange-600',
            'indigo': 'border-indigo-200 dark:border-indigo-900/30 group-hover:border-indigo-400 dark:group-hover:border-indigo-600'
        };
        return colors[color] || 'border-gray-200 dark:border-gray-700';
    };

    const getIconBg = (color) => {
        const bgColors = {
            'blue': 'bg-blue-100 dark:bg-blue-900/40',
            'purple': 'bg-purple-100 dark:bg-purple-900/40',
            'green': 'bg-green-100 dark:bg-green-900/40',
            'teal': 'bg-teal-100 dark:bg-teal-900/40',
            'orange': 'bg-orange-100 dark:bg-orange-900/40',
            'indigo': 'bg-indigo-100 dark:bg-indigo-900/40'
        };
        return bgColors[color] || 'bg-gray-100 dark:bg-gray-800';
    };
    
    const getDotColor = (color) => {
        const dotColors = {
            'blue': 'bg-blue-500',
            'purple': 'bg-purple-500',
            'green': 'bg-green-500',
            'teal': 'bg-teal-500',
            'orange': 'bg-orange-500',
            'indigo': 'bg-indigo-500'
        };
        return dotColors[color] || 'bg-gray-500';
    };

    return (
        <section id="projects" className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`relative flex flex-col h-full rounded-2xl border bg-white dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl ${getBorderColor(project.color)} group`}
                        >
                            {/* Decorative Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.color)} opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>

                            <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-grow h-full">
                                {/* Card Header - Icon & Links */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getAccentColor(project.color)} ${getIconBg(project.color)} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                                        <FontAwesomeIcon icon={project.icon} className="text-2xl" />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                                aria-label="GitHub Repository"
                                            >
                                                <FontAwesomeIcon icon={faGithub} className="text-xl" />
                                            </a>
                                        )}
                                        {project.liveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700"
                                                aria-label="Live Demo"
                                            >
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Title & Short Description */}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
                                    {project.shortDesc}
                                </p>

                                {/* Bullet Points */}
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {project.description.map((item, i) => (
                                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start leading-relaxed">
                                            <span className={`inline-block mr-3 mt-1.5 w-1.5 h-1.5 rounded-full ${getDotColor(project.color)} flex-shrink-0`}></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700/50">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
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
