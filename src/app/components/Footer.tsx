import Image from "next/image";

function Footer() {
	return (
		<footer className="w-full mt-30 flex flex-col gap-5 items-center justify-center">
			<div>
				<Image
					src="/signature.svg"
					width={100}
					height={40}
					alt="Signature"
				/>
			</div>
			<p>2025 &#169; Ismail Assil</p>
		</footer>
	);
}

export default Footer;
