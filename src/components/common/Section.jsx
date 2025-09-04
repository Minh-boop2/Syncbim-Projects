import SectionSvg from "../../assets/svg/SectionSvg";
import React, { useState } from "react";
import axios from "axios";

const Section = ({
	className,
	id,
	crosses,
	crossesOffset,
	customPaddings,
	children,
}) => {
	return (
		<div
			id={id}
			className={`relative ${
				customPaddings ||
				`py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
			} ${className || ""}`}
		>
			{children}
			{/* Cột dọc trái/phải */}
			<div className="pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-light dark:bg-stroke-dark md:block lg:left-7.5 xl:left-10" />
			<div className="pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-light dark:bg-stroke-dark md:block lg:right-7.5 xl:right-10" />

			{crosses && (
				<>
					<div
						className={` ${
							crossesOffset && crossesOffset
						} pointer-events-none right-10 lg:block xl:left-10`}
					/>
					{/* Dấu chữ thập */}
				</>
			)}
		</div>
	);
};

export default Section;
