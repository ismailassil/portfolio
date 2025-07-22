import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import NuggetCard from './../Items/Cards/NuggetCard';
import Title from './../Items/Title';
import { education } from '../../info/Nuggets';

function NuggetsOfKnowHow() {
	return (
		<AnimatePresence>
			<motion.article
				className="pt-20 relative dark:text-gray-200"
				id="skills"
			>
				<Title text="Nuggets of Know-How" />
				<AnimatePresence>
					<section
						className={`mt-10 text-lg text-gray-800 leading-loose flex flex-col gap-4`}
					>
						{education.map((ed, i) => (
							<NuggetCard
								key={i}
								i={i}
								title={ed.title}
								subtitle={ed.subtitle}
								description={ed.description}
								skills={ed.skills}
							/>
						))}
					</section>
				</AnimatePresence>
			</motion.article>
		</AnimatePresence>
	);
}

export default NuggetsOfKnowHow;
