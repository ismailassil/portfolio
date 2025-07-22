import { SunDimIcon, MoonIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react'; // adjust path as needed
import { useTheme } from '../context/ThemeContext';
import { useEffect, useRef, useState } from 'react';
import ThemeOptions from './ThemeOptions';

function ThemeSwitcher() {
	const { mode, isDark, toggleDark, toggleLight } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	function handleMouseEnter() {
		timerRef.current = setTimeout(() => {
			setShowOptions(true);
		}, 2000);
	}

	function handleMouseLeave() {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			setShowOptions(false);
		}
	}

	return (
		<AnimatePresence mode="wait">
			<div
				className="absolute top-10 right-5 cursor-pointer
							rounded-full px-4 p-2 hover:scale-102 
							transition-all duration-300"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<ThemeOptions show={showOptions} />
				<motion.div
					key={mode}
					initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					onClick={isDark ? toggleLight : toggleDark}
				>
					{isDark ? (
						<SunDimIcon size={24} className="animate-spinner" />
					) : (
						<MoonIcon size={24} />
					)}
				</motion.div>
			</div>
		</AnimatePresence>
	);
}

export default ThemeSwitcher;
