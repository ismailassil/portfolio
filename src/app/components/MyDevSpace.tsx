import { Circuitry } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";
import techIcons from "../info/Tech";

function MyDevSpace() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<AnimatePresence>
			<motion.section className="mt-20 relative" id="SkillSet">
				<div
					className="relative inline-block"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<motion.h1
						animate={{ x: isHovered ? 50 : 0 }}
						transition={{ type: "spring", stiffness: 300 }}
						className="relative text-3xl font-bold zigzag hover:line-through
								hover:text-[#00676B] cursor-pointer select-none z-1"
					>
						My DevSpace
					</motion.h1>

					<motion.div
						animate={{
							x: isHovered ? 0 : -30,
							rotate: isHovered ? 12 : 45,
							opacity: isHovered ? 1 : 0,
						}}
						className="absolute top-0 left-0"
					>
						<Circuitry size={38} weight="duotone" color="#00676B" />
					</motion.div>
				</div>
				<AnimatePresence>
					<motion.aside
						className={`mt-10 text-justify text-gray-700 leading-loose grid grid-cols-3 gap-3`}
					>
						{techIcons.map((tech, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.03, rotate: 2 }}
								whileTap={{ scale: 0.95 }}
								className="flex gap-3 ring-2 ring-red-900/12 rounded-sm px-2 items-center h-12
									cursor-pointer hover:ring-indigo-500/50 hover:bg-gray-100 bg-gray-50 select-none
									hover:shadow-md
									"
							>
								{tech.tag}
								<p>{tech.label}</p>
							</motion.div>
						))}
					</motion.aside>
				</AnimatePresence>
			</motion.section>
		</AnimatePresence>
	);
}

export default MyDevSpace;
