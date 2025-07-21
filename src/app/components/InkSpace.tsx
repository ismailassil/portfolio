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
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ amount: 1, once: true }}
							className="text-2xl md:text-3xl font-bold select-none"
						>
							InkSpace
						</motion.h1>
					</div>
					<motion.p
						className="hover:underline text-gray-400
							items-center text-md cursor-pointer select-none flex gap-2 flex-nowrap text-sm md:text-base"
						onClick={() => window.open('https://iassil.notion.site/')}
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						viewport={{ amount: 1, once: true }}
					>
						View all Blogs <ArrowRight size={12} />
					</motion.p>
				</div>
				<section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
					<BlogCard
						i={0}
						title="Deep Dive Into Docker"
						img="/projects/docker.jpg"
						link="https://iassil.notion.site/docker"
					/>
					<BlogCard
						i={1}
						title="Spring Boot for Beginners"
						img="/projects/spring-boot.jpg"
						link="https://iassil.notion.site/spring-boot"
					/>
					<BlogCard
						i={2}
						title="RayCasting in C"
						img="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bc5ouuXDw6ZkOvbGKSLvqw.png"
						link="https://medium.com/@ismailassil/ray-casting-c-8bfae2c2fc13"
					/>
					<BlogCard
						i={3}
						title="Computer Networking"
						img="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ZX1fzJq6cH1neKUT"
						link="https://medium.com/@ismailassil/networking-726246dd2177"
					/>
				</section>
			</motion.article>
		</AnimatePresence>
	);
}

export default InkSpace;
