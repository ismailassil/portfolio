import spaceGrotesk from "@/app/fonts/spaceGrotesk";
import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

function BlogCard({ title, img }: { title: string; img: string }) {
	const [isHover, setIsHover] = useState(false);

	return (
		<AnimatePresence>
			<motion.div
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				whileHover={{
					scale: 1.03,
					rotate: 1,
				}}
				whileTap={{
					scale: 0.94,
					rotate: -2,
				}}
				transition={{
					duration: 0.3,
					type: "spring",
					stiffness: 320,
					damping: 10,
				}}
				className="w-full select-none overflow-hidden
								cursor-pointer bg-gray-50 ring-gray-200
								hover:ring-[#9c7a6e43] hover:shadow-md
								group ring-2 p-2 rounded-xl"
			>
				<div
					className="flex items-center border-3 border-gray-200
								hover:border-[#9c7a6e7a] duration-500 justify-center
								rounded-lg overflow-hidden"
				>
					<Image
						src={img}
						width={600}
						height={100}
						alt="Blog Image"
						className="object-cover"
						style={
							{ WebkitUserDrag: "none" } as React.CSSProperties
						}
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
							key={isHover ? "duotone" : "regular"}
							initial={{ opacity: 0, y: -4 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 4 }}
							transition={{ duration: 0.15 }}
						>
							<ArrowUpRight
								size={20}
								weight={isHover ? "duotone" : "regular"}
								color={isHover ? "#008080" : "black"}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default BlogCard;
