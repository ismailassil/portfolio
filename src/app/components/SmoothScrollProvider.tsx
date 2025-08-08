// components/SmoothScrollProvider.tsx
"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScrollProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			// smooth: true,
		});

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => lenis.destroy();
	}, []);

	return <>{children}</>;
}
