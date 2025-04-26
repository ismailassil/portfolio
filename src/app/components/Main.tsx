import { Code, Folder, Notepad, User } from "@phosphor-icons/react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import Button from "./Items/About";
import { motion } from "framer-motion";

function Main() {
	const text = "Hello, I’m Ismail";
	const characters = text.split("");

	const buttons = [
		{
			tooltip: "About Me",
			href: "#aboutme",
			Icon: User,
		},
		{
			tooltip: "Skills",
			href: "#skills",
			Icon: Code,
		},
		{
			tooltip: "Projects",
			href: "#projects",
			Icon: Folder,
		},
		{
			tooltip: "Blogs",
			href: "#blogs",
			Icon: Notepad,
		},
	];

	return (
		<main
			className="relative h-screen select-none
					flex flex-col items-center justify-center gap-15"
		>
			<ThemeSwitcher />

			<article className="flex flex-col items-center justify-center gap-5">
				<div className="flex gap-1 relative">
					<motion.h1 className="text-5xl font-black">
						{characters.map((ch, i) => (
							<motion.span
								key={i}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: i * 0.1,
									duration: 0.1,
								}}
							>
								{ch}
							</motion.span>
						))}
					</motion.h1>
					<motion.div
						animate={{ opacity: [1, 0, 1] }}
						transition={{
							duration: 0.75,
							repeat: Infinity,
							repeatType: "loop",
							ease: "ease-in-out",
						}}
						className="absolute bottom-0 -right-2 w-1 h-full bg-black"
					/>
				</div>
				<p className="text-lg font-light w-full max-w-[60%] text-center">
					Software Engineering Student passionate about creating
					real-world solutions
				</p>
			</article>
			<section className="flex gap-4">
				{buttons.map((ref, i) => (
					<Button
						key={i}
						tooltip={ref.tooltip}
						href={ref.href}
						Icon={ref.Icon}
					/>
				))}
			</section>
			<Image
				src="/scrollDown.gif"
				width={50}
				height={90}
				alt="Scroll Down Animation"
				className="absolute bottom-10 cursor-pointer"
				unoptimized
				onClick={() => (window.location.href = "#aboutme")}
			/>
		</main>
	);
}

export default Main;
