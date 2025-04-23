"use client";

import { Moon, SunDim } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Projects from "./components/Items/Projects";
import About from "./components/Items/About";
import Skills from "./components/Items/Skills";
import Blogs from "./components/Items/Blogs";

export default function Home() {
	const [isDark, setIsDark] = useState(false);

	const style = `relative group w-fit cursor-pointer ring-2 px-7 py-3 rounded-sm
			hover:-translate-y-2 duration-600 transition-all`;

	return (
		<div className="flex flex-col items-center">
			<main
				className="relative max-w-200 w-200 h-screen select-none
					flex flex-col items-center justify-center gap-15"
			>
				<AnimatePresence mode="wait">
					<div
						className="absolute top-10 right-5 cursor-pointer
							bg-white rounded-full ring-2 px-4 p-2"
					>
						<motion.div
							key={isDark ? "dark" : "light"}
							initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							onClick={() => setIsDark(!isDark)}
						>
							{isDark ? <SunDim size={24} /> : <Moon size={24} />}
						</motion.div>
					</div>
				</AnimatePresence>

				<article className="flex flex-col items-center justify-center gap-5">
					<h1 className="text-5xl font-black">
						Hello, I&rsquo;m Ismail
					</h1>
					<p className="text-lg font-light w-full max-w-[60%] text-center">
						Software Engineering Student passionate about creating
						real-world solutions
					</p>
				</article>
				<section className="flex gap-4">
					<About style={style} />
					<Projects style={style} />
					<Skills style={style} />
					<Blogs style={style} />
				</section>
				<Image
					src="/scrollDown.gif"
					width={50}
					height={90}
					alt="Scroll Down Animation"
					className="absolute bottom-10"
				/>
			</main>
			<section>

			</section>
		</div>
	);
}
