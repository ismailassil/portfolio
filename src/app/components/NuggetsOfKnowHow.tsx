import { Graph } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";
import NuggetCard from "./Items/Cards/NuggetCard";
import {
	SE_description,
	SE_skills,
	SE_subtitle,
	SE_title,
	UI_description,
	UI_skills,
	UI_subtitle,
	UI_title,
} from "../info/Nuggets";

function NuggetsOfKnowHow() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<AnimatePresence>
			<motion.article className="pt-20 relative" id="skills">
				<div
					className="relative"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<motion.h1
						animate={{ x: isHovered ? 50 : 0 }}
						transition={{ type: "spring", stiffness: 300 }}
						className="relative text-3xl font-bold zigzag hover:line-through
								hover:text-[#FF2200] cursor-pointer select-none"
					>
						Nuggets of Know-How
					</motion.h1>

					<motion.div
						animate={{
							x: isHovered ? 0 : -30,
							rotate: isHovered ? 12 : 45,
							opacity: isHovered ? 1 : 0,
						}}
						className="absolute top-0 left-0"
					>
						<Graph size={38} weight="fill" color="#FF2200" />
					</motion.div>
				</div>
				<AnimatePresence>
					<section
						className={`mt-10 text-lg text-gray-800 leading-loose flex flex-col gap-4`}
					>
						<NuggetCard
							title={SE_title}
							subtitle={SE_subtitle}
							description={SE_description}
							skills={SE_skills}
						/>
						<NuggetCard
							title={UI_title}
							subtitle={UI_subtitle}
							description={UI_description}
							skills={UI_skills}
						/>
					</section>
				</AnimatePresence>
			</motion.article>
		</AnimatePresence>
	);
}

export default NuggetsOfKnowHow;
