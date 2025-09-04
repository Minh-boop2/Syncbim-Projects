import Hero from "../components/section/Hero";
import Roadmap from "../components/section/Roadmap";
import Benefits from "../components/section/Benefits";
import Collaboration from "../components/section/Collaboration2";

import Contact from "../components/section/Contact";
import { ScrollParallax } from "react-just-parallax";
import ScrollReveal from "../components/common/scrollreveal";
import {
	ScrollFade,
	ScrollScale,
	ScrollStagger,
	ScrollMask,
} from "../components/common/ScrollEffects";
import OurProject from "../components/section/OurProject";
import Timeline from "../components/section/Timeline";
import TechBackground from "../components/common/TechBackground";
import { BottomLine } from "../components/design/Hero";

export default function HomePage() {
	return (
		<div>
			{/* Hero (đầu trang, không cần scroll-mt) */}
			<div className="hidden lg:block">
				<ScrollReveal>
					<section id="home" tabIndex={-1}>
						<Hero />
					</section>
				</ScrollReveal>
			</div>

			{/* Mobile: không scroll */}
			<div className="block lg:hidden">
				<section id="home" tabIndex={-1}>
					<Hero />
				</section>
			</div>
			{/* Roadmap */}
			<div className="hidden lg:block">
				<ScrollFade delay={0.1}>
					<section id="roadmap" className="scroll-mt-28" tabIndex={-1}>
						<Roadmap />
					</section>
				</ScrollFade>
			</div>
			<div className="block lg:hidden">
				<section id="roadmap" className="scroll-mt-28" tabIndex={-1}>
					<Roadmap />
				</section>
			</div>

			{/* Benefits */}
			<div className="hidden lg:block">
				<ScrollScale delay={0} y={20} amount={0.05} margin="400px 0px 0px 0px">
					<section id="features" className="scroll-mt-28" tabIndex={-1}>
						<Benefits />
					</section>
				</ScrollScale>
			</div>
			<div className="block lg:hidden">
				<section id="features" className="scroll-mt-28" tabIndex={-1}>
					<Benefits />
				</section>
			</div>

			{/* OurProject */}
			<div className="hidden lg:block">
				<ScrollScale delay={0.3}>
					<section id="projects" className="scroll-mt-28" tabIndex={-1}>
						<OurProject />
					</section>
				</ScrollScale>
			</div>
			<div className="block lg:hidden">
				<section id="projects" className="scroll-mt-28" tabIndex={-1}>
					<OurProject />
				</section>
			</div>

			{/* Timeline */}
			<div className="hidden lg:block">
				<ScrollFade>
					<section id="timeline" className="scroll-mt-28" tabIndex={-1}>
						<Timeline />
					</section>
				</ScrollFade>
			</div>
			<div className="block lg:hidden">
				<section id="timeline" className="scroll-mt-28" tabIndex={-1}>
					<Timeline />
				</section>
			</div>

			{/* Collaboration */}
			<div className="hidden lg:block">
				<ScrollReveal delay={0.3}>
					<section id="partners" className="scroll-mt-28" tabIndex={-1}>
						<Collaboration />
					</section>
				</ScrollReveal>
			</div>
			<div className="block lg:hidden">
				<section id="partners" className="scroll-mt-28" tabIndex={-1}>
					<Collaboration />
				</section>
			</div>

			{/* Contact */}
			<div className="hidden lg:block">
				<ScrollReveal delay={0} y={20} amount={0.05} margin="400px 0px 0px 0px">
					<section id="contact" className="scroll-mt-28" tabIndex={-1}>
						<Contact />
					</section>
				</ScrollReveal>
			</div>
			<div className="block lg:hidden">
				<section id="contact" className="scroll-mt-28" tabIndex={-1}>
					<Contact />
				</section>
			</div>
		</div>
	);
}
