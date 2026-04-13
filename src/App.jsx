import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBento from './sections/HeroBento';
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
			<HeroBento />
			<ScrollIndicator />
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