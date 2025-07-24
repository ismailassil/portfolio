import sora from '@/app/fonts/sora';
import { motion } from 'framer-motion';

const Greetings = () => {
	return (
		<motion.p
			initial={{ opacity: 0, x: 10 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				delay: 0.2,
				duration: 0.5,
			}}
			className={`text-2xl text-center sm:text-left ${sora.className}`}
		>
			Hi, I’m
		</motion.p>
	);
};

export default Greetings;
