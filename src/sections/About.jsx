// export default About;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faLaptopCode,
  faBook,
  faBrain,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const interests = [
    {
      icon: faLaptopCode,
      title: 'Software Engineering',
      desc: 'Building robust, scalable applications that solve real-world problems.',
    },
    {
      icon: faBrain,
      title: 'Artificial Intelligence',
      desc: 'Exploring machine learning algorithms and AI applications.',
    },
    {
      icon: faRocket,
      title: 'Continuous Learning',
      desc: 'Always seeking new knowledge and skills to expand my capabilities.',
    },
  ];

  return (
    <section id="about" className="w-full min-h-screen py-20 bg-white dark:bg-gray-900 flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              About Me
            </h2>
            <h3 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-3">
              CS & AI Undergrad at Purdue University
            </h3>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Photo/Personal Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 h-full shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-full mb-3 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm">
                      <img src="/images/Shubham_Jain_pfp-min.JPG" alt="Shubham Jain" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Shubham Jain</h3>
                  
                  <a 
                    href="#contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors w-full text-center"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Bio */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I have a strong passion for technology and innovation.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  What excites me most about computer science is its constant evolution and potential for wide-ranging applications. I thrive on the challenge of mastering new languages and concepts.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Beyond coursework, I enjoy applying my skills to real-world projects that make a difference. My goal is to leverage technology to create meaningful impact while continuously growing as a developer.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Outside of coding, I love playing basketball, drawing, bingewatching TV shows, and reading books!
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What I'm Passionate About</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {interests.map((item, i) => (
                      <div 
                        key={i} 
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                      >
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                          <FontAwesomeIcon icon={item.icon} size="lg" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default About;