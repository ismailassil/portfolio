"use client";
import { useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import baron from "baron";

export default function BaronScroll({
	setShowNav,
	children,
}: {
	setShowNav: (show: boolean) => void;
	children: React.ReactNode;
}) {
	const scrollerRef = useRef<HTMLDivElement>(null);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const baronInstanceRef = useRef<any>(null);

	useEffect(() => {
		if (!scrollerRef.current) return;

		const scrollerEl = scrollerRef.current.querySelector(
			".baron__scroller"
		) as HTMLElement;

		// Initialize Baron
		baronInstanceRef.current = baron({
			root: scrollerRef.current,
			scroller: ".baron__scroller",
			bar: ".baron__bar",
			barOnCls: "baron__bar_on",
		});

		// Scroll handler
		const handleScroll = () => {
			if (scrollerEl.scrollTop > 150) setShowNav(true);
			else setShowNav(false);

			// Update Baron (in case content changed)
			baronInstanceRef.current?.update?.();
		};

		scrollerEl.addEventListener("scroll", handleScroll);

		const updateBaron = () => baronInstanceRef.current?.update?.();
		window.addEventListener("resize", updateBaron);
		setTimeout(updateBaron, 100);
		setTimeout(updateBaron, 500);

		return () => {
			scrollerEl.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateBaron);
			baronInstanceRef.current?.dispose?.();
		};
	}, [setShowNav]);

	return (
		<div ref={scrollerRef} className="baron" style={{ height: "100vh" }}>
			<div className="baron__scroller">
				<div className="baron__content">{children}</div>
			</div>
			<div className="baron__track">
				<div className="baron__bar"></div>
			</div>
		</div>
	);
}
