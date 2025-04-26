import { ArrowRight, Eyeglasses } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";
import BlogCard from "./Items/Cards/BlogCard";

function InkSpace() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<AnimatePresence>
			<motion.article className="mt-20 relative" id="SkillSet">
				<div className="flex justify-between">
					<div
						className="relative"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<motion.h1
							animate={{ x: isHovered ? 50 : 0 }}
							transition={{ type: "spring", stiffness: 300 }}
							className="text-3xl font-bold zigzag hover:line-through
						hover:text-[#c99785] cursor-pointer select-none z-1"
						>
							InkSpace
						</motion.h1>

						<motion.div
							animate={{
								x: isHovered ? 0 : -30,
								rotate: isHovered ? 12 : 45,
								opacity: isHovered ? 1 : 0,
							}}
							className="absolute top-0 left-0"
						>
							<Eyeglasses
								size={38}
								weight="duotone"
								color="#c99785"
							/>
						</motion.div>
					</div>
					<motion.p
						className="hover:underline text-gray-400
							items-center text-md cursor-pointer select-none z-1 flex gap-2 flex-nowrap"
					>
						View all Blogs <ArrowRight size={12} />
					</motion.p>
				</div>
				<section className="mt-10 grid grid-cols-2 gap-5 *:max-h-70">
					<BlogCard
						title="RayCasting in C"
						img="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bc5ouuXDw6ZkOvbGKSLvqw.png"
					/>
					<BlogCard
						title="Networking"
						img="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ZX1fzJq6cH1neKUT"
					/>
				</section>
			</motion.article>
		</AnimatePresence>
	);
}

export default InkSpace;
