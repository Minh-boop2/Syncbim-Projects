import React from "react";
import Section from "../common/Section";
import "../Effect/TextServiceVTCODE.css";
const services = [
	{
		icon: "🌐",
		title: "Phát triển Website",
		desc: "Thiết Kế và lập trình website doanh nghiệp, thương mại điện tử , tối ưu hóa trải nghiệm người dùng",
	},
	{
		icon: "📱",
		title: "Ứng dụng di động",
		desc: "Phát triển ứng dụng IOS & Android với trải nghiệm người dùng mượt mà",
	},
	{
		icon: "🤖",
		title: "AI & Machine learning",
		desc: "Triển khai chatbot , hệ thống phân tích dữ liệu và tự động hóa",
	},
];
function ServiceVTCODE() {
	return (
		// <Section className="relative flex flex-col items-center justify-center px-6 py-16">
		<Section className="">
			<div className="mx-auto max-w-6xl px-4 py-16">
				<h2 className="text5 neon neon-cyan mb-10 text-center text-5xl font-bold text-black dark:text-white">
					Dịch vụ của <p className="logo-1-neon">VTCODE</p>
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((s, i) => (
						<div
							key={i}
							className="card3 card3-inner card3-content bg-white/5 p-6"
						>
							<div className="mb-4 text-4xl">{s.icon}</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
								{s.title}
							</h3>
							<p className="text-sm text-gray-800 dark:text-white">{s.desc}</p>
							<button className="text-accent mt-4 hover:underline">
								Xem Chi Tiết
							</button>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
export default ServiceVTCODE;
