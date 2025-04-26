function NavItem({
	children,
	isTooltip,
	label,
}: {
	children: React.ReactNode;
	isTooltip: boolean;
	label: string;
}) {
	return (
		<div className="group relative flex items-center justify-center">
			{children}
			{isTooltip && (
				<div
					className="absolute group-hover:block hidden rounded-sm -top-8 text-xs
							left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 text-nowrap"
				>
					{label}
				</div>
			)}
		</div>
	);
}

export default NavItem;
