import { motion } from 'framer-motion';

const MainDescription = () => {
	return (
		<motion.p
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.2,
				duration: 0.5,
			}}
			className="text-lg font-light w-full max-w-[90%] md:max-w-[60%] text-center"
		>
			Software Engineering Student passionate about creating real-world
			solutions
		</motion.p>
	);
};

export default MainDescription;
