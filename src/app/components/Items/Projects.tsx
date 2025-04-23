import { Folder, FolderOpen } from "@phosphor-icons/react";
import Tooltip from "../Tooltip";

function Projects({ style }: { style: string }) {
	return (
		<div className={style}>
			<Tooltip label="Projects" />
			<Folder size={32} className="block group-hover:hidden" />
			<FolderOpen
				size={32}
				className="hidden group-hover:block"
				weight="duotone"
			/>
			{/* Projects */}
		</div>
	);
}

export default Projects;
