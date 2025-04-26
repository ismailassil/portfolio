import { Circle } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { RefObject } from "react";

type OptionsProps = {
	options: boolean;
	optionRef: RefObject<HTMLDivElement | null>;
	tooltip: boolean;
	setTooltip: (value: boolean) => void;
	setOptions: (value: boolean) => void;
};

function Options({
	options,
	optionRef,
	tooltip,
	setTooltip,
	setOptions,
}: OptionsProps) {
	return (
		<AnimatePresence>
			{options && (
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring" }}
					exit={{ y: 10, opacity: 0 }}
					ref={optionRef}
					className="fixed left-1/2 -translate-x-5 bottom-14
							bg-black/55 backdrop-blur-xs rounded-md *:px-4 *:py-1.5 *:duration-300 *:transition-all
							text-white py-1.5 gap-2 *:cursor-pointer *:hover:bg-black/10"
				>
					<button
						className="flex gap-2 items-center text-sm text-nowrap"
						onClick={() => {
							setTooltip(!tooltip);
							setOptions(!options);
						}}
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
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Options;
