import { ArrowRight, Lego } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";
import ProjectCard from "./Items/Cards/ProjectCard";
import {
	cubDescription,
	cubImg,
	inceptionDescription,
	inceptionImg,
	ircDescription,
	ircImg,
	minishellDescription,
	minishellImg,
} from "../info/Descriptions";

function LatestProjects() {
	const [isHovered, setIsHovered] = useState(false);

	const projects = [
		{
			title: "IRC Server",
			label: ircDescription,
			img: ircImg,
		},
		{
			title: "Inception",
			label: inceptionDescription,
			img: inceptionImg,
		},
		{
			title: "Minishell",
			label: minishellDescription,
			img: minishellImg,
		},
		{
			title: "cub3D",
			label: cubDescription,
			img: cubImg,
		},
	];

	return (
		<AnimatePresence>
			<motion.article className="relative mt-20" id="SkillSet">
				<div className="flex justify-between">
					<div
						className="relative"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<motion.h1
							animate={{ x: isHovered ? 50 : 0 }}
							transition={{ type: "spring", stiffness: 300 }}
							className="zigzag z-1 cursor-pointer text-3xl font-bold select-none hover:text-[#736C12] hover:line-through"
						>
							Latest Projects
						</motion.h1>

						<motion.div
							animate={{
								x: isHovered ? 0 : -30,
								rotate: isHovered ? 12 : 45,
								opacity: isHovered ? 1 : 0,
							}}
							className="absolute top-0 left-0"
						>
							<Lego size={38} weight="duotone" color="#736C12" />
						</motion.div>
					</div>
					<motion.p className="text-md z-1 flex cursor-pointer flex-nowrap items-center gap-2 text-gray-400 select-none hover:underline">
						View all Projects <ArrowRight size={12} />
					</motion.p>
				</div>
				<motion.section className="mt-10 grid w-full grid-cols-2 gap-4 rounded-xl select-none">
					{projects.map((pr, i) => (
						<ProjectCard
							key={i}
							title={pr.title}
							label={pr.label}
							img={pr.img}
						/>
					))}
				</motion.section>
			</motion.article>
		</AnimatePresence>
	);
}

export default LatestProjects;
