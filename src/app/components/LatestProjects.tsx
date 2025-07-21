import { ArrowRight } from '@phosphor-icons/react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import ProjectCard from './Items/Cards/ProjectCard';
import {
	cubDescription,
	cubImg,
	inceptionDescription,
	inceptionImg,
	ircDescription,
	ircImg,
	minishellDescription,
	minishellImg,
} from '../info/Descriptions';

function LatestProjects() {
	const projects = [
		{
			title: 'IRC Server',
			label: ircDescription,
			img: ircImg,
			link: 'https://github.com/ismailassil/ft_irc',
		},
		{
			title: 'Inception',
			label: inceptionDescription,
			img: inceptionImg,
			link: 'https://github.com/ismailassil/inception',
		},
		{
			title: 'Minishell',
			label: minishellDescription,
			img: minishellImg,
			link: 'https://github.com/ismailassil/minishell',
		},
		{
			title: 'cub3D',
			label: cubDescription,
			img: cubImg,
			link: 'https://github.com/ismailassil/cub3d',
		},
	];

	return (
		<AnimatePresence>
			<motion.article
				className="relative pt-20 dark:text-gray-200"
				id="projects"
			>
				<div className="flex justify-between">
					<div className="relative">
						<motion.h1
							transition={{ duration: 0.6, ease: 'easeOut' }}
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ amount: 1, once: true }}
							className="text-2xl md:text-3xl font-bold select-none"
						>
							Latest Projects
						</motion.h1>
					</div>
					<motion.p
						transition={{ duration: 0.6, ease: 'easeOut' }}
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 1, once: true }}
						className="text-md flex cursor-pointer flex-nowrap text-sm md:text-base
							items-center gap-2 text-gray-400 select-none hover:underline"
						onClick={() =>
							window.open(
								'https://github.com/ismailassil?tab=repositories',
							)
						}
					>
						View all Projects <ArrowRight size={12} />
					</motion.p>
				</div>
				<motion.section
					className="mt-10 grid w-full grid-cols-1 sm:grid-cols-2 
						gap-4 rounded-xl select-none"
				>
					{projects.map((pr, i) => (
						<ProjectCard
							key={i}
							i={i}
							title={pr.title}
							label={pr.label}
							img={pr.img}
							link={pr.link}
						/>
					))}
				</motion.section>
			</motion.article>
		</AnimatePresence>
	);
}

export default LatestProjects;
