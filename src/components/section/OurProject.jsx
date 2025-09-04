import React from "react";
import Section from "../common/Section";
import "../Effect/cardOurProject.css";
import "../Effect/textOurProject.css";
import "../Effect/textOurProject2.css";
import Notification from "../common/Notification";
import { ScrollParallax } from "react-just-parallax";
import { BottomLine } from "../design/Hero";
import TechBackground from "../common/TechBackground";
import FancyCard from "../Effect/FancyCard";

function OurProject() {
	return (
		<Section>
			{/* Tiêu đề */}
			<h2 className="group relative mx-auto mb-8 flex flex-col items-center text-center">
				<span className="bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-indigo-300 sm:text-4xl">
					Tổng quan các Projects
				</span>
				<span className="mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 dark:from-cyan-400 dark:via-sky-500 dark:to-indigo-400" />
				<span className="pointer-events-none absolute -inset-x-4 -bottom-3 top-1/2 -z-10 bg-[radial-gradient(ellipse_at_center,theme(colors.blue.200),transparent_60%)] opacity-60 blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.25),transparent_60%)]" />
			</h2>

			{/* Nội dung project */}
			<div className="mx-auto w-full max-w-7xl px-4">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
					{/* Dashboard */}
					<div className="lg:col-span-12">
						<FancyCard className="min-h-auto card1 relative rounded-2xl border border-slate-700 bg-gradient-to-r from-white via-pink-50 to-pink-50 p-6 text-center text-white dark:bg-none">
							<img
								src="https://img.freepik.com/premium-photo/pink-themed-side-view-robot-face-illustration-about-artificial-intelligence-generative-ai_343887-762.jpg?w=740"
								alt="Dashboard"
								className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-30"
							/>
							<div className="absolute right-3 top-2 rounded-full border border-green-600 px-3 py-1 text-xs font-semibold text-green-400 dark:bg-green-700/20">
								✔ DONE
							</div>
							<span
								className="text-4xl font-bold text-color-6 drop-shadow-md"
								style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
							>
								Dashboard
							</span>
							<h2 className="text-gray-600 dark:text-white">
								VTCode là công ty công nghệ chuyên cung cấp giải pháp phần mềm
								hiện đại, ứng dụng AI và tự động hóa quy trình doanh nghiệp. Với
								đội ngũ trẻ, sáng tạo và tận tâm, chúng tôi đồng hành cùng doanh
								nghiệp trong hành trình chuyển đổi số, tối ưu vận hành và phát
								triển bền vững.
							</h2>
						</FancyCard>
					</div>

					{/* Chatbox + Report */}
					<div className="flex -translate-y-[10px] flex-col gap-6 lg:col-span-6">
						{/* ChatBox */}
						<div className="">
							<FancyCard className="card2 group relative min-h-[160px] rounded-2xl border border-slate-700 bg-gradient-to-r from-white via-yellow-50 to-orange-50 p-6 text-white dark:bg-none">
								<img
									src="https://tse3.mm.bing.net/th/id/OIP.wvMT78rS1y2xRRGmMNuHlAHaEK?pid=Api&P=0&h=180"
									alt="ChatBox"
									className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-30"
								/>
								<div className="absolute right-3 top-2 rounded-full border border-yellow-600 bg-yellow-700/20 px-3 py-1 text-xs font-semibold text-yellow-400">
									⌛ IN PROGRESS
								</div>
								<span
									className="text-2xl font-extrabold text-color-3"
									style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
								>
									ChatBox
								</span>
								<h2 className="text-gray-600 dark:text-white">
									VTCode đang phát triển hệ thống Chatbox thông minh tích hợp AI
									để hỗ trợ khách hàng trong việc tư vấn, giải đáp và chăm sóc
									khách hàng 24/7. Chatbox có khả năng xử lý ngôn ngữ tự nhiên,
									học từ dữ liệu nội bộ và kết nối trực tiếp với hệ thống quản
									lý của doanh nghiệp.
								</h2>
							</FancyCard>
						</div>

						{/* Report */}
						<div className="">
							<FancyCard className="card4 group relative min-h-[160px] rounded-2xl border border-slate-700 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-6 text-white dark:bg-none">
								<img
									src="https://thumbs.dreamstime.com/b/yellow-robot-backdrop-created-using-generative-ai-tools-272511657.jpg"
									alt="Report"
									className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-30"
								/>
								<div className="absolute right-3 top-2 rounded-full border border-green-600 bg-green-700/20 px-3 py-1 text-xs font-semibold text-green-400">
									✔ DONE
								</div>
								<span
									className="text-2xl font-extrabold text-color-2"
									style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
								>
									Report
								</span>
								<h2 className="text-gray-600 dark:text-white">
									VTCode đã phát triển các module báo cáo trực quan và thông
									minh giúp doanh nghiệp theo dõi hoạt động kinh doanh, thống kê
									KPI, đánh giá hiệu suất nhân sự và phân tích dữ liệu theo thời
									gian thực.
								</h2>
							</FancyCard>
						</div>
					</div>

					{/* Tasks + AI */}
					<div className="flex flex-col gap-6 lg:col-span-6">
						{/* Tasks */}
						<div className="">
							<FancyCard className="card3 group relative min-h-[160px] rounded-2xl border border-slate-700 bg-gradient-to-r from-white via-indigo-50 to-purple-50 p-6 text-white dark:bg-none">
								<img
									src="https://png.pngtree.com/background/20230503/original/pngtree-ai-machine-robot-and-human-cyborg-artificial-intelligence-innovation-futuristic-picture-image_2500209.jpg"
									alt="Tasks"
									className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-30"
								/>
								<div className="absolute right-3 top-2 rounded-full border border-yellow-600 bg-yellow-700/20 px-3 py-1 text-xs font-semibold text-yellow-400">
									⌛ IN PROGRESS
								</div>
								<span
									className="text-2xl font-extrabold text-color-5"
									style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
								>
									Tasks
								</span>
								<h2 className="text-gray-600 dark:text-white">
									VTCode đã thực hiện nhiều dự án nổi bật cho các đối tác trong
									lĩnh vực F&B, công nghệ và quản lý vận hành. Các sản phẩm được
									đánh giá cao về hiệu năng và trải nghiệm người dùng.
								</h2>
								<ul className="text-gray-600 dark:text-white">
									<li>Thiết kế & lập trình Website cho chuỗi F&B i-Cool</li>
									<li>Xây dựng giao diện web hiện đại chuẩn UI/UX</li>
									<li>
										Triển khai hệ thống CMS nội bộ cho khách hàng doanh nghiệp
									</li>
									<li>
										Phát triển Landing Page chiến dịch marketing – đa thiết bị
									</li>
								</ul>
							</FancyCard>
						</div>

						{/* AI */}
						<div className="">
							<FancyCard className="card5 group relative min-h-[160px] rounded-2xl border border-slate-700 bg-gradient-to-r from-white via-emerald-50 to-teal-50 p-6 text-white dark:bg-none">
								<img
									src="https://img.freepik.com/premium-psd/robot-with-green-background-green-light_1020495-417124.jpg?w=2000"
									alt="AI"
									className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-20"
								/>
								<div className="absolute right-3 top-2 rounded-full border border-green-600 bg-green-700/20 px-3 py-1 text-xs font-semibold text-green-400">
									✔ DONE
								</div>
								<span
									className="text-2xl font-extrabold text-color-4"
									style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
								>
									AI
								</span>
								<h2 className="text-gray-600 dark:text-white">
									VTCode đang xây dựng hệ thống trợ lý ảo AI dành cho doanh
									nghiệp vừa và nhỏ. Trợ lý này có khả năng hiểu ngôn ngữ tự
									nhiên, ghi nhớ ngữ cảnh và đưa ra phản hồi chính xác nhằm hỗ
									trợ chăm sóc khách hàng, tra cứu thông tin, theo dõi lịch làm
									việc và phân tích dữ liệu.
								</h2>
								<ul className="text-gray-600 dark:text-white">
									<li>Hiểu và phản hồi bằng tiếng Việt tự nhiên</li>
									<li>Tích hợp vào website, app, hệ thống CRM</li>
									<li>Tùy biến theo lĩnh vực: F&B, dịch vụ, giáo dục,...</li>
								</ul>
							</FancyCard>
						</div>
					</div>
				</div>
			</div>

			<BottomLine />
		</Section>
	);
}

export default OurProject;
