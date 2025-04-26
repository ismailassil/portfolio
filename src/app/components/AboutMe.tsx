import {
	Barbell,
	Laptop,
	PaintBrush,
	QuestionMark,
} from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import spaceGrotesk from "../fonts/spaceGrotesk";
import playwrite from "../fonts/playwrite";
import spaceMono from "../fonts/spaceMono";
import { useState } from "react";

function AboutMe() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<AnimatePresence>
			<motion.article className="mt-20 pt-20 relative" id="AboutMe">
				<div
					className="relative"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<motion.h1
						animate={{ x: isHovered ? 50 : 0 }}
						transition={{ type: "spring", stiffness: 300 }}
						className="relative text-3xl font-bold zigzag hover:line-through
								hover:text-primary cursor-pointer select-none"
					>
						About Me
					</motion.h1>

					<motion.div
						animate={{
							x: isHovered ? 0 : -30,
							rotate: isHovered ? 12 : 45,
							opacity: isHovered ? 1 : 0,
						}}
						className="absolute top-0 left-0 -z-0"
					>
						<QuestionMark size={38} weight="fill" color="#0554F2" />
					</motion.div>
				</div>
				<p
					className={`mt-10 text-justify text-lg text-gray-700 leading-relaxing`}
				>
					Hi, my name is <strong>Ismail Assil</strong>, an aspiring{" "}
					<strong>
						Software Engineering Student at{" "}
						<span className={spaceGrotesk.className}>1337</span>
					</strong>{" "}
					<Laptop
						size={24}
						color="#529f50"
						weight="duotone"
						className="inline-block"
					/>{" "}
					who wishes to participate in creating greener and more
					meaningful digital environments. When it comes to using
					design{" "}
					<PaintBrush
						size={24}
						color="#4599b5"
						weight="duotone"
						className="inline-block"
					/>{" "}
					as a means of communication, I follow an approach that is
					very much inclined towards{" "}
					<span
						className={`${spaceGrotesk.className} select-none mUnderline hover:text-red-600`}
					>
						Minimalism
					</span>
					,{" "}
					<span
						className={`${playwrite.className} italic hover:bg-gradient-to-r
								from-indigo-500 via-purple-500 to-red-500 bg-clip-text hover:text-transparent
								select-none ccUnderline
								`}
					>
						Creativity
					</span>
					, and{" "}
					<span
						className={`${spaceMono.className} italic tracking-tighter
								hover:text-orange-500 cUnderline select-none`}
					>
						thoughtfulness
					</span>
					. Learning new things, especially those that are nothing
					less than challenging for my cognitive abilities and that
					are beneficial to my professional development.{" "}
					<Barbell
						size={24}
						weight="duotone"
						color="#8267e4"
						className="inline-block rotate-12"
					/>
				</p>
			</motion.article>
		</AnimatePresence>
	);
}

export default AboutMe;
