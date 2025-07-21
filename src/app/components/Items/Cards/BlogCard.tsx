import spaceGrotesk from '@/app/fonts/spaceGrotesk';
import { ArrowUpRight } from '@phosphor-icons/react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

interface BlogCardProps {
	i: number;
	title: string;
	img: string;
	link: string;
}

function BlogCard({ i, title, img, link }: BlogCardProps) {
	const [isHover, setIsHover] = useState(false);

	return (
		<AnimatePresence>
			<motion.div
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				whileHover={{
					scale: 1.01,
					rotate: 0.8,
				}}
				whileTap={{
					scale: 0.98,
					rotate: -2,
				}}
				transition={{
					duration: 0.3,
					type: 'spring',
					stiffness: 320,
					damping: 20,
				}}
				initial={{ opacity: 0, y: 60, scale: 0.9 }}
				whileInView={{
					opacity: 1,
					y: 0,
					scale: 1,
					transition: {
						duration: 0.6,
						delay: i * 0.1, // Add stagger if this is in a loop
						ease: 'easeOut',
					},
				}}
				viewport={{ amount: 0.2, once: true }}
				// whileHover={{
				// 	scale: 1.01,
				// 	rotate: 0.5,
				// 	y: -4, // Subtle lift effect
				// 	transition: { duration: 0.3, ease: 'easeOut' },
				// }}
				// whileTap={{
				// 	scale: 0.98,
				// 	rotate: -2,
				// 	transition: { duration: 0.1 },
				// }}
				className="w-full select-none overflow-hidden
								cursor-pointer bg-gray-50 ring-gray-200
								hover:ring-[#9c7a6e43] hover:shadow-md
								group ring-2 p-2 rounded-xl max-h-70 dark:bg-dark dark:ring-white/10 dark:text-gray-200"
				onClick={() => window.open(link)}
			>
				<div
					className="hidden sm:visible sm:flex items-center border-3 border-gray-200
								hover:border-[#9c7a6e7a] duration-500 justify-center
								rounded-lg overflow-hidden dark:border-white/10 h-[75%]"
				>
					<Image
						src={img}
						width={600}
						height={100}
						alt="Blog Image"
						className="object-cover w-full h-full"
						style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
					/>
				</div>
				<div
					className="p-4 text-lg font-bold flex gap-2 items-center
								w-full justify-between"
				>
					<span
						className={`${spaceGrotesk.className} group-hover:text-blog-card
										duration-500`}
					>
						{title}
						<span
							className="block max-w-0 group-hover:max-w-full
									transition-all duration-500 h-0.5 bg-blog-card"
						/>
					</span>
					<AnimatePresence mode="wait">
						<motion.div
							key={isHover ? 'duotone' : 'regular'}
							initial={{ opacity: 0, y: -4 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 4 }}
							transition={{ duration: 0.15 }}
						>
							<ArrowUpRight
								size={20}
								weight={isHover ? 'duotone' : 'regular'}
								className={`${isHover ? 'fill-[#008080] dark:fill-white' : 'fill-black dark:fill-gray-400'}`}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default BlogCard;
