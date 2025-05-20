import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faServer,
    faDatabase,
    faTools,
    faBrain,
    faLaptopCode,
    faCloud,
    faTerminal,
    faBolt,
    faGraduationCap,
    faRobot,
    faCircleNodes,
    faMicrochip,
    faEye,
    faMoneyBillWave,
    faGears,
    faCode as faCodeAlt,
    faPuzzlePiece,
    faMoneyCheckDollar,
    faFlask
} from '@fortawesome/free-solid-svg-icons';
import {
    faReact,
    faNode,
    faPython,
    faJava,
    faJs,
    faHtml5,
    faCss3Alt,
    faAws,
    faLinux,
    faGithub,
    faDocker,
    faMicrosoft
} from '@fortawesome/free-brands-svg-icons';

// Skill mappings with icons
const skillIcons = {
    // Languages
    'C': faCodeAlt,
    'C++': faCodeAlt,
    'Java': faJava,
    'Python': faPython,
    'JavaScript': faJs,
    'HTML/CSS': faHtml5,
    'Assembly': faMicrochip,
    'R': faCircleNodes,

    // Frontend
    'React': faReact,
    'Tailwind CSS': faCss3Alt,
    'Vite': faBolt,
    'NextJS': faBolt,

    // Backend
    'Node.js': faNode,
    'Express': faServer,
    'Firebase': faDatabase,
    'PostgreSQL': faDatabase,
    'SQL': faDatabase,
    'MySQL': faDatabase,
    'MongoDB': faDatabase,
    'Flask': faFlask,

    // Tools & Platforms
    'Git': faGithub,
    'Linux/Unix': faLinux,
    'AWS': faAws,
    'Azure': faMicrosoft,
    'Apache Spark': faBolt,
    'Docker': faDocker,
    'Google Cloud': faCloud,

    // AI/ML
    'Numpy': faCode,
    'Pandas': faLaptopCode,
    'TensorFlow': faBrain,
    'PyTorch': faBrain,
    'ML Engineering': faCircleNodes,
    'Data Mining': faDatabase,

    // Interests
    'Generative AI': faPuzzlePiece,
    'Embedded Systems': faMicrochip,
    'Semiconductor Technology': faMicrochip,
    'Robotics': faRobot,
    'Computer Vision': faEye,
    'FinTech': faMoneyCheckDollar
};

const skillGroups = [
    {
        title: 'Languages',
        icon: faCode,
        items: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'HTML/CSS', 'R', 'Assembly', 'SQL'],
    },
    {
        title: 'Frontend',
        icon: faLaptopCode,
        items: ['React', 'Tailwind CSS', 'Vite', 'HTML/CSS', 'NextJS'],
    },
    {
        title: 'Backend',
        icon: faServer,
        items: ['Node.js', 'Express', 'Firebase', 'MySQL', 'MongoDB', 'Flask'],
    },
    {
        title: 'Tools & Platforms',
        icon: faTools,
        items: ['Git + GitHub', 'Linux/Unix', 'AWS', 'Azure', 'Apache Spark', 'Google Cloud'],
    },
    {
        title: 'AI / ML',
        icon: faBrain,
        items: ['Numpy', 'Pandas', 'TensorFlow', 'PyTorch', 'ML Engineering', 'Data Mining'],
    },
    {
        title: 'Interests',
        icon: faGraduationCap,
        items: ['Generative AI', 'Embedded Systems', 'Semiconductor Tech', 'Robotics', 'Computer Vision', 'FinTech'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-16">
            <div className="max-w-6xl w-full">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, i) => (

                        //if group title is "Interests", use a different style
                        //else use the default style
                        <div
                            key={i}
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-5 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-3">
                                <FontAwesomeIcon icon={group.icon} className="text-blue-500" />
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item, j) => {
                                    //const level = skillLevels[item] || 0;
                                    const icon = skillIcons[item] || group.icon;

                                    return group.title === 'Interests' ? (
                                            <div
                                                key={j}
                                                className="bg-blue-50 dark:bg-blue-900/20 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm"
                                            >
                                                <FontAwesomeIcon icon={icon} className="text-blue-500" />
                                                <span>{item}</span>
                                            </div>
                                    ) : (
                                        <div
                                            key={j}
                                            className="group relative bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                                        >
                                            <FontAwesomeIcon icon={icon} className="text-blue-500" />
                                            <span>{item}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;