// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faMapMarkerAlt,
//   faGraduationCap,
//   faScroll,
//   faBook,
//   faStar,
// } from '@fortawesome/free-solid-svg-icons';

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-20"
//     >
//       <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all max-w-4xl w-full p-10">
//         <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-2">
//           Education
//         </h2>
//         <p className=" text-center text-gray-500 dark:text-gray-400 mb-8">
//           <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-blue-500" />
//           Aug 2023 – Dec 2026
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300 text-sm">
//           {/* LEFT SIDE */}
//           <div className="space-y-4">
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//                 Purdue University
//               </h3>
//               <p className="inline-flex items-center text-gray-600 dark:text-gray-400 mt-1">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-1 mr-2 text-blue-500" />
//                 West Lafayette, IN
//               </p>
//             </div>

//             <div className="space-y-2 mt-4">
//               <p className="flex items-start">
//                 <FontAwesomeIcon icon={faStar} className="mt-1 mr-2 text-blue-500" />
//                 <span><span className="font-semibold">GPA:</span> 3.83</span>
//               </p>
//               <p className="flex items-start">
//                 <FontAwesomeIcon icon={faScroll} className="mt-1 mr-2 text-blue-500" />
//                 <span>
//                   <span className="font-semibold">Degrees:</span> <br />B.S. in Computer Science<br />
//                   B.S. in Artificial Intelligence
//                 </span>
//               </p>
//               <p className="flex items-start">
//                 <FontAwesomeIcon icon={faBook} className="mt-1 mr-3 text-blue-500" />
//                 <span><span className="font-semibold">Minor:</span> Mathematics</span>
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div>
//             <p className="font-semibold mb-2">Relevant Coursework:</p>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Data Structures & Algorithms</li>
//               <li>Computer Architecture</li>
//               <li>Systems Programming</li>
//               <li>Discrete Mathematics</li>
//               <li>Multivariable Calculus</li>
//               <li>Linear Algebra</li>
//               <li>Data Mining & ML</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faGraduationCap,
  faScroll,
  faBook,
  faStar,
  faMedal,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Education = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="education"
      className="w-full min-h-screen flex items-center justify-center  px-6 py-20"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-4xl w-full p-10 border border-gray-100 dark:border-gray-700"
      >
        <div className="relative mb-2">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Education
          </h2>
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-blue-500 rounded-full"></div> */}
        </div>
        
        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-10">
          <span className="inline-flex items-center bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-blue-500" />
            <span className="font-medium">Aug 2023 – <span className="font-semibold text-gray-600 dark:text-gray-100">Dec 2026</span></span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 dark:text-gray-300">
          {/* LEFT SIDE */}
          <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Purdue University
              </h3>
              <p className="inline-flex items-center text-gray-600 dark:text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500" />
                West Lafayette, IN
              </p>

            <div className="space-y-4 mt-4">
              <div className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300">
                <FontAwesomeIcon icon={faStar} className="mt-1 mr-3 text-blue-500" size="lg" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">GPA:</span>
                  <span className="ml-2 text-lg font-medium">3.83</span>
                  <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 py-0.5 px-2 rounded-full">4x Dean's List and Semester Honors</span>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300">
                <FontAwesomeIcon icon={faScroll} className="mt-1 mr-3 text-blue-500" size="lg" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Degrees:</span>
                  <div className="mt-1 font-medium">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCertificate} className="text-blue-400 mr-1" size="xs" />
                      <span>B.S. in Computer Science</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <FontAwesomeIcon icon={faCertificate} className="text-blue-400 mr-1" size="xs" />
                      <span>B.S. in Artificial Intelligence</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300">
                <FontAwesomeIcon icon={faBook} className="mt-1 mr-3 text-blue-500" size="lg" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Minor:</span>
                  <span className="ml-2">Mathematics</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-t-lg">
              Relevant Coursework
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-b-lg">
              <ul className="space-y-3">
                {[
                  "Data Structures & Algorithms", 
                  "Computer Architecture",
                  "Systems Programming",
                  "Analysis of Algorithms",
                  "Data Mining & Machine Learning",
                  "Data Engineering with Python",
                  "Discrete Mathematics",
                  "Multivariable Calculus",
                  "Linear Algebra",
                ].map((course, index) => (
                  <li key={index} className="flex items-center group">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;