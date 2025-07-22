import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import ProjectCard from '../Items/Cards/ProjectCard';
import { projects } from '../../info/Projects';
import Title from '../Items/Title';
import SubTitle from '../Items/SubTitle';

function LatestProjects() {
	return (
		<AnimatePresence>
			<motion.article
				className="relative pt-20 dark:text-gray-200"
				id="projects"
			>
				<div className="flex justify-between">
					<Title text="Latest Projects" />
					<SubTitle
						text="View all Projects"
						link="https://github.com/ismailassil?tab=repositories"
					/>
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
