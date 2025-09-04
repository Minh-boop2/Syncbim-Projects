import { syncbimSymbol, check } from "../../assets";
import { collabApps, collabContent, collabText } from "../../constants";
import Button from "../common/Button";
import Section from "../common/Section";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import FancyButton from "../Effect/FancyButton";
import React, { useRef } from "react";
import "../Effect/textOurProject.css";
import { BottomLine } from "../design/Hero";
import TechBackground from "../common/TechBackground";

const Collaboration = () => {
	const orbitRef = useRef(null);
	const handleEnter = () => {
		const el = orbitRef.current;
		if (!el) return;

		el.style.animation = "none";
		el.style.transition = "transform 600ms cubic-bezier(0.22,1,0.36,1)";
		el.style.transform = "rotate(0deg)";

		el.querySelectorAll("[data-spinrev]").forEach((node) => {
			node.style.animation = "none";
			node.style.transition = "transform 600ms cubic-bezier(0.22,1,0.36,1)";
			node.style.transform = "rotate(0deg)";
		});
	};

	const handleLeave = () => {
		const el = orbitRef.current;
		if (!el) return;

		el.querySelectorAll("[data-spinrev]").forEach((node) => {
			node.style.transition = "none";
			node.style.transform = "";
			node.style.animation = "spin 40s linear infinite reverse"; // chạy ngược lại
		});

		el.style.transition = "none";
		el.style.transform = "";
		el.style.animation = "spin 40s linear infinite"; // chạy lại từ đầu
	};
	return (
		<Section crosses id="features">
			<div className="container lg:flex">
				<div className="max-w-[25rem]">
					<h3 className="text1 h3 mb-4 inline font-semibold text-gray-800 dark:text-white md:mb-8">
						Triển khai cộng tác liền mạch
					</h3>
					<div className="mt-2 md:mt-4 lg:mt-6">
						{/* HÀNG CTA – gọn, đối xứng 2 theme */}
						<div className="flex flex-wrap items-center gap-3">
							<a className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 px-4 py-3 text-slate-800 shadow-sm backdrop-blur transition-all after:absolute after:inset-0 after:-translate-x-full after:rounded-2xl after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-700 hover:-translate-y-0.5 hover:border-sky-300/70 hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 hover:shadow-[0_12px_36px_-14px_rgba(14,165,233,0.45)] focus:outline-none focus:ring-2 focus:ring-sky-400/30 group-hover:after:translate-x-full dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:from-sky-400/10 dark:hover:to-cyan-300/10">
								Liên Hệ
								<svg
									viewBox="0 0 24 24"
									className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
									fill="currentColor"
								>
									<path d="M13.5 5.5a1 1 0 011.4 0l5.6 5.6a1 1 0 010 1.4l-5.6 5.6a1 1 0 11-1.4-1.4l3.9-3.9H4a1 1 0 110-2h13.4l-3.9-3.9a1 1 0 010-1.4z" />
								</svg>
							</a>

							{/* Bỏ bounce/scale; giữ nền bán trong suốt để 2 theme không đổi kích thước */}
							<a
								href="/demo"
								className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 px-4 py-3 text-slate-800 shadow-sm backdrop-blur transition-all after:absolute after:inset-0 after:-translate-x-full after:rounded-2xl after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-700 hover:-translate-y-0.5 hover:border-sky-300/70 hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 hover:shadow-[0_12px_36px_-14px_rgba(14,165,233,0.45)] focus:outline-none focus:ring-2 focus:ring-sky-400/30 group-hover:after:translate-x-full dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:from-sky-400/10 dark:hover:to-cyan-300/10"
							>
								Xem demo
								<svg
									viewBox="0 0 24 24"
									className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
									fill="currentColor"
								>
									<path d="M13.5 5.5a1 1 0 011.4 0l5.6 5.6a1 1 0 010 1.4l-5.6 5.6a1 1 0 11-1.4-1.4l3.9-3.9H4a1 1 0 110-2h13.4l-3.9-3.9a1 1 0 010-1.4z" />
								</svg>
							</a>
						</div>

						{/* HÀNG METRICS – khóa width/height để không lệch giữa 2 theme */}
						<div className="mt-6 w-[22rem] md:w-[24rem]">
							<div className="grid grid-cols-2 gap-4">
								{/* 1) 98% Hài lòng */}
								<div className="group relative flex h-24 flex-col items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-300/70 hover:shadow-[0_16px_40px_-18px_rgba(14,165,233,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-400/40">
									<span className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-300 [background:radial-gradient(160px_100px_at_50%_120%,theme(colors.sky.400/0.15),transparent)] group-hover:opacity-100" />
									<div className="text-2xl font-semibold tracking-tight text-sky-600 transition-colors group-hover:text-sky-500 dark:text-sky-400 dark:group-hover:text-sky-300">
										98%
									</div>
									<div className="text-[11px] text-slate-500 dark:text-slate-300">
										Hài lòng
									</div>
								</div>

								{/* 2) +40% Tốc độ */}
								<div className="group relative flex h-24 flex-col items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-300/70 hover:shadow-[0_16px_40px_-18px_rgba(14,165,233,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-400/40">
									<span className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-300 [background:radial-gradient(160px_100px_at_50%_120%,theme(colors.sky.400/0.15),transparent)] group-hover:opacity-100" />
									<div className="text-2xl font-semibold tracking-tight text-sky-600 transition-colors group-hover:text-sky-500 dark:text-sky-400 dark:group-hover:text-sky-300">
										+40%
									</div>
									<div className="text-[11px] text-slate-500 dark:text-slate-300">
										Tốc độ
									</div>
								</div>

								{/* 3) 200+ Đội nhóm */}
								<div className="group relative flex h-24 flex-col items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-300/70 hover:shadow-[0_16px_40px_-18px_rgba(14,165,233,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-400/40">
									<span className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-300 [background:radial-gradient(160px_100px_at_50%_120%,theme(colors.sky.400/0.15),transparent)] group-hover:opacity-100" />
									<div className="text-2xl font-semibold tracking-tight text-sky-600 transition-colors group-hover:text-sky-500 dark:text-sky-400 dark:group-hover:text-sky-300">
										200+
									</div>
									<div className="text-[11px] text-slate-500 dark:text-slate-300">
										Đội nhóm
									</div>
								</div>

								{/* 4) Ô illustration (teamwork/laptop/data flow) */}
								<div className="relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-gradient-to-br from-sky-50/80 to-cyan-50/70 shadow-sm ring-1 ring-inset ring-white/40 dark:border-white/10 dark:from-sky-400/10 dark:to-cyan-300/10">
									{/* vòng glow mềm */}
									<span className="pointer-events-none absolute inset-0 rounded-xl [background:radial-gradient(200px_100px_at_50%_120%,theme(colors.sky.400/0.12),transparent)]" />
									<img
										src="https://svgsilh.com/png-1024/2324013.png"
										alt="Teamwork illustration"
										className="h-14 w-14 opacity-90"
									/>
									{/* caption nhỏ (tùy chọn) */}
									<span className="absolute bottom-1 text-[10px] font-medium text-slate-600/80 dark:text-slate-200/80">
										Collaboration
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* chữ cũ */}
					{/* <ul className="mb-10 max-w-[24rem] space-y-3 md:mb-14">
						{collabContent.map((item) => (
							<li
								key={item.id}
								className="group rounded-2xl border px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/5"
							>
								<div className="flex items-center">
									<img
										src={check}
										width={22}
										height={22}
										alt=""
										className="opacity-90"
									/>
									<h6 className="body-2 ml-3 font-medium">{item.title}</h6>
								</div>
								{item.text && (
									<p className="body-2 mt-2 text-n-8/80 dark:text-n-1/80">
										{item.text}
									</p>
								)}
							</li>
						))}
					</ul> */}
				</div>
				{/* hình tròn */}
				<div className="mt-4 lg:ml-auto xl:w-[38rem]">
					<p className="body-2 mb-8 text-n-8 dark:text-n-1 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]"></p>
					<div className="relative mx-auto flex aspect-square w-[22rem] scale-75 rounded-full border border-white/10 shadow-[inset_0_0_40px_rgba(59,130,246,0.15)] dark:border-white/10 md:scale-100">
						<div className="m-auto flex aspect-square w-60 rounded-full border border-stroke-dark/50 dark:border-stroke-light/40">
							<div className="m-auto aspect-square w-[6rem] rounded-full bg-conic-gradient p-[0.2rem]">
								<div className="flex h-full w-full items-center justify-center rounded-full bg-n-1 dark:bg-n-8">
									<img
										src={syncbimSymbol}
										width={64}
										height={64}
										alt="syncbim"
									/>
								</div>
							</div>
						</div>
						{/* vòng quay chín */}
						<div
							ref={orbitRef}
							className="absolute inset-0 animate-orbit overflow-visible"
						>
							<ul className="overflow-visible">
								{collabApps.map((app, index) => {
									const deg = index * (360 / collabApps.length);
									return (
										<li
											key={app.id}
											className="absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom"
											style={{ transform: `rotate(${deg}deg)` }} // 2) đặt vị trí
										>
											{/* 3) wrapper A: hủy góc định vị */}
											<div
												className="relative -top-[1.6rem]"
												style={{ transform: `rotate(${-deg}deg)` }}
											>
												{/* 4) wrapper B: chỉ bù chuyển động của vòng (KHÔNG có transform khác) */}
												<div className="animate-orbitReverse">
													{/* Icon box - KHÔNG animate/transform gì thêm */}
													<div className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-xl border border-white/10 bg-white/10 shadow-sm backdrop-blur-sm">
														<img
															className="pointer-events-none"
															width={app.width}
															height={app.height}
															alt={app.title}
															src={app.icon}
														/>
													</div>
												</div>
											</div>
										</li>
									);
								})}
							</ul>
						</div>

						<LeftCurve />
						<RightCurve />
					</div>
				</div>
			</div>
			<BottomLine />
		</Section>
	);
};

export default Collaboration;
