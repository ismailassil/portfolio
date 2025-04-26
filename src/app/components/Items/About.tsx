import { User } from "@phosphor-icons/react";
import Tooltip from "./Tooltip";

function About({ style }: { style: string }) {
	return (
		<div
			className={style}
			onClick={() => (window.location.href = "#AboutMe")}
		>
			<Tooltip label="About Me" />
			<User size={32} className="block group-hover:hidden" />
			<User
				size={32}
				className="hidden group-hover:block"
				weight="duotone"
			/>
			{/* About */}
		</div>
	);
}

export default About;
