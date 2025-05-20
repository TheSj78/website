import Navbar from './components/Navbar';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Analytics } from "@vercel/analytics/react"

function App() {
	return (
		<div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen w-full">
			<Navbar />
			<section id="home">
				<main className="min-h-screen pt-24 flex flex-col items-center justify-center p-10">
					<h1 className="text-4xl font-bold text-blue-400 mb-6">Hi, I'm Shubham Jain!</h1>
					<p className="text-lg text-center max-w-xl">
						I'm a CS & AI student at Purdue University. 
					</p>
				</main>
			</section>
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