import React, { useEffect, useRef, useState } from "react";
import Section from "../common/Section";
import "../Effect/TextStatsSection.css";
function useCountUp(target = 0, start = 0, duration = 120, active = false) {
	const [value, setValue] = useState(start);
	useEffect(() => {
		if (!active) return;
		if (duration <= 1) {
			setValue(target);
			return;
		}
		let raf;
		const startTs = performance.now();
		const tick = (ts) => {
			const p = Math.min((ts - startTs) / duration, 1);
			// easeOutCubic
			const eased = 1 - Math.pow(1 - p, 3);
			setValue(Math.round(start + (target - start) * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [target, start, duration, active]);
	return value;
}

export default function StatsSection({
	className = "",
	stats = [
		{
			label: "Năm kinh nghiệm",
			value: 5,
			suffix: "+",
			icon: null /* <Award /> */,
		},
		{
			label: "Dự án hoàn thành",
			value: 120,
			suffix: "+",
			icon: null /* <Briefcase /> */,
		},
		{
			label: "Khách hàng hài lòng",
			value: 95,
			suffix: "%",
			icon: null /* <Smile /> */,
		},
		{
			label: "Quốc gia triển khai",
			value: 7,
			suffix: "",
			icon: null /* <Globe2 /> */,
		},
	],
	duration = 1500,
}) {
	const ref = useRef(null);
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setActive(true);
					// chỉ chạy 1 lần
					io.disconnect();
				}
			},
			{ threshold: 0.8 },
		);
		io.observe(ref.current);
		return () => io.disconnect();
	}, []);

	return (
		<Section className="relative flex flex-col items-center justify-center px-6 py-16">
			<div
				ref={ref}
				className={`relative mx-auto w-full max-w-6xl px-6 py-16 ${className}`}
			>
				<h2 className="text7 mb-8 text-center text-5xl font-bold dark:text-gray-800">
					Thành tựu & Số liệu
				</h2>

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
					{stats.map((s, i) => {
						const val = useCountUp(s.value, 0, duration, active);
						return (
							<div
								key={i}
								className="group rounded-2xl border bg-white/60 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-color-1 dark:border-white/10 dark:bg-white/5 dark:hover:bg-color-5"
							>
								<div className="1mb-2 flex items-center gap-2">
									{/* Nếu có icon component truyền vào thì render */}
									{s.icon ? (
										<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
											{s.icon}
										</span>
									) : (
										<span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500/70"></span>
									)}
									<span className="text-sm opacity-70">{s.label}</span>
								</div>

								<div className="text-3xl font-extrabold tracking-tight">
									{val}
									<span className="ml-1 text-sky-600 dark:text-sky-300">
										{s.suffix || ""}
									</span>
								</div>

								{/* thanh nhấn mạnh nhẹ */}
								<div className="mt-3 h-1 w-10 rounded-full bg-sky-500/40 transition group-hover:w-16"></div>
							</div>
						);
					})}
				</div>
			</div>
		</Section>
	);
}
