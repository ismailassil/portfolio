import {
	ArrowLineUpRight,
	ArrowUpRight,
	Circle,
	DotsThreeVertical,
	GithubLogo,
	LinkedinLogo,
	Notepad,
	User,
} from "@phosphor-icons/react";
import { Folder } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";
import NavItem from "./Items/NavItem";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
	const [tooltip, setTooltip] = useState(false);
	const [options, setOptions] = useState(false);
	const [links, setLinks] = useState(false);

	const optionRef = useRef<HTMLDivElement>(null);
	const dotRef = useRef<SVGSVGElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (
				dotRef &&
				!dotRef.current?.contains(e.target as Node) &&
				optionRef &&
				!optionRef.current?.contains(e.target as Node)
			) {
				setOptions(false);
			}
			if (
				linksRef &&
				!linksRef.current?.contains(e.target as Node) &&
				arrowRef &&
				!arrowRef.current?.contains(e.target as Node)
			) {
				setLinks(false);
			}
		}

		document.addEventListener("mousedown", handleClick);

		return () => document.removeEventListener("mousedown", handleClick);
	}, []);

	const isTooltip = !options && !links && tooltip;

	return (
		<>
			<motion.nav
				initial={{ opacity: 0, y: 100, scale: 0.5 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				exit={{ opacity: 0, y: 100, scale: 0.5 }}
				transition={{ type: "spring", duration: 0.5 }}
				className="fixed bottom-10 left-1/2 -translate-x-1/2
					rounded-full *:rounded-full backdrop-blur-xs
					bg-black/55 *:cursor-pointer *:p-2
					flex px-1 py-1 duration-400 transition-all
					*:hover:bg-white/10 *:hover:scale-110 *:duration-400
					*:transition-all ring-2 ring-black/3"
			>
				<NavItem isTooltip={isTooltip} label="Home">
					<Circle size={25} color="white" />
				</NavItem>
				<NavItem isTooltip={isTooltip} label="Pojects">
					<Folder size={25} color="white" />
				</NavItem>
				<NavItem isTooltip={isTooltip} label="About Me">
					<User size={25} color="white" />
				</NavItem>
				<NavItem isTooltip={isTooltip} label="Blogs">
					<Notepad size={25} color="white" />
				</NavItem>
				<NavItem isTooltip={isTooltip} label="Links">
					<ArrowUpRight
						ref={arrowRef}
						size={25}
						color="white"
						onClick={() => setLinks(!links)}
					/>
				</NavItem>
				<NavItem isTooltip={isTooltip} label="Options">
					<DotsThreeVertical
						ref={dotRef}
						size={25}
						color="white"
						onClick={() => setOptions(!options)}
					/>
				</NavItem>
			</motion.nav>
			{options && (
				<div
					ref={optionRef}
					className="fixed left-1/2 -translate-x-5 bottom-23
						bg-black/55 backdrop-blur-xs rounded-md *:px-4 *:py-1.5 *:duration-300 *:transition-all
						text-white py-1.5 gap-2 *:cursor-pointer *:hover:bg-black/10"
				>
					<button
						className="flex gap-2 items-center text-sm"
						onClick={() => setTooltip(!tooltip)}
					>
						{
							<Circle
								size={12}
								weight={tooltip ? "fill" : "bold"}
								className="transition-all duration-400"
								color={tooltip ? "orange" : "white"}
							/>
						}
						Toogle Tooltip
					</button>
				</div>
			)}
			<AnimatePresence initial={false} mode="wait">
				{links && (
					<motion.div
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							// delay: 0.2,
							type: "spring",
							// bounce: 0.6,
							// stiffness: 300,
						}}
						exit={{ y: 10, opacity: 0 }}
						ref={linksRef}
						className="fixed left-1/2 -translate-x-1/2 bottom-23
						bg-black/55 backdrop-blur-xs rounded-md *:px-2 *:py-1.5
						*:duration-300 *:transition-all
						text-white p-3 gap-2 flex *:cursor-pointer *:hover:bg-black/10 *:rounded-md"
					>
						<button className="flex gap-2 items-center text-sm justify-between min-w-37 group">
							<div className="flex gap-2 items-center">
								<GithubLogo size={24} color="white" /> Github{" "}
							</div>
							<ArrowLineUpRight
								size={20}
								className="group-hover:block hidden"
							/>
						</button>
						<button className="flex gap-2 items-center text-sm justify-between group min-w-37">
							<div className="flex gap-2 items-center">
								<LinkedinLogo size={24} color="white" />{" "}
								Linkedin{" "}
							</div>
							<ArrowLineUpRight
								size={20}
								className="group-hover:block hidden"
							/>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default NavBar;
