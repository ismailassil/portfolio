import { Code, Folder, Notepad, User } from '@phosphor-icons/react';
import ThemeSwitcher from './ThemeSwitcher';
import Image from 'next/image';
import Button from './Items/About';
import { motion } from 'framer-motion';
import sora from '../fonts/sora';

function Main() {
	const text = 'Ismail Assil';
	const characters = text.split('');

	const buttons = [
		{
			tooltip: 'About Me',
			href: '#aboutme',
			Icon: User,
		},
		{
			tooltip: 'Skills',
			href: '#skills',
			Icon: Code,
		},
		{
			tooltip: 'Projects',
			href: '#projects',
			Icon: Folder,
		},
		{
			tooltip: 'Blogs',
			href: '#blogs',
			Icon: Notepad,
		},
	];

	return (
		<main
			className="relative h-screen select-none
					flex flex-col items-center justify-center gap-15 dark:text-gray-200"
		>
			<ThemeSwitcher />
			<article className="flex flex-col items-center justify-center gap-5">
				<div className="flex flex-col gap-1 relative">
					<motion.p
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							delay: 0.2,
							duration: 0.5,
						}}
						className={`text-2xl text-center sm:text-left ${sora.className}`}
					>
						Hi, I’m
					</motion.p>
					<motion.h1
						className={`${sora.className} text-7xl font-black text-center`}
					>
						{characters.map((ch, i) => (
							<motion.span
								key={i}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: i * 0.1,
									duration: 0.5,
								}}
							>
								{ch}
							</motion.span>
						))}
					</motion.h1>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.2,
						duration: 0.5,
					}}
					className="text-lg font-light w-full max-w-[90%] md:max-w-[60%] text-center"
				>
					Software Engineering Student passionate about creating real-world
					solutions
				</motion.p>
			</article>
			<section className="gap-4 grid grid-cols-2 sm:grid-cols-4">
				{buttons.map((ref, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30, rotate: 20, scale: 0.5 }}
						animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
						transition={{ delay: i * 0.2, duration: 0.3 }}
					>
						<Button
							key={i}
							tooltip={ref.tooltip}
							href={ref.href}
							Icon={ref.Icon}
						/>
					</motion.div>
				))}
			</section>
			<Image
				src="/scrollDown.gif"
				width={50}
				height={90}
				alt="Scroll Down Animation"
				className="absolute bottom-10 cursor-pointer dark:invert-100"
				unoptimized
				onClick={() => (window.location.href = '#aboutme')}
			/>
		</main>
	);
}

export default Main;
