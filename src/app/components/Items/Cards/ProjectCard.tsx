import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type ProjectCardProps = {
	i: number;
	title: string;
	label: string;
	img: string;
	link: string;
};

function ProjectCard({ i, title, label, img, link }: ProjectCardProps) {
	const [isHover, setIsHover] = useState(false);

	return (
		<AnimatePresence>
			<motion.div
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
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
				whileHover={{
					scale: 1.01,
					rotate: 0.5,
					y: -4, // Subtle lift effect
					transition: { duration: 0.3, ease: 'easeOut' },
				}}
				whileTap={{
					scale: 0.98,
					rotate: -2,
					transition: { duration: 0.1 },
				}}
				className="w-full h-full
						select-none overflow-hidden cursor-pointer
						bg-gray-50 ring-gray-200 rounded-xl
						ring-2 hover:ring-[#746e9c7a]
						flex flex-col gap-2 p-4 dark:bg-dark dark:ring-white/10"
				onClick={() => window.open(link)}
			>
				<div
					className="hidden sm:visible sm:flex items-center border-3 border-gray-200
								hover:border-[#746e9c7a] duration-500 justify-center
								rounded-lg overflow-hidden md:h-[65%] dark:border-white/10"
				>
					<Image
						src={img}
						width={1000}
						height={900}
						alt="Descriptive Image"
						className="object-cover w-full h-full"
						style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
					/>
				</div>
				<div className="flex flex-col gap-2 py-1 flex-1">
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-bold">{title}</h2>
						<AnimatePresence mode="wait">
							<motion.div
								key={isHover ? 'duotone' : 'regular'}
								initial={{ opacity: 0, y: -4 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 4 }}
								transition={{ duration: 0.15 }}
							>
								<ArrowUpRightIcon
									size={20}
									weight={isHover ? 'duotone' : 'regular'}
								/>
							</motion.div>
						</AnimatePresence>
					</div>
					<p className="text-sm line-clamp-2">{label}</p>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default ProjectCard;
