import { Notepad } from "@phosphor-icons/react";
import Tooltip from "./Tooltip";

function Blogs({ style }: { style: string }) {
	return (
		<div className={style}>
			<Tooltip label="Blogs" />
			<Notepad size={32} className="block group-hover:hidden" />
			<Notepad
				size={32}
				className="hidden group-hover:block"
				weight="duotone"
			/>
			{/* Blog */}
		</div>
	);
}

export default Blogs;
