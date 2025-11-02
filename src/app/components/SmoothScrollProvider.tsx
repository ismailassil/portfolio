"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScrollProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const scrollerElement = document.querySelector(
			".baron__scroller"
		) as HTMLElement;

		if (scrollerElement) {
			const lenis = new Lenis({
				wrapper: scrollerElement,
				content: scrollerElement.firstChild as HTMLElement,
				lerp: 0.1,
				duration: 1.2,
				smoothWheel: true,
			});

			function raf(time: number) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);

			return () => {
				lenis.destroy();
			};
		}
	}, []);

	return <>{children}</>;
}
