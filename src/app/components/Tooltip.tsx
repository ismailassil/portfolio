function Tooltip({ label }: { label: string }) {
	return (
		<div
			className="absolute group-hover:block hidden rounded-sm -bottom-10
				left-1/2 -translate-x-1/2 bg-black/20 px-3 py-1 text-nowrap"
		>
			{label}
		</div>
	);
}

export default Tooltip;
