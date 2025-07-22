'use client';
import NuggetsOfKnowHow from './components/origin/NuggetsOfKnowHow';
import MyDevSpace from './components/origin/MyDevSpace';
import AboutMe from './components/origin/AboutMe';
import Main from './components/origin/Main';
import InkSpace from './components/origin/InkSpace';
import LatestProjects from './components/origin/LatestProjects';
import Footer from './components/origin/Footer';

export default function Home() {
	return (
		<div className="flex flex-col items-center *:max-w-180 *:w-full *:px-5 *:md:w-180">
			<Main />
			<AboutMe />
			<NuggetsOfKnowHow />
			<MyDevSpace />
			<LatestProjects />
			<InkSpace />
			<Footer />
		</div>
	);
}
