import ScrollReveal from "../components/common/scrollreveal";
import Contact from "../components/section/Contact";
import Data from "../components/section/Data";
import OurProject from "../components/section/OurProject";
import OurTeam from "../components/section/OurTeam";
import Timeline from "../components/section/Timeline";
import ServiceVTCODE from "../components/section/ServiceVTCODE";
import StatsSection from "../components/section/StatsSection";
import {
	ScrollFade,
	ScrollScale,
	ScrollParallax,
	ScrollStagger,
	ScrollMask,
} from "../components/common/ScrollEffects";
import Hero from "../components/section/Hero";

export default function Datapage() {
	return (
		<div className=" ">
			{/* <ScrollReveal></ScrollReveal> */}
			<Hero />
			<ScrollFade>
				<Data />
			</ScrollFade>
			<ScrollScale delay={0.1}>
				<OurProject />
			</ScrollScale>
			<ScrollParallax delay={0.2}>
				<Timeline />
			</ScrollParallax>
			<ScrollScale delay={0.2}>
				<ServiceVTCODE />
			</ScrollScale>
			<ScrollReveal delay={0.2}>
				<StatsSection />
			</ScrollReveal>
			<ScrollReveal delay={0.5}>
				<Contact />
			</ScrollReveal>
		</div>
	);
}
