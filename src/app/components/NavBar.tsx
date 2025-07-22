'use client';

import {
	ArrowUpRightIcon,
	CircleIcon,
	DotsThreeVerticalIcon,
	MoonIcon,
	SunIcon,
} from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import NavItem from './Items/Nav/NavItem';
import { motion } from 'framer-motion';
import Links from './Items/Nav/Links';
import Options from './Items/Nav/Options';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

function NavBar() {
	const pathname = usePathname();

	const [tooltip, setTooltip] = useState(true);
	const [options, setOptions] = useState(false);
	const [links, setLinks] = useState(false);

	const optionRef = useRef<HTMLDivElement>(null);
	const dotRef = useRef<SVGSVGElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<SVGSVGElement>(null);

	const { isDark, toggleDark, toggleLight } = useTheme();

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

		document.addEventListener('mousedown', handleClick);

		return () => document.removeEventListener('mousedown', handleClick);
	}, []);

	const isTooltip = !options && !links && tooltip;

	function setColor(path: string) {
		if (pathname === path) return 'orange';
		return 'white';
	}
	function setWeight(path: string) {
		if (pathname === path) return 'duotone';
		return 'regular';
	}
	function setStyle(path: string) {
		if (pathname !== path) return undefined;
		return { filter: 'drop-shadow(2px 2px 4px orange)' };
	}

	return (
		<>
			<motion.nav
				className="
					rounded-full *:rounded-full backdrop-blur-xs
					bg-black/65 *:cursor-pointer *:p-2
					flex px-1 py-1 duration-400 transition-all
					*:hover:bg-white/10 *:hover:scale-110 *:duration-400
					*:transition-all ring-2 ring-black/3 dark:ring-white/5 dark:shadow-sm dark:shadow-white/10"
			>
				<NavItem isTooltip={isTooltip} label="Home">
					<CircleIcon
						size={25}
						color={setColor('/')}
						weight={setWeight('/')}
						style={setStyle('/')}
					/>
				</NavItem>
				<NavItem isTooltip={isTooltip} label="Links">
					<ArrowUpRightIcon
						ref={arrowRef}
						size={25}
						color={'white'}
						onClick={() => setLinks(!links)}
					/>
				</NavItem>
				<NavItem
					isTooltip={isTooltip}
					label={`${isDark ? 'Light Theme' : 'Dark Theme'}`}
				>
					{isDark ? (
						<SunIcon
							size={25}
							color={setColor('/theme')}
							style={setStyle('/theme')}
							className="animate-spinner-navbar"
							onClick={toggleLight}
						/>
					) : (
						<MoonIcon
							size={25}
							color={setColor('/theme')}
							style={setStyle('/theme')}
							onClick={toggleDark}
						/>
					)}
				</NavItem>
				<NavItem isTooltip={isTooltip} label="Options">
					<DotsThreeVerticalIcon
						ref={dotRef}
						size={25}
						color={'white'}
						onClick={() => setOptions(!options)}
					/>
				</NavItem>
			</motion.nav>
			<Options
				options={options}
				optionRef={optionRef}
				tooltip={tooltip}
				setTooltip={setTooltip}
				setOptions={setOptions}
			/>
			<Links links={links} linksRef={linksRef} setLinks={setLinks} />
		</>
	);
}

export default NavBar;
