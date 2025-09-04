// Roadmap (light/dark) – có chú thích tiếng Việt
// Mục tiêu:
// 1) Viền/hiệu ứng đẹp, hoạt động cả light/dark.
// 2) Gạch chân tiêu đề chỉ theo chiều ngang chữ.
// 3) Gạch chân mô tả chạy sau tiêu đề và bám đúng bề ngang đoạn văn (không kéo full card).

import Heading from "../common/Heading";
import Section from "../common/Section";
import { roadmap } from "../../constants";
import { grid } from "../../assets";
import TechBackground from "../common/TechBackground";
import { BottomLine } from "../design/Hero";
import React from "react";
import noise from "../../assets/roadmap/noise.png";
import FancyCard from "../Effect/FancyCard";

// Badge trạng thái – màu theo DONE / IN PROGRESS
const StatusBadge = ({ status }) => {
	const isDone = status === "done";
	return (
		<div
			className={[
				"absolute right-3 top-2 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur",
				isDone
					? "border-emerald-500 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300"
					: "animate-pulse border-amber-500 text-amber-600 motion-reduce:animate-none dark:bg-amber-500/10 dark:text-amber-300",
			].join(" ")}
			aria-label={isDone ? "Done" : "In progress"}
		>
			<span
				className={`inline-block h-2 w-2 rounded-full ${
					isDone ? "bg-emerald-500" : "bg-amber-500"
				}`}
			/>

			{isDone ? "✔ DONE" : "⟳ IN PROGRESS"}
		</div>
	);
};

const Roadmap = () => (
	<Section>
		<div className="container relative md:pb-10">
			{" "}
			{/* Nền tech (tự xử lý light/dark) */}
			<Heading
				tag="Sẵn sàng bắt đầu"
				title="Tổng quan các thành phần"
				className="flex flex-col items-center"
			/>
			{/* Lưới card */}
			<div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
				{roadmap.map((item, idx) => {
					const isDone = item.status === "done";
					const progress =
						typeof item.progress === "number"
							? item.progress
							: isDone
								? 100
								: 60;
					const progressWidth = Math.min(100, Math.max(0, progress));

					return (
						<div
							key={item.id}
							className={[
								"group relative rounded-2xl p-0.5 md:flex",
								idx % 2 === 1 ? "even:md:translate-y-[7rem]" : "",
								item.colorful ? "" : "bg-stroke-light dark:bg-stroke-dark",
								// Viền gradient hiển thị khi hover
								"",
							].join(" ")}
						>
							{/* Card */}
							{/* <div className="relative z-0 w-full transform-gpu overflow-hidden rounded-[1.05rem] bg-white/95 p-8 text-slate-900 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[0.6deg] motion-reduce:transform-none dark:bg-slate-900/95 dark:text-slate-200 xl:p-15"> */}
							<div className="">
								<FancyCard className="relative z-0 w-full transform-gpu overflow-hidden rounded-[1.05rem] bg-gradient-to-br from-white via-sky-50 to-sky-200 p-8 text-slate-900 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[0.6deg] motion-reduce:transform-none dark:bg-gradient-to-br dark:bg-none dark:text-slate-200 xl:p-15">
									{/*   */}
									{item.imageUrl && (
										<img
											src={item.imageUrl}
											alt={item.title}
											className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-0 transition duration-700 ease-in-out group-hover:-translate-y-[2%] group-hover:scale-[1.03] group-hover:opacity-25 motion-reduce:transition-none"
										/>
									)}
									<div className="pointer-events-none absolute left-0 top-0 z-0 max-w-full opacity-60 dark:opacity-20">
										<img
											className="w-full"
											src={grid}
											width={550}
											height={550}
											alt=""
										/>
									</div>
									<div className="pointer-events-none absolute inset-0 z-0 bg-white/40 mix-blend-normal backdrop-blur-[2px] dark:bg-slate-900/40"></div>

									{/* Glow nhẹ ở 2 góc */}
									<span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"></span>
									<span className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-fuchsia-400/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"></span>

									{/* Badge trạng thái */}
									<StatusBadge status={item.status} />

									{/* Nội dung card */}
									<div className="relative z-10">
										{/* Date pill – cố định ở góc trái trên */}
										<div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-slate-200/80 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">
											{item.date}
										</div>

										{/* Tiêu đề: underline chỉ theo chữ (span con) + scale ~20% khi hover */}
										<h4 className="mb-3 mt-14 inline-block origin-left text-3xl font-semibold transition-all duration-300 group-hover:scale-110">
											<span className="relative inline-block pb-1.5">
												{item.title}
												<span
													aria-hidden
													className={
														"pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-300 group-hover:w-full " +
														(isDone ? "bg-emerald-500" : "bg-amber-500")
													}
												/>
											</span>
										</h4>

										{/* MÔ TẢ: bọc ngoài để khống chế chiều rộng (wrap),
                      còn <p> bên trong co theo nội dung (w-fit) cho underline bám đúng bề ngang chữ */}
										<div className="max-w-[65ch]">
											<p className="text-slate-600 transition-all duration-500 group-hover:scale-105 dark:text-slate-300/90">
												<span
													className="w-fit whitespace-pre-wrap bg-[length:0%_1px] bg-left-bottom bg-no-repeat align-baseline leading-[0.5] transition-[background-size] delay-300 duration-500 [background-image:linear-gradient(var(--u),var(--u))] group-hover:bg-[length:100%_1.5px]"
													style={{
														"--u": isDone ? "#10b981" : "#f59e0b",
														width: "fit-content",
													}}
												>
													{item.text}
												</span>
											</p>
										</div>
									</div>

									{/* Focus ring A11y nếu card trở thành link/button sau này */}
									<span className="absolute inset-0 rounded-[1.05rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500" />
								</FancyCard>
							</div>

							{/* (Tuỳ chọn) Đường nối giữa các card */}
							<svg
								className="pointer-events-none absolute inset-0 hidden md:block"
								aria-hidden
							>
								<path
									d="M60,220 C220,220 260,420 420,420"
									className="stroke-slate-300/30 dark:stroke-slate-600/30"
									strokeWidth="2"
									fill="none"
									strokeDasharray="6 8"
								/>
							</svg>
						</div>
					);
				})}
				<div className="w-[30rem]"></div>
			</div>
		</div>
		<BottomLine />
	</Section>
);

export default Roadmap;
