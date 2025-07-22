import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LaptopIcon, MoonIcon, SunDimIcon } from '@phosphor-icons/react';
import { useTheme } from '../context/ThemeContext';

const ThemeOptions = ({ show }: { show: boolean }) => {
	const { mode, toggleDark, toggleLight, toggleSystem } = useTheme();

	return (
		<AnimatePresence initial={false} mode="wait">
			{show && (
				<motion.div
					className="flex gap-1 rounded-full bg-white 
						dark:bg-black ring-2 absolute left-1/2 -translate-1/2 top-1/2
						ring-gray-400/25 px-1 py-1 *:cursor-pointer z-10 
						*:dark:fill-gray-300 *:dark:hover:bg-gray-700
						*:hover:bg-gray-200/50 *:rounded-full *:p-1 *:fill-gray-700
						*:duration-300 *:hover:scale-102"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					transition={{
						type: 'spring',
						duration: 0.5,
						stiffness: 120,
					}}
				>
					<SunDimIcon
						size={30}
						className={
							mode === 'light' ? 'bg-gray-200/50 dark:bg-gray-800' : ''
						}
						onClick={toggleLight}
					/>
					<MoonIcon
						size={30}
						className={
							mode === 'dark' ? 'bg-gray-200/50 dark:bg-gray-800' : ''
						}
						onClick={toggleDark}
					/>
					<LaptopIcon
						size={30}
						className={
							mode === 'system'
								? 'bg-gray-200/50 dark:bg-gray-800'
								: ''
						}
						onClick={toggleSystem}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ThemeOptions;
