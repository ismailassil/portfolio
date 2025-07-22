import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ text }: { text: string }) => {
	return (
		<motion.h1
			className="text-2xl md:text-3xl font-bold select-none"
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			viewport={{ amount: 1, once: true }}
		>
			{text}
		</motion.h1>
	);
};

export default Title;
