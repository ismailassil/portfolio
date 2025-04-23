import { Code } from "@phosphor-icons/react";
import Tooltip from "../Tooltip";

function Skills({ style }: { style: string }) {
	return (
		<div className={style}>
			<Tooltip label="Skills" />
			<Code size={32} className="block group-hover:hidden" />
			<Code
				size={32}
				className="hidden group-hover:block"
				weight="duotone"
			/>
			{/* Skills */}
		</div>
	);
}

export default Skills;
