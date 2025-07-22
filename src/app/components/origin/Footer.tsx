import Image from 'next/image';
import { motion } from 'framer-motion';

function Footer() {
	return (
		<footer className="w-full mt-25 mb-25 flex flex-col gap-5 items-center justify-center">
			<motion.div
				initial={{ opacity: 0, scale: 0.3 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.5,
					type: 'spring',
					damping: 20,
					stiffness: 180,
				}}
				viewport={{ once: true }}
			>
				<Image
					src="/signature.svg"
					width={100}
					height={40}
					alt="Signature"
					className="dark:invert-90"
				/>
			</motion.div>
			<motion.p
				className="dark:text-gray-300"
				initial={{ opacity: 0, scale: 0.3 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.5,
					type: 'spring',
					damping: 20,
					stiffness: 180,
					delay: 0.1,
				}}
				viewport={{ once: true }}
			>
				{new Date().getFullYear()} &#169; Ismail Assil
			</motion.p>
		</footer>
	);
}

export default Footer;
