import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import More from './More';
import { ArrowUp } from '@phosphor-icons/react';

type NuggetProps = {
	i: number;
	title: string;
	description: string;
	subtitle: string;
	skills: { title: string }[];
};

function NuggetCard({ i, title, description, subtitle, skills }: NuggetProps) {
	const [entered, setEntered] = useState(false);
	const [show, setShow] = useState(false);

	return (
		<AnimatePresence>
			<motion.div
				onMouseEnter={() => setEntered(true)}
				onMouseLeave={() => setEntered(false)}
				initial={{ opacity: 0, y: 40, scale: 0.95 }}
				whileInView={{
					opacity: 1,
					y: 0,
					scale: 1,
				}}
				transition={{
					duration: 0.5,
					delay: i * 0.08,
					ease: [0.25, 0.46, 0.45, 0.94],
				}}
				viewport={{ amount: 0.2, once: true }}
				whileHover={{
					scale: 1.02,
					y: -2,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				}}
				whileTap={{
					scale: 0.98,
					y: 0,
					transition: { duration: 0.1 },
				}}
				className="flex justify-between items-center ring-1 hover:ring-2
					ring-gray-200 px-4 py-4 rounded-md cursor-pointer bg-gray-50
					hover:ring-red-300 duration-200 dark:bg-black/20
					dark:text-gray-200 dark:ring-1 dark:ring-white/10 
					select-none"
				onClick={() => {
					setShow(!show);
				}}
			>
				<div className="w-full">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="font-bold">{title}</h2>
							<p className="text-sm text-gray-500">{subtitle}</p>
						</div>
						<AnimatePresence mode="wait">
							{!show ? (
								<motion.div
									key="More"
									initial={{
										opacity: 0,
										scale: 0.6,
										y: -10,
									}}
									animate={{
										opacity: 1,
										scale: 1,
										y: 0,
									}}
									transition={{
										duration: 0.5,
									}}
								>
									<More entered={entered} />
								</motion.div>
							) : (
								<motion.div
									key="ArrowUp"
									initial={{
										opacity: 0,
										scale: 0.6,
										y: 10,
									}}
									animate={{
										opacity: 1,
										scale: 1,
										y: 0,
									}}
									transition={{
										duration: 0.5,
									}}
								>
									<ArrowUp size={24} />
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					{show && (
						<>
							<p className="mt-3 text-base">{description}</p>
							<ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-base ">
								{skills.map((skill, index) => (
									<li
										key={index}
										className="flex items-start ring-1 ring-indigo-200 bg-indigo-100
											hover:text-white hover:bg-indigo-500 px-2 rounded-sm select-none
											duration-300 transition-all dark:ring-white/40 dark:bg-white/15"
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
	);
}

export default NuggetCard;
