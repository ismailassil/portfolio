import { buttons } from '@/app/info/Buttons';
import { motion } from 'framer-motion';
import Button from './About';

const MainButtons = () => {
	return (
		<section className="gap-4 grid grid-cols-2 sm:grid-cols-4">
			{buttons.map((ref, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0, y: 30, rotate: 20, scale: 0.5 }}
					animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
					transition={{ delay: i * 0.2, duration: 0.3 }}
				>
					<Button
						key={i}
						tooltip={ref.tooltip}
						href={ref.href}
						Icon={ref.Icon}
					/>
				</motion.div>
			))}
		</section>
	);
};

export default MainButtons;
