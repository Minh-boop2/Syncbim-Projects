import { motion } from "framer-motion";
import "../Effect/textTimeLine1.css";
import { useState, useEffect, useRef } from "react";

const ITEMS = [
	{
		year: 2020,
		bullets: ["Thành lập VTCODE", "Đặt nền tảng đội core"],
		color: "#10B981",
		side: "top",
	},
	{
		year: 2021,
		bullets: [
			"Ra mắt phiên bản đầu tiên của ChatBox AI",
			"công cụ trả lời tự động đa ngôn ngữ",
		],
		color: "#F59E0B",
		side: "bottom",
	},
	{
		year: 2022,
		bullets: [
			"Phát triển nền tảng Dashboard VTCODE",
			"giải pháp tổng hợp dữ liệu theo thời gian thực cho các phòng ban",
		],
		color: "#EC4899",
		side: "top",
	},
	{
		year: 2023,
		bullets: [
			"Phát triển nền tảng Dashboard VTCODE",
			"giải pháp tổng hợp dữ liệu theo thời gian thực cho các phòng ban",
		],
		color: "#3B82F6",
		side: "bottom",
	},
	{
		year: 2024,
		bullets: [
			"Phát triển các nền tảng giải trí chăm sóc khách hàng theo thời gian thật",
		],
		color: "#CCFFFF",
		side: "top",
	},
	{
		year: 2025,
		bullets: [
			"Tiếp tục phát triển các sản phẩm công nghệ cao, tập trung vào AI & dữ liệu lớn",
			"Mục tiêu đạt 100+ khách hàng DN và trở thành đối tác công nghệ chiến lược tại châu Á",
		],
		color: "#065F46",
		side: "top",
	},
];

export default function Timelines({ items = ITEMS }) {
	const [isHovered, setIsHovered] = useState(false);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);
	const timelineRef = useRef();
	// Hàm di chuyển timeline sang trái
	const scrollLeft = () => {
		const el = timelineRef.current;
		if (!el) return;
		el.scrollBy({ left: -500, behavior: "smooth" });
		// updateScrollState sẽ được gọi bởi sự kiện 'scroll'
	};

	// Hàm di chuyển timeline sang phải
	const scrollRight = () => {
		const el = timelineRef.current;
		if (!el) return;
		el.scrollBy({ left: 500, behavior: "smooth" });
	};
	const updateScrollState = () => {
		const el = timelineRef.current;
		if (!el) return;
		const { scrollLeft, scrollWidth, clientWidth } = el;
		//chừa 1px để tránh sai sô
		setCanScrollLeft(scrollLeft > 0);
		setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
	};
	useEffect(() => {
		updateScrollState(); // gọi lần đầu
		const el = timelineRef.current;
		if (!el) return;

		el.addEventListener("scroll", updateScrollState, { passive: true });
		window.addEventListener("resize", updateScrollState);

		return () => {
			el.removeEventListener("scroll", updateScrollState);
			window.removeEventListener("resize", updateScrollState);
		};
	}, []);
	return (
		<section className="relative mx-auto max-w-7xl px-4 py-16">
			{/* BG mờ + overlay */}
			<div className="absolute inset-0">
				<img
					src="https://tse2.mm.bing.net/th/id/OIP.nXrWxR9AutMQwHhVghyf-wHaEJ?pid=Api&P=0&h=180"
					className="d block h-full w-full object-cover opacity-50 blur-md"
					alt=""
				/>
				<div className="absolute inset-0 bg-white/40 dark:bg-black/20" />
			</div>
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
					className="h-full w-full object-cover opacity-70 blur-sm"
					alt=""
				/>
				<div className="absolute inset-0 block bg-white/50 backdrop-blur-sm dark:hidden" />
			</div>
			{/* Nút di chuyển trái */}
			{/* Nút trái */}
			<button
				onClick={scrollLeft}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className={`absolute left-4 top-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${canScrollLeft ? (isHovered ? "opacity-100" : "opacity-0") : "pointer-events-none opacity-0"} bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/30 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 dark:from-gray-700 dark:to-gray-900 dark:shadow-gray-700/30 dark:hover:shadow-gray-600/50`}
			>
				←
			</button>
			{/* Nút phải */}
			<button
				onClick={scrollRight}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className={`absolute right-4 top-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${canScrollRight ? (isHovered ? "opacity-100" : "opacity-0") : "pointer-events-none opacity-0"} bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/30 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 dark:from-gray-700 dark:to-gray-900 dark:shadow-gray-700/30 dark:hover:shadow-gray-600/50`}
			>
				→
			</button>
			{/* Line ngang: chỉ md+ */}
			<div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block">
				<div className="h-px w-full bg-gray-300/70 dark:bg-white/10" />
			</div>
			{/* Layout: mobile = dọc, md+ = ngang */}
			<div
				ref={timelineRef}
				className="relative flex flex-col gap-8 overflow-x-auto md:w-full md:flex-row md:gap-12 md:overflow-hidden md:pb-6 md:pt-6"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{items.map((item, i) => (
					<TimelineItem key={item.year} item={item} index={i} />
				))}
			</div>
		</section>
	);
}

