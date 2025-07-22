import { CodeIcon } from "@phosphor-icons/react";
import Tooltip from "./Tooltip";

function Skills({ style }: { style: string }) {
	return (
		<div
			className={style}
			onClick={() => (window.location.href = "#SkillSet")}
		>
			<Tooltip label="Skills" />
			<CodeIcon size={32} className="block group-hover:hidden" />
			<CodeIcon
				size={32}
				className="hidden group-hover:block"
				weight="duotone"
			/>
			{/* Skills */}
		</div>
	);
}

export default Skills;
