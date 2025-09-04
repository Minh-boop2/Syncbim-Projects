// src/components/common/FancyButton.jsx
import React from "react";

export default function FancyButton({
	children,
	className = "",
	onClick,
	type = "button",
}) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`group relative overflow-hidden rounded-lg border-2 border-sky-300 font-semibold text-sky-600 transition-all duration-300 ease-in-out hover:border-blue-500 dark:border-[#D4EDF9] dark:text-white ${className}`}
		>
			{/* Vệt sáng */}
			<span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/2 -translate-x-[75%] rotate-12 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply blur-md transition-transform duration-700 ease-out group-hover:translate-x-[225%] dark:via-white/25 dark:mix-blend-normal"></span>

			{/* 4 góc */}
			<span className="drop-shadow-3xl absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-2 border-t-2 border-sky-300 transition-all duration-300 dark:border-[#D4EDF9]"></span>
			<span className="drop-shadow-3xl absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-2 border-t-2 border-sky-300 transition-all duration-300 group-hover:h-[90%] dark:border-[#D4EDF9]"></span>
			<span className="drop-shadow-3xl absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-2 border-l-2 border-sky-300 transition-all duration-300 group-hover:h-[90%] dark:border-[#D4EDF9]"></span>
			<span className="drop-shadow-3xl absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-2 border-r-2 border-sky-300 transition-all duration-300 dark:border-[#D4EDF9]"></span>

			{/* Nội dung */}
			<span className="relative z-20">{children}</span>
		</button>
	);
}
