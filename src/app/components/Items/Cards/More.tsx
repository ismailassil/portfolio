import { ArrowDown, Plus } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function More({ entered }: { entered: boolean }) {
	const variants = {
		initial: {
			opacity: 0,
			scale: 0.5,
		},
		animate: {
			opacity: 1,
			scale: 1,
		},
		exit: {
			opacity: 0,
			scale: 0.5,
			rotate: -45,
		},
	};

	return (
		<AnimatePresence mode="wait">
			{!entered ? (
				<motion.div
					key="plus"
					variants={variants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{
						duration: 0.1,
						ease: "easeInOut",
					}}
				>
					<Plus size={24} />
				</motion.div>
			) : (
				<motion.div
					key="arrowDown"
					variants={variants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{
						duration: 0.1,
						ease: "easeInOut",
					}}
				>
					<ArrowDown size={24} />
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default More;
