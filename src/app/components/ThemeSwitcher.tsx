import { Moon, SunDim } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";

function ThemeSwitcher() {
	const [isDark, setIsDark] = useState(false);

	return (
		<AnimatePresence mode="wait">
			<div
				className="absolute top-10 right-5 cursor-pointer
							bg-white rounded-full ring-2 px-4 p-2"
			>
				<motion.div
					key={isDark ? "dark" : "light"}
					initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					onClick={() => setIsDark(!isDark)}
				>
					{isDark ? (
						<SunDim size={24} className="animate-spinner" />
					) : (
						<Moon size={24} />
					)}
				</motion.div>
			</div>
		</AnimatePresence>
	);
}

export default ThemeSwitcher;
