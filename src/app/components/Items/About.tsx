import Tooltip from './Tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type ButtonsProps = {
	tooltip: string;
	href: string;
	Icon: React.ElementType;
};

function Button({ tooltip, href, Icon }: ButtonsProps) {
	const [isHover, setIsHover] = useState(false);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				whileHover={{ scale: 1.09, rotate: -1 }}
				transition={{
					type: 'spring',
					stiffness: 150,
					damping: 10,
				}}
				whileTap={{ scale: 0.95 }}
				className={`relative group w-fit cursor-pointer ring-2 px-7 py-3 
					rounded-sm duration-200 bg-white/80 dark:bg-black/30
					${isHover && 'ring-orange-400 shadow-md z-10 hover:fill-oklch-light'}`}
				onClick={() => (window.location.href = href)}
			>
				<AnimatePresence mode="wait">
					{isHover && <Tooltip label={tooltip} />}
				</AnimatePresence>
				<AnimatePresence mode="wait">
					<motion.div
						animate={{
							scale: isHover ? 1.12 : 1,
							rotate: isHover ? 2 : 0,
						}}
						transition={{
							type: 'spring',
							stiffness: 200,
							damping: 14,
						}}
					>
						<Icon
							size={32}
							className={`duration-200 
								${
									isHover
										? 'fill-oklch-light dark:fill-oklch-light'
										: 'fill-gray-700 dark:fill-gray-200'
								}
							  `}
							weight={isHover ? 'duotone' : 'regular'}
						/>
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</AnimatePresence>
	);
}

export default Button;
