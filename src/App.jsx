import { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollIndicator from './components/ScrollIndicator';
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen w-full">
			<Navbar />
			<section id="home" className="relative">
				<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-400/10 dark:to-transparent"></div>
				<main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center max-w-2xl mx-auto">
						<h1 className="text-5xl sm:text-6xl font-bold text-blue-500 dark:text-blue-400 mb-6">
							Hi, I'm <span className="relative inline-block">
								Shubham Jain!
								<span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 dark:bg-blue-500 transform scale-x-0 origin-left transition-transform duration-500 animate-expand"></span>
							</span>
						</h1>
						<p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
							I'm a CS & AI student at Purdue University.
						</p>
					</div>
				</main>
			</section>

			<ScrollIndicator />
			
			<About />
			<Education />
			<Experience />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
			<ScrollToTopButton />
			<Analytics />
		</div>
	);
}

export default App;