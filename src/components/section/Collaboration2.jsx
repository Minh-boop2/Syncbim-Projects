import { syncbimSymbol, check } from "../../assets";
import { collabApps, collabContent, collabText } from "../../constants";
import Button from "../common/Button";
import Section from "../common/Section";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import FancyButton from "../Effect/FancyButton";
import React, { useRef, useState, useEffect } from "react";
import "../Effect/textOurProject.css";
import { BottomLine } from "../design/Hero";
import TechBackground from "../common/TechBackground";

const Collaboration = () => {
	const orbitRef = useRef(null);
	const [idx, setIdx] = useState(1);
	const [withTrans, setWithTrans] = useState(true);
	const trackRef = useRef(null);
	const timerRef = useRef(null);

	const scrollToId = (id) => {
		const el = document.getElementById(id);
		if (!el) return;
		// nếu người dùng bật "giảm chuyển động" thì bỏ smooth
		const smooth = window.matchMedia("(prefers-reduced-motion: reduce)").matches
			? "auto"
			: "smooth";
		el.scrollIntoView({ behavior: smooth, block: "start" });
	};

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
	// 1) Slides & total
	const slides = [
		{
			src: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/07/hinh-nen-ai-61.jpg",
			alt: "Site coordination",
			caption: "Điều phối hiện trường",
		},
		{
			src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600",
			alt: "BIM model",
			caption: "Mô hình BIM tổng hợp",
		},
		{
			src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600",
			alt: "Dashboard",
			caption: "Dashboard tiến độ",
		},
		{
			src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600",
			alt: "Documents",
			caption: "Tài liệu & phiên bản",
		},
		{
			src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600",
			alt: "Reports",
			caption: "Báo cáo & nhật ký",
		},
	];
	const total = slides.length;
	const ext = React.useMemo(
		() => [slides[total - 1], ...slides, slides[0]],
		[slides, total],
	);

	// 2) Quản lý auto-next CHỈ ở đây
	const stopAuto = React.useCallback(() => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
	}, []);
	// ext có N = total + 2 ( [last, ...slides, first] )
	const wrap = (i) => {
		const N = total + 2;
		return ((i % N) + N) % N; // luôn trong [0..N-1]
	};
	const startAuto = React.useCallback(() => {
		stopAuto();
		timerRef.current = setInterval(() => {
			setWithTrans(true);
			setIdx((prev) => wrap(prev + 1)); // ⬅️ dùng wrap
		}, 2000);
	}, [stopAuto, total]);

	const normalizeIndex = React.useCallback(
		(i) => {
			if (i === 0) return total;
			if (i === total + 1) return 1;
			return i;
		},
		[total],
	);

	useEffect(() => {
		startAuto();
		return stopAuto;
	}, [startAuto, stopAuto]);

	// 3) Khôi phục sau khi đổi tab
	useEffect(() => {
		const handleVisible = () => {
			if (document.hidden) {
				stopAuto(); // ⛔ dừng hẳn interval
			} else {
				// Chuẩn hoá index về slide thật (1..total) — không nhảy thêm bước
				setWithTrans(false);
				setIdx((i) => normalizeIndex(wrap(i)));

				requestAnimationFrame(() => {
					void trackRef.current?.offsetHeight; // reflow
					setWithTrans(true);
					startAuto(); // ✅ chỉ khởi động lại interval, KHÔNG setIdx(i+1)
				});
			}
		};
		document.addEventListener("visibilitychange", handleVisible);
		window.addEventListener("blur", handleVisible);
		window.addEventListener("focus", handleVisible);
		return () => {
			document.removeEventListener("visibilitychange", handleVisible);
			window.removeEventListener("blur", handleVisible);
			window.removeEventListener("focus", handleVisible);
		};
	}, [normalizeIndex, startAuto, stopAuto]);

	// 4) Loop vô hạn
	const onTransitionEnd = () => {
		if (idx === 0) {
			setWithTrans(false);
			setIdx(total);
		} else if (idx === total + 1) {
			setWithTrans(false);
			setIdx(1);
		}
	};
	useEffect(() => {
		if (!withTrans) {
			const id = requestAnimationFrame(() => setWithTrans(true));
			return () => cancelAnimationFrame(id);
		}
	}, [withTrans]);
	return (
		<Section crosses id="features">
			<div className="container lg:flex">
				<div className="max-w-[25rem]">
					<h3 className="text1 h3 mb-4 inline font-semibold text-gray-800 dark:text-white md:mb-8">
						Triển khai cộng tác liền mạch
					</h3>
					{/* ----- Carousel ngay trong Collaboration2 ----- */}
					<div className="mx-auto mt-5 w-full max-w-2xl">
						<div className="relative h-56 overflow-hidden rounded-2xl border border-white/15 shadow-lg md:h-64 lg:h-72">
							{/* Track */}
							<div
								ref={trackRef}
								className="absolute inset-0 flex"
								style={{
									transform: `translateX(-${idx * 100}%)`,
									transition: withTrans
										? "transform 500ms cubic-bezier(0.22,1,0.36,1)"
										: "none",
								}}
								onTransitionEnd={onTransitionEnd}
							>
								{ext.map((s, i) => (
									<div
										key={i}
										className="relative h-full w-full flex-[0_0_100%] overflow-hidden"
									>
										{/* KHUNG SLIDE (bo góc theo container) */}
										<div className="absolute inset-0">
											<img
												src={s.src}
												alt={s.alt}
												className="absolute inset-0 h-full w-full object-cover" // ⬅️ tràn hết khung
												draggable="false"
											/>
											{s.caption && (
												<figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-sm font-extrabold text-white drop-shadow-lg transition-all duration-300 hover:text-cyan-300">
													{s.caption}
												</figcaption>
											)}
										</div>
									</div>
								))}
							</div>

							{/* Dots */}
							<div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
								{slides.map((_, i) => {
									const isActive =
										idx === i + 1 ||
										(idx === 0 && i === slides.length - 1) ||
										(idx === slides.length + 1 && i === 0);
									return (
										<button
											key={i}
											aria-label={`Slide ${i + 1}`}
											className={`h-2 w-2 rounded-full transition-all ${isActive ? "w-6 bg-white" : "bg-white/50 hover:bg-white/70"}`}
											onClick={() => {
												setWithTrans(true);
												setIdx(i + 1);
											}}
										/>
									);
								})}
							</div>
						</div>
					</div>
					{/* ----- Carousel kết thúc ----- */}
					{/* button liên hệ */}
					<div className="mt-10 translate-x-[7.5rem] md:mt-0 md:translate-x-[10rem] md:translate-y-[2rem]">
						<button
							type="button"
							onClick={() => scrollToId("contact")}
							className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 ring-1 ring-white/10 transition-all duration-300 hover:scale-125 hover:shadow-xl hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-0.5 dark:from-cyan-400 dark:to-blue-500 dark:shadow-cyan-400/30 dark:ring-white/10 dark:hover:brightness-110"
							aria-label="Liên hệ"
						>
							<span className="relative">
								Liên hệ
								{/* gạch sáng chạy khi hover */}
								<span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-0 bg-white/80 transition-all duration-300 ease-out group-hover:w-full" />
							</span>
						</button>
					</div>
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
