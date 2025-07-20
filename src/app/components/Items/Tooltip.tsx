import { motion } from "framer-motion";

function Tooltip({ label }: { label: string }) {
	return (
		<motion.div
			key="tooltip"
			initial={{ opacity: 0, scale: 0.6, y: -4 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.6, y: -4 }}
			transition={{ duration: 0.2 }}
			className="absolute rounded-sm -bottom-10 backdrop-blur-md
				left-1/2 -translate-x-1/2 bg-black/2 px-3
				ring-1 ring-black/10
				py-1 text-nowrap text-xs"
		>
			{label}
		</motion.div>
	);
}

export default Tooltip;
