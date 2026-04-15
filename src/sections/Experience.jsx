import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faMapMarkerAlt,
  faBriefcase,
  faBasketball,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';

const experiences = [
    // {
    //     title: 'Incoming Software Development Engineer Intern',
    //     role: 'Incoming SDE Intern',
    //     company: 'Amazon',
    //     date: 'May 2026 – Aug 2026',
    //     location: 'Seattle, WA',
    //     points: [
    //         'Incoming Software Development Engineer Intern for Summer 2026.'
    //     ],
    //     icon: faAmazon
    // },
    {
        title: 'Software Engineer Intern',
        role: 'Software Engineer Intern',
        company: 'Robert Half',
        date: 'Jun 2025 – Present',
        location: 'San Ramon, CA',
        points: [
            'Built an ML pipeline in Salesforce Data Cloud, improving Opportunity prediction accuracy from 72% to 86%.',
            'Developed Lightning Web Components and Apex classes to enhance CRM functionality for Protiviti consultants.',
            'Configured Salesforce environments; created backend integrations, streamlining sales workflows and enabling analytics.'
        ],
        icon: faBriefcase
    },
    {
        title: 'Machine Learning Lead - Indiana Fever (with The Data Mine)',
        role: 'Machine Learning Lead',
        company: 'Indiana Fever (with The Data Mine)',
        date: 'Aug 2024 – May 2025',
        location: 'Indianapolis, IN',
        points: [
            'Led development of supervised ML models for player performance prediction across global leagues with 80% accuracy.',
            'Engineered feature extraction pipeline in PySpark to process 500,000+ player stats using Databricks Lakehouse.',
            'Reduced prediction error by 23% via hyperparameter tuning and cross-validation.',
        ],
        icon: faBasketball
    },
    {
        title: 'Software Engineering Intern - Elastik Teams',
        role: 'Software Engineering Intern',
        company: 'Elastik Teams',
        date: 'Jun 2022 – Aug 2022',
        location: 'Remote',
        points: [
            'Developed RESTful APIs using Node.js and Express; rapidly adapted to new tech.',
            'Improved login security and reduced login time by 20% with HubSpot OAuth 2.0.',
            'Built CI/CD pipeline and achieved 98% test coverage via 30+ unit tests.',
        ],
        icon: faCodeBranch
    },
];

const Experience = () => {
    return (
        <section id="experience" className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="relative">
                    {/* Consistent left-aligned Timeline Line */}
                    <div className="absolute left-[1rem] md:left-[2.5rem] top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 rounded-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => {
                            return (
                                <div key={idx} className="relative flex flex-col md:flex-row items-start group">
                                    
                                    {/* Timeline Node */}
                                    <div className="absolute left-[1rem] md:left-[2.5rem] transform -translate-x-1/2 mt-8 md:mt-10 w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-gray-50 dark:border-gray-900 bg-white dark:bg-gray-800 z-10 shadow-sm flex items-center justify-center transition-transform duration-300">
                                        <div className="w-full h-full rounded-full flex items-center justify-center bg-blue-50 dark:bg-blue-900/30">
                                            <FontAwesomeIcon icon={exp.icon} className="text-lg md:text-xl text-blue-500 dark:text-blue-400" />
                                        </div>
                                    </div>
                                    
                                    {/* Content Card Box */}
                                    <div className="w-full pl-14 md:pl-28 relative z-0">
                                        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                                            
                                            {/* Header Section */}
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 relative z-10">
                                                <div className="mb-4 md:mb-0 max-w-xl">
                                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                
                                                <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium shrink-0">
                                                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-lg w-fit md:ml-auto">
                                                        <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 dark:text-blue-400" />
                                                        <span>{exp.date}</span>
                                                    </div>
                                                    {exp.location && (
                                                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-lg w-fit md:ml-auto">
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 dark:text-blue-400" />
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Bullet Points */}
                                            <ul className="space-y-3 relative z-10">
                                                {exp.points.map((point, i) => {
                                                    // Highlight technical terms and percentages
                                                    const highlightedPoint = point.replace(
                                                        /(\d+%|80% accuracy|PySpark|Databricks|23%|hyperparameter tuning|cross-validation|Node\.js|Express|OAuth 2\.0|CI\/CD|98% test coverage|72% to 86%|Salesforce Data Cloud|Lightning Web Components|Apex|Salesforce)/g, 
                                                        '<span class="font-bold text-blue-600 dark:text-blue-400">$1</span>'
                                                    );
                                                    
                                                    return (
                                                        <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-4 flex-shrink-0 opacity-80"></span>
                                                            <span dangerouslySetInnerHTML={{ __html: highlightedPoint }}></span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>

                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;