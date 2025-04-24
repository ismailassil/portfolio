"use client";
import NuggetsOfKnowHow from "./components/NuggetsOfKnowHow";
import MyDevSpace from "./components/MyDevSpace";
import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import InkSpace from "./components/InkSpace";

export default function Home() {
	return (
		<div className="flex flex-col items-center *:max-w-180 *:w-180 ">
			<Main />
			<AboutMe />
			<NuggetsOfKnowHow />
			<MyDevSpace />
			<InkSpace />
		</div>
	);
}
