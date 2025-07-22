import React from 'react';
import {
	AtIcon,
	DiscordLogoIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const MainLinks = () => {
	return (
		<motion.section
			className="flex gap-4"
			initial={{ opacity: 0, y: 30, scale: 0.5 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				delay: 0.2,
				duration: 0.3,
				damping: 10,
				type: 'spring',
			}}
		>
			<AtIcon
				size={28}
				className="cursor-pointer hover:scale-110 duration-600 transition-all hover:fill-blue-700"
				onClick={() =>
					window.open(
						'mailto:ismailassil@duck.com?subject=Hello&body=How%20are%20you%3F',
					)
				}
			/>
			<GithubLogoIcon
				size={28}
				className="cursor-pointer hover:scale-110 duration-600 transition-all hover:fill-blue-700"
				onClick={() => window.open('https://github.com/ismailassil')}
			/>
			<LinkedinLogoIcon
				size={28}
				className="cursor-pointer hover:scale-110 duration-600 transition-all hover:fill-blue-700"
				onClick={() => window.open('https://linkedin.com/in/ismail-assil')}
			/>
			<DiscordLogoIcon
				size={28}
				className="cursor-pointer hover:scale-110 duration-600 transition-all hover:fill-blue-700"
				onClick={() => window.open('https://discord.com/users/musablade')}
			/>
		</motion.section>
	);
};

export default MainLinks;
