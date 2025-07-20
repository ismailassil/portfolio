import React, { useRef, useEffect } from 'react';

const InteractiveDots = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const handleMouseMove = (e: MouseEvent) => {
			const x = (e.clientX / window.innerWidth) * 100;
			const y = (e.clientY / window.innerHeight) * 100;
			el.style.setProperty('--mouse-x', `${x}%`);
			el.style.setProperty('--mouse-y', `${y}%`);
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 pointer-events-none z-[-10] dark:bg-[#121212]"
			style={
				{
					'--mouse-x': '50%',
					'--mouse-y': '50%',
				} as React.CSSProperties
			}
		>
			{/* Base dot grid */}
			<div
				className="absolute inset-0"
				style={{
					backgroundSize: '20px 20px',
					backgroundImage:
						'radial-gradient(var(--dot-color) 1px, transparent 1px)',
				}}
			/>

			{/* Blue radial spotlight */}
			<div
				className="absolute inset-0"
				style={{
					backgroundSize: '20px 20px',
					backgroundImage:
						'radial-gradient(#3b82f6 0.5px, transparent 1px)',
					maskImage:
						'radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y), black 80%, transparent 100%)',
					WebkitMaskImage:
						'radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y), black 80%, transparent 100%)',
					transition: 'mask-position 0.1s, -webkit-mask-position 0.1s',
				}}
			/>
		</div>
	);
};

export default InteractiveDots;
