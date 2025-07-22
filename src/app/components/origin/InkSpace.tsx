import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import BlogCard from '../Items/Cards/BlogCard';
import Title from '../Items/Title';
import SubTitle from '../Items/SubTitle';
import { blogPosts } from '../../info/Blogs';

function InkSpace() {
	return (
		<AnimatePresence>
			<motion.article className="pt-20 relative" id="blogs">
				<div className="flex justify-between dark:text-gray-200">
					<Title text="InkSpace" />
					<SubTitle
						text="View all Blogs"
						link="https://iassil.notion.site"
					/>
				</div>
				<section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
					{blogPosts.map((post, index) => (
						<BlogCard
							key={index}
							i={index}
							title={post.title}
							img={post.img}
							link={post.link}
						/>
					))}
				</section>
			</motion.article>
		</AnimatePresence>
	);
}

export default InkSpace;
