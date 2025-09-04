import React, { useState, useEffect, useRef } from "react";

const slides = [
	"/images/1.jpg",
	"/images/2.jpg",
	"/images/3.jpg",
	"/images/4.jpg",
	"/images/5.jpg",
];

function Test() {
	const [index, setIndex] = useState(0);
	const total = slides.length;
	const trackRef = useRef(null);

	// OPTIONAL: Auto-play (bỏ nếu không cần)
	useEffect(() => {
		const id = setInterval(() => {
			setIndex((i) => (i + 1) % total);
		}, 4000);
		return () => clearInterval(id);
	}, [total]);

	const goTo = (i) => setIndex(((i % total) + total) % total);
	const prev = () => goTo(index - 1);
	const next = () => goTo(index + 1);

	// Keyboard ← →
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [index]);

	return (
		<div className="relative mx-auto w-full max-w-4xl">
			{/* Viewport */}
			<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
				{/* Track */}
				<div
					ref={trackRef}
					className="flex h-full transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${index * 100}%)` }}
				>
					{slides.map((src, i) => (
						<div key={i} className="h-full w-full shrink-0">
							<img
								src={src}
								alt={`Slide ${i + 1}`}
								className="h-full w-full object-cover"
								draggable="false"
							/>
						</div>
					))}
				</div>

				{/* Arrows */}
				<button
					onClick={prev}
					className="group absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 hover:bg-black/50 focus:outline-none focus:ring-4 focus:ring-white"
					aria-label="Previous slide"
				>
					<svg
						className="h-5 w-5 text-white group-active:scale-95"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M15 19L8 12L15 5"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				<button
					onClick={next}
					className="group absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 hover:bg-black/50 focus:outline-none focus:ring-4 focus:ring-white"
					aria-label="Next slide"
				>
					<svg
						className="h-5 w-5 text-white group-active:scale-95"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M9 5L16 12L9 19"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* Indicator dots */}
				<div className="pointer-events-auto absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
					<div className="flex items-center gap-2">
						{slides.map((_, i) => {
							const active = i === index;
							return (
								<button
									key={i}
									onClick={() => goTo(i)}
									aria-label={`Go to slide ${i + 1}`}
									aria-current={active}
									className={[
										"h-2.5 w-2.5 rounded-full transition-all",
										active
											? "w-6 bg-white shadow-md"
											: "bg-white/50 hover:bg-white/70",
									].join(" ")}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Test;
