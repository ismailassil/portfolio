import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import techIcons from '../info/Tech';

function MyDevSpace() {
	return (
		<AnimatePresence>
			<motion.article
				className="mt-20 relative dark:text-gray-200"
				id="skills"
			>
				<div className="relative">
					<motion.h1
						transition={{ type: 'spring', stiffness: 100, damping: 10 }}
						className="relative text-2xl md:text-3xl font-bold 
							cursor-pointer select-none"
					>
						My DevSpace
					</motion.h1>
				</div>
				<AnimatePresence>
					<motion.section
						className={`mt-10 text-justify text-gray-700 leading-5 grid 
							grid-cols-2 sm:grid-cols-3 gap-3
							`}
					>
						{techIcons.map((tech, i) => (
							<motion.div
								key={i}
								whileHover={{ scale: 1.03, rotate: 2 }}
								whileTap={{ scale: 0.95, rotate: 4 }}
								className="flex gap-3 ring-2 ring-red-900/12 rounded-sm px-2
								items-center h-12 cursor-pointer hover:ring-indigo-500/50
								hover:bg-gray-100 bg-gray-50 select-none dark:bg-[#191919] 
								dark:text-gray-300 dark:ring-white/10 dark:ring-1 dark:backdrop-blur-lg
								hover:shadow-md dark:hover:bg-gray-800"
							>
								{tech.tag}
								<p>{tech.label}</p>
							</motion.div>
						))}
					</motion.section>
				</AnimatePresence>
			</motion.article>
		</AnimatePresence>
	);
}

export default MyDevSpace;
