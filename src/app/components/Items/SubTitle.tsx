import { ArrowRightIcon } from '@phosphor-icons/react';
import React from 'react';
import { motion } from 'framer-motion';

const SubTitle = ({ text, link }: { text: string; link: string }) => {
	return (
		<motion.p
			transition={{ duration: 0.6, ease: 'easeOut' }}
			initial={{ opacity: 0, x: 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ amount: 0.5, once: true }}
			className="text-md flex cursor-pointer flex-nowrap text-sm md:text-base
							items-center gap-2 text-gray-400 select-none hover:underline"
			onClick={() => window.open(link)}
		>
			{text} <ArrowRightIcon size={12} />
		</motion.p>
	);
};

export default SubTitle;
