import sora from '@/app/fonts/sora';
import { motion } from 'framer-motion';

const Name = () => {
	const text = 'Ismail Assil';
	const characters = text.split('');

	return (
		<motion.h1
			className={`${sora.className} text-7xl font-black text-center cursor-pointer`}
		>
			{characters.map((ch, i) => (
				<motion.span
					key={i}
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						delay: i * 0.1,
						duration: 0.5,
					}}
				>
					{ch}
				</motion.span>
			))}
		</motion.h1>
	);
};

export default Name;
