'use client';

import { useRouter } from 'next/navigation';
import Playwrite from './fonts/playwrite';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Page = () => {
	const router = useRouter();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<motion.div
			className="md:h-screen flex flex-col gap-8 mt-50 md:m-0 p-10
				justify-center items-center text-black dark:text-white"
		>
			<motion.p
				initial={{ opacity: 0, scale: 0.3 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ type: 'spring', stiffness: 120, damping: 20 }}
				className={`text-3xl ${Playwrite.className}`}
			>
				{'404 - PAGE NOT FOUND'}
			</motion.p>
			<motion.div
				initial={{ opacity: 0, scale: 0.3 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ type: 'spring', stiffness: 120, damping: 20 }}
			>
				<Image
					src="/computer-guy.png"
					width={405}
					height={405}
					alt="Computer Guy"
					className="rounded-lg"
				/>
			</motion.div>
			<motion.button
				className="relative md:text-md rounded-full hover:bg-gray-200/25 bg-gray-200/60 
					dark:bg-white/15 px-6 py-3 cursor-pointer items-center
					dark:hover:bg-white/5 hover:ring-1 ring-gray-400 
					dark:ring-white/20 duration-200 text-sm transition-all
					hover:scale-106 flex gap-3 group hover:pr-12"
				onClick={() => router.push('/')}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
			>
				Back to Home
				<ArrowRightIcon
					size={22}
					className="absolute top-0 translate-y-1/2 left-32 opacity-0 
						scale-90 group-hover:opacity-100 group-hover:scale-100
						transition-all duration-200"
				/>
			</motion.button>
		</motion.div>
	);
};

export default Page;
