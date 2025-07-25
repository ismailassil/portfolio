import { BarbellIcon, LaptopIcon, PaintBrushIcon } from '@phosphor-icons/react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import spaceGrotesk from '../../fonts/spaceGrotesk';
import playwrite from '../../fonts/playwrite';
import spaceMono from '../../fonts/spaceMono';
import Title from '../Items/Title';

function AboutMe() {
	return (
		<AnimatePresence>
			<motion.article
				className="mt-20 pt-20 relative dark:text-gray-200"
				id="aboutme"
			>
				<Title text="About Me" />
				<motion.p
					className={`mt-10 text-justify text-lg
						text-gray-700 leading-relaxing dark:text-gray-200`}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ amount: 1, once: true }}
				>
					Hi, my name is <strong>Ismail Assil</strong>, an aspiring{' '}
					<strong>
						Software Engineering Student at{' '}
						<span className={spaceGrotesk.className}>1337</span>
					</strong>{' '}
					<LaptopIcon
						size={24}
						color="#529f50"
						weight="duotone"
						className="inline-block"
					/>{' '}
					who wishes to participate in creating greener and more meaningful
					digital environments. When it comes to using design{' '}
					<PaintBrushIcon
						size={24}
						color="#4599b5"
						weight="duotone"
						className="inline-block"
					/>{' '}
					as a means of communication, I follow an approach that is very
					much inclined towards{' '}
					<span
						className={`${spaceGrotesk.className} select-none mUnderline hover:text-red-600`}
					>
						Minimalism
					</span>
					,{' '}
					<span
						className={`${playwrite.className} italic hover:bg-gradient-to-r
								from-indigo-500 via-purple-500 to-red-500 bg-clip-text hover:text-transparent
								select-none ccUnderline
								`}
					>
						Creativity
					</span>
					, and{' '}
					<span
						className={`${spaceMono.className} italic tracking-tighter
								hover:text-orange-500 cUnderline select-none`}
					>
						thoughtfulness
					</span>
					. Learning new things, especially those that are nothing less
					than challenging for my cognitive abilities and that are
					beneficial to my professional development.{' '}
					<BarbellIcon
						size={24}
						weight="duotone"
						color="#8267e4"
						className="inline-block rotate-12"
					/>
				</motion.p>
			</motion.article>
		</AnimatePresence>
	);
}

export default AboutMe;
