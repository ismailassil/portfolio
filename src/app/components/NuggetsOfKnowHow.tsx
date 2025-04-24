import { ArrowUp, Graph } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";
import More from "./Items/More";
import spaceGrotesk from "../fonts/spaceGrotesk";

function NuggetsOfKnowHow() {
	const [isHovered, setIsHovered] = useState(false);
	const [enteredUX, setEnteredUX] = useState(false);
	const [entered13, setEntered13] = useState(false);
	const [show, setShow] = useState({ ux: false, sc: false });

	const uiSkills = [
		{ title: "User Research" },
		{ title: "Wireframing & Prototyping" },
		{ title: "UI Design" },
		{ title: "Usability Testing" },
		{ title: "Responsive Design" },
		{ title: "Collaboration" },
	];

	const skills = [
		{ title: "Algorithmic Problem-Solving" },
		{ title: "Unix & Shell Scripting" },
		{ title: "Git Version Control" },
		{ title: "Team Collaboration" },
	];

	return (
		<AnimatePresence>
			<motion.section className="pt-20 relative" id="SkillSet">
				<div
					className="relative inline-block"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<motion.h1
						animate={{ x: isHovered ? 50 : 0 }}
						transition={{ type: "spring", stiffness: 300 }}
						className="relative text-3xl font-bold zigzag hover:line-through
								hover:text-[#FF2200] cursor-pointer select-none z-1"
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
					<div
						className={`mt-10 text-lg text-gray-800 leading-loose flex flex-col gap-4`}
					>
						<motion.div
							onMouseEnter={() => setEnteredUX(true)}
							onMouseLeave={() => setEnteredUX(false)}
							whileHover={{ scale: 1.01 }}
							transition={{ duration: 0.4 }}
							whileTap={{ scale: 0.99 }}
							className="relative flex justify-between items-center ring-1 hover:ring-2
								ring-gray-200 px-4 py-4 rounded-md cursor-pointer bg-gray-50
								hover:ring-red-300 duration-200
								select-none"
							onClick={() => {
								setShow({ ...show, ux: !show.ux });
							}}
						>
							<div className="w-full">
								<div className="flex items-center justify-between">
									<div>
										<h2 className="font-bold">
											UX/UI Design
										</h2>
										<p className="text-sm text-gray-500">
											Self Learned
										</p>
									</div>
									{!show.ux ? (
										<More entered={enteredUX} />
									) : (
										<ArrowUp size={24} />
									)}
								</div>
								{show.ux && (
									<>
										<p className="mt-3 text-base bg-white z-10">
											I have gained a strong foundation in
											UX/UI principles, for instance, user
											research, wireframing, and
											prototyping, so I could easily
											design user-centered and intuitive
											designs.
										</p>
										<ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-base ">
											{uiSkills.map((skill, index) => (
												<li
													key={index}
													className="flex items-start ring-1 ring-red-200 bg-red-100
										hover:text-white hover:bg-red-500 px-2 rounded-sm select-none
										duration-300 transition-all
											"
												>
													{skill.title}
												</li>
											))}
										</ul>
									</>
								)}
							</div>
						</motion.div>
						<AnimatePresence>
							<motion.div
								onMouseEnter={() => setEntered13(true)}
								onMouseLeave={() => setEntered13(false)}
								whileHover={{ scale: 1.01 }}
								transition={{ duration: 0.4 }}
								whileTap={{ scale: 0.99 }}
								className="flex justify-between items-center ring-1 hover:ring-2
									ring-gray-200 px-4 py-4 rounded-md cursor-pointer bg-gray-50 hover:ring-red-300 duration-200
									select-none"
								onClick={() => {
									setShow({ ...show, sc: !show.sc });
								}}
							>
								<div className="w-full">
									<div className="flex items-center justify-between">
										<div>
											<h2 className="font-bold">
												Software Engineering
											</h2>
											<p className="text-sm text-gray-500">
												<span
													className={
														spaceGrotesk.className
													}
												>
													1337
												</span>{" "}
												Coding School
											</p>
										</div>
										<AnimatePresence>
											{!show.sc ? (
												<motion.div
													initial={{
														opacity: 0,
														scale: 0.6,
													}}
													animate={{
														opacity: 1,
														scale: 1,
													}}
													transition={{
														duration: 0.3,
													}}
												>
													<More entered={entered13} />
												</motion.div>
											) : (
												<ArrowUp size={24} />
											)}
										</AnimatePresence>
									</div>
									{show.sc && (
										<>
											<p className="mt-3 text-base">
												Since I started exploring the
												potential of joining the{" "}
												<span
													className={
														spaceGrotesk.className
													}
												>
													1337
												</span>
												, my new skills are more on the
												practical side and the
												challenges are of another
												caliber. This is a real
												eye-opener for me as I am not
												just a tech-savvy guy but also
												more of a team player and a
												problem solver. These are
												definitely the techniques that
												help me get ready for every
												demanding mission in tech.
											</p>
											<ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-base ">
												{skills.map((skill, index) => (
													<li
														key={index}
														className="flex items-start ring-1 ring-indigo-200 bg-indigo-100
															hover:text-white hover:bg-indigo-500 px-2 rounded-sm select-none
															duration-300 transition-all
														"
													>
														{skill.title}
													</li>
												))}
											</ul>
										</>
									)}
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</AnimatePresence>
			</motion.section>
		</AnimatePresence>
	);
}

export default NuggetsOfKnowHow;
