import React from "react";
import Timelines from "../design/TimeLineCompoment";
import "../Effect/textTimeLine1.css";
import SectionSvg from "../../assets/svg/SectionSvg";
import Section from "../common/Section";
import { BottomLine } from "../design/Hero";
import TechBackground from "../common/TechBackground";
function Timeline() {
	return (
		<Section className="relative flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
			<div>
				<h2 className="relative flex flex-col items-center bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text pb-10 text-center text-2xl font-extrabold text-transparent transition-all duration-500 hover:scale-105 hover:tracking-wide md:text-4xl">
					Hành Trình Phát Triển
					<span className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 transition-all duration-500 group-hover:w-24" />
				</h2>

				<Timelines />
				<BottomLine />
			</div>
		</Section>
	);
}
export default Timeline;
