import Section from "../components/common/Section";
import Pricing from "../components/section/Pricing";
import Services from "../components/section/Services";
import {
	ScrollFade,
	ScrollScale,
	ScrollStagger,
	ScrollMask,
} from "../components/common/ScrollEffects";
export default function AppPage() {
	return (
		<Section className="">
			<ScrollFade>
				<Services />
			</ScrollFade>
			<ScrollScale>
				<Pricing />
			</ScrollScale>
		</Section>
	);
}
