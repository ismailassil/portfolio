import { SunDim } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react'; // adjust path as needed
import { useTheme } from '../context/ThemeContext';
import { Moon } from '@phosphor-icons/react/dist/ssr';

function ThemeSwitcher() {
	const { isDark, toggleTheme } = useTheme();

	return (
		<AnimatePresence mode="wait">
			<div
				className="absolute top-10 right-5 cursor-pointer
							rounded-full px-4 p-2 hover:scale-102 
							transition-all duration-300"
				onClick={toggleTheme}
			>
				<motion.div
					key={isDark ? 'dark' : 'light'}
					initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					{isDark ? (
						<SunDim
							size={24}
							className="animate-spinner dark:fill-white"
						/>
					) : (
						<Moon size={24} />
					)}
				</motion.div>
			</div>
		</AnimatePresence>
	);
}

export default ThemeSwitcher;
