import NavBarItem from '../NavBarItem';
import { motion } from 'framer-motion';

const NavBarView = () => {
	return (
		<motion.div
			key="nav-wrapper"
			initial={{
				opacity: 0,
				y: 100,
				scale: 0.5,
				rotate: 15,
			}}
			animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
			exit={{
				opacity: 0,
				y: 100,
				scale: 0.5,
				rotate: 15,
			}}
			transition={{ type: 'spring', duration: 0.5 }}
			className="fixed bottom-5 left-1/2 -translate-x-1/2"
		>
			<NavBarItem key="nav" />
		</motion.div>
	);
};

export default NavBarView;
