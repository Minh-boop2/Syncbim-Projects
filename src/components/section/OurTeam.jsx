import MemberCard from "../common/MemberCard";
import Section from "../common/Section";
import { ourteam } from "../../constants";

export default function OurTeam() {
	return (
		<Section customPaddings crosses className="bg-sync-pattern bg-center">
			<div className="container mx-auto flex flex-col items-center justify-center space-y-8 p-4 sm:p-10">
				<h1 className="text-center text-4xl font-bold leading-none sm:text-5xl">
					Đội ngũ phát triển
				</h1>
				<p className="max-w-2xl text-center text-n-1/50">
					Một nhóm các cá nhân đầy nhiệt huyết làm việc cùng nhau của chúng tôi.
				</p>
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
					{ourteam.map((mem) => (
						<div
							key={mem.id}
							className={`${
								mem.id === "0" ? "mx-auto justify-center lg:col-span-2" : ""
							}`}
						>
							<MemberCard member={mem} />
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
