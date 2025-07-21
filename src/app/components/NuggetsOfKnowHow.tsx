import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import NuggetCard from './Items/Cards/NuggetCard';
import {
	SE_description,
	SE_skills,
	SE_subtitle,
	SE_title,
	UI_description,
	UI_skills,
	UI_subtitle,
	UI_title,
} from '../info/Nuggets';

function NuggetsOfKnowHow() {
	return (
		<AnimatePresence>
			<motion.article
				className="pt-20 relative dark:text-gray-200"
				id="skills"
			>
				<div className="relative">
					<motion.h1
						className="relative text-2xl md:text-3xl font-bold
								select-none"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ amount: 1, once: true }}
					>
						Nuggets of Know-How
					</motion.h1>
				</div>
				<AnimatePresence>
					<section
						className={`mt-10 text-lg text-gray-800 leading-loose flex flex-col gap-4`}
					>
						<NuggetCard
							i={0}
							title={SE_title}
							subtitle={SE_subtitle}
							description={SE_description}
							skills={SE_skills}
							/>
						<NuggetCard
							i={1}
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
