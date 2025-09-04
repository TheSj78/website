import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';

const experiences = [
    {
        title: 'Software Engineer Intern',
        role: 'Software Engineer Intern',
        company: 'Robert Half',
        date: 'Jun 2025 - Aug 2025',
        location: 'San Ramon, CA',
        points: [
            'Built an ML pipeline in Salesforce Data Cloud, improving Opportunity prediction accuracy from 72% to 86%',
            'Developed Lightning Web Components and Apex classes to enhance CRM functionality for Protiviti consultants',
            'Configured Salesforce environments; created backend integrations, streamlining sales workflows and enabling analytics.'
        ],
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
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 relative">
          Experience
        </h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 top-0 w-0.5 h-full bg-blue-500 rounded-full opacity-70"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
                
                {/* Experience card */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
                  {/* Meta information */}
                  <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <div className="flex items-center mr-4 mb-2">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-500" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Job title and company */}
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Accomplishments */}
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => {
                      // Find numbers with % and technical terms to highlight
                      const highlightedPoint = point.replace(
                        /(\d+%|80% accuracy|PySpark|Databricks|23%|hyperparameter tuning|cross-validation|Node\.js|Express|OAuth 2\.0|CI\/CD|98% test coverage|72% to 86%)/g, 
                        '<span class="font-semibold text-blue-700 dark:text-blue-300">$1</span>'
                      );
                      
                      return (
                        <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
                          <span dangerouslySetInnerHTML={{ __html: highlightedPoint }}></span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;