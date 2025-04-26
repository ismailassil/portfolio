import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
	title: string;
	label: string;
	img: string;
};

function ProjectCard({ title, label, img }: ProjectCardProps) {
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
				className="w-full h-full
					select-none overflow-hidden cursor-pointer
					bg-gray-50 ring-gray-200 rounded-xl
					ring-2 hover:ring-[#746e9c7a]
					flex flex-col gap-2 p-4"
			>
				<div
					className="flex items-center border-3 border-gray-200
								hover:border-[#746e9c7a] duration-500 justify-center
								rounded-lg overflow-hidden h-[65%]"
				>
					<Image
						src={img}
						width={1000}
						height={900}
						alt="Descriptive Image"
						className="object-cover w-full h-full"
						style={
							{ WebkitUserDrag: "none" } as React.CSSProperties
						}
					/>
				</div>
				<div className="flex flex-col gap-2 py-1">
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-bold">{title}</h2>
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
