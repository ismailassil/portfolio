'use client';

import './globals.css';
import dmSans from './fonts/geistSans';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { AnimatePresence, motion } from 'motion/react';
import InteractiveDots from './components/InteractiveDots';
import { ThemeProvider } from './context/ThemeContext';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		function handleScrollY() {
			if (window.scrollY > 150) {
				setShowNav(true);
			} else {
				setShowNav(false);
			}
		}

		document.addEventListener('scroll', handleScrollY);

		return () => {
			document.removeEventListener('scroll', handleScrollY);
		};
	});

	useEffect(() => {
		document.title = 'Portfolio | iassil';
	});

	return (
		<html lang="en" className="dark">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@master/src/app/ci.min.css"
				/>
				<link rel="icon" href="/favicon.svg" />
			</head>
			<body className={`${dmSans.className} antialiased`}>
				<ThemeProvider>
					<InteractiveDots />
					{children}
					<SpeedInsights />
					<Analytics />
					<AnimatePresence initial={false} mode="wait">
						{showNav ? (
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
								<NavBar key="nav" />
							</motion.div>
						) : null}
					</AnimatePresence>
				</ThemeProvider>
			</body>
		</html>
	);
}
