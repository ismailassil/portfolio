import About from "./Items/About";
import Blogs from "./Items/Blogs";
import Projects from "./Items/Projects";
import Skills from "./Items/Skills";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";

function Main() {

	const style = `relative group w-fit cursor-pointer ring-2 px-7 py-3 rounded-sm
			hover:-translate-y-2 duration-600 transition-all`;

	return (
		<main
			className="relative h-screen select-none
					flex flex-col items-center justify-center gap-15"
		>
			<ThemeSwitcher />

			<article className="flex flex-col items-center justify-center gap-5">
				<h1 className="text-5xl font-black">Hello, I&rsquo;m Ismail</h1>
				<p className="text-lg font-light w-full max-w-[60%] text-center">
					Software Engineering Student passionate about creating
					real-world solutions
				</p>
			</article>
			<section className="flex gap-4">
				<About style={style} />
				<Skills style={style} />
				<Projects style={style} />
				<Blogs style={style} />
			</section>
			<Image
				src="/scrollDown.gif"
				width={50}
				height={90}
				alt="Scroll Down Animation"
				className="absolute bottom-10"
				unoptimized
			/>
		</main>
	);
}

export default Main
