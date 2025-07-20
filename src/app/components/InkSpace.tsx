import { ArrowRight } from '@phosphor-icons/react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import BlogCard from './Items/Cards/BlogCard';

function InkSpace() {
	return (
		<AnimatePresence>
			<motion.article className="pt-20 relative" id="blogs">
				<div className="flex justify-between dark:text-gray-200">
					<div className="relative">
						<motion.h1
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 10,
							}}
							className="text-2xl md:text-3xl font-bold cursor-pointer select-none"
						>
							InkSpace
						</motion.h1>
					</div>
					<motion.p
						className="hover:underline text-gray-400
							items-center text-md cursor-pointer select-none flex gap-2 flex-nowrap text-sm md:text-base"
						onClick={() =>
							window.open('https://medium.com/@ismailassil')
						}
					>
						View all Blogs <ArrowRight size={12} />
					</motion.p>
				</div>
				<section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
					<BlogCard
						title="RayCasting in C"
						img="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bc5ouuXDw6ZkOvbGKSLvqw.png"
						link="https://medium.com/@ismailassil/ray-casting-c-8bfae2c2fc13"
					/>
					<BlogCard
						title="Networking"
						img="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ZX1fzJq6cH1neKUT"
						link="https://medium.com/@ismailassil/networking-726246dd2177"
					/>
				</section>
			</motion.article>
		</AnimatePresence>
	);
}

export default InkSpace;
