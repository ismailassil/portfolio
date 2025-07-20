import Image from 'next/image';

function Footer() {
	return (
		<footer className="w-full mt-25 mb-25 flex flex-col gap-5 items-center justify-center">
			<div>
				<Image
					src="/signature.svg"
					width={100}
					height={40}
					alt="Signature"
					className='dark:invert-90'
				/>
			</div>
			<p className='dark:text-gray-300'>{new Date().getFullYear()} &#169; Ismail Assil</p>
		</footer>
	);
}

export default Footer;
