import Image from 'next/image';
import React from 'react';

const ScrollGif = () => {
	return (
		<Image
			src="/scrollDown.gif"
			width={50}
			height={90}
			alt="Scroll Down Animation"
			className="absolute bottom-10 cursor-pointer dark:invert-100"
			unoptimized
			onClick={() => (window.location.href = '#aboutme')}
		/>
	);
};

export default ScrollGif;
