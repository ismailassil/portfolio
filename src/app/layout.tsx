"use client";

import "./globals.css";
import dmSans from "./fonts/geistSans";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { AnimatePresence } from "motion/react";

// export const metadata: Metadata = {
// 	title: "iassil",
// 	description: "My Portfolio",
// };

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

		document.addEventListener("scroll", handleScrollY);

		return () => {
			document.removeEventListener("scroll", handleScrollY);
		};
	});

	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@master/src/app/ci.min.css"
				/>
			</head>
			<body className={`${dmSans.className} antialiased`}>
				{children}
				<AnimatePresence initial={false}>
					{showNav ? <NavBar key="nav" /> : null}
				</AnimatePresence>
			</body>
		</html>
	);
}
