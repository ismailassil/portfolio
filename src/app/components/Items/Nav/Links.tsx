import {
	ArrowLineUpRight,
	At,
	DiscordLogo,
	GithubLogo,
	LinkedinLogo,
} from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import { Dispatch, RefObject, SetStateAction } from 'react';

type LinksProps = {
	links: boolean;
	linksRef: RefObject<HTMLDivElement | null>;
	setLinks: Dispatch<SetStateAction<boolean>>;
};

function Links({ links, linksRef, setLinks }: LinksProps) {
	function redirect(path: string) {
		window.open(path, '_blank');
	}

	function handleEmail() {
		window.open(
			'mailto:ismailassil@duck.com?subject=Hello&body=How%20are%20you%3F',
		);
	}

	return (
		<AnimatePresence initial={false} mode="wait">
			{links && (
				<motion.div
					initial={{ y: 30, opacity: 0, scale: 0.5 }}
					animate={{ y: 0, opacity: 1, scale: 1 }}
					transition={{ type: 'spring' }}
					exit={{ y: 30, opacity: 0, scale: 0.5 }}
					ref={linksRef}
					className="fixed left-1/2 -translate-x-1/2 bottom-14
						bg-black/55 backdrop-blur-xs rounded-md *:px-2 *:py-1.5
						*:duration-300 *:transition-all grid grid-cols-2 w-full min-w-80
						text-white p-3 gap-2 *:cursor-pointer *:hover:bg-black/10 *:rounded-md"
					onClick={() => setLinks(false)}
				>
					<button
						className="flex gap-2 items-center text-sm justify-between min-w-37 group"
						onClick={handleEmail}
					>
						<div className="flex gap-2 items-center">
							<At size={24} color="white" /> Email{' '}
						</div>
						<ArrowLineUpRight
							size={20}
							className="group-hover:block hidden"
						/>
					</button>
					<button
						className="flex gap-2 items-center text-sm justify-between min-w-37 group"
						onClick={() => redirect('https://github.com/ismailassil/')}
					>
						<div className="flex gap-2 items-center">
							<GithubLogo size={24} color="white" /> Github{' '}
						</div>
						<ArrowLineUpRight
							size={20}
							className="group-hover:block hidden"
						/>
					</button>
					<button
						className="flex gap-2 items-center text-sm justify-between group min-w-37"
						onClick={() =>
							redirect('https://www.linkedin.com/in/ismail-assil/')
						}
					>
						<div className="flex gap-2 items-center">
							<LinkedinLogo size={24} color="white" /> Linkedin{' '}
						</div>
						<ArrowLineUpRight
							size={20}
							className="group-hover:block hidden"
						/>
					</button>
					<button
						className="flex gap-2 items-center text-sm justify-between group min-w-37"
						onClick={() =>
							redirect('https://discord.com/users/musablade')
						}
					>
						<div className="flex gap-2 items-center">
							<DiscordLogo size={24} color="white" /> Discord{' '}
						</div>
						<ArrowLineUpRight
							size={20}
							className="group-hover:block hidden"
						/>
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Links;