function TimelineItem({ item, index }) {
	const isTop = item.side === "top";
	const color = item.color;

	return (
		<>
			{/* MOBILE: dọc */}
			<motion.div
				className="relative pl-10 md:hidden"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.25 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
			>
				{/* Dot bám line dọc */}
				<div className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<Dot color={color} />
				</div>

				<h3 className="mb-2 text-2xl font-bold" style={{ color }}>
					{item.year}
				</h3>
				<div className="mb-3 h-6 w-0.5" style={{ backgroundColor: color }} />
				<Bullets bullets={item.bullets} color={color} wide />
			</motion.div>

			{/* DESKTOP: ngang */}
			<motion.div
				className="relative hidden min-w-[220px] flex-col items-center md:flex"
				initial={{ opacity: 0, y: isTop ? -24 : 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.06 }}
			>
				{isTop ? (
					<div className="mb-10 flex w-[220px] flex-col items-center text-center">
						<h3 className="text-3xl font-bold" style={{ color }}>
							{item.year}
						</h3>
						<div
							className="mt-2 h-8 w-0.5"
							style={{ backgroundColor: color }}
						/>
						<Bullets bullets={item.bullets} color={color} />
					</div>
				) : null}

				<div className="relative z-10">
					<RingedDot color={color} />
				</div>

				{!isTop ? (
					<div className="mt-10 flex w-[220px] flex-col items-center text-center">
						<h3 className="text-3xl font-bold" style={{ color }}>
							{item.year}
						</h3>
						<div
							className="mt-2 h-8 w-0.5"
							style={{ backgroundColor: color }}
						/>
						<Bullets bullets={item.bullets} color={color} />
					</div>
				) : null}
			</motion.div>
		</>
	);
}

function Bullets({ bullets, color, wide = false }) {
	return (
		<div
			className={`mt-2 rounded-lg border border-gray-200/70 bg-white/80 p-3 text-sm text-gray-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200 ${
				wide ? "max-w-full" : "max-w-[220px]"
			}`}
		>
			<ul className="space-y-1 text-left">
				{bullets.map((b, idx) => (
					<li key={idx} className="flex gap-2">
						<span
							className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
							style={{ backgroundColor: color }}
						/>
						<span>{b}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function RingedDot({ color }) {
	return (
		<div className="relative">
			<div className="absolute -inset-4 rounded-full ring-1 ring-gray-300/60 dark:ring-white/10" />
			<div className="absolute -inset-2 rounded-full ring-1 ring-gray-300/80 dark:ring-white/20" />
			<div
				className="relative h-6 w-6 rounded-full ring-4 ring-white dark:ring-n-9"
				style={{ backgroundColor: color }}
			/>
		</div>
	);
}

function Dot({ color }) {
	return (
		<div
			className="h-4 w-4 rounded-full ring-4 ring-white dark:ring-n-9"
			style={{ backgroundColor: color }}
		/>
	);
}
