'use client';
import './globals.css';
import dmSans from './fonts/dmSans';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import InteractiveDots from './components/InteractiveDots';
import { ThemeProvider } from './context/ThemeContext';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import NavBarView from './components/Items/NavBar';

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
				<link rel="icon" href="/logo.png" />
			</head>
			<body className={`${dmSans.className} antialiased scroll-smooth`}>
				<ThemeProvider>
					<InteractiveDots />
					{children}
					<SpeedInsights />
					<Analytics />
					<AnimatePresence initial={false} mode="wait">
						{showNav ? <NavBarView /> : null}
					</AnimatePresence>
				</ThemeProvider>
			</body>
		</html>
	);
}
