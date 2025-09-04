// SmoothScrollFX.jsx
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";

/**
 * Hook kiểm soát animation khi phần tử sắp vào/ra viewport
 * - once: true => animate 1 lần rồi thôi
 * - amount: threshold (0..1) nhạy cỡ nào khi vào khung hình
 * - margin: "đệm" để kích hoạt SỚM hơn khi kéo xuống (ví dụ "200px 0px 0px 0px")
 */
function useScrollControls({
	once = true,
	amount = 0.1,
	margin = "200px 0px 0px 0px",
} = {}) {
	const controls = useAnimation();
	const shouldReduceMotion = useReducedMotion();

	const [ref, inView] = useInView({
		triggerOnce: once,
		threshold: amount,
		rootMargin: margin,
	});

	useEffect(() => {
		if (shouldReduceMotion) {
			controls.set("visible"); // tôn trọng prefers-reduced-motion
			return;
		}
		controls.start(inView ? "visible" : "hidden");
	}, [controls, inView, shouldReduceMotion]);

	return { ref, controls, shouldReduceMotion };
}

/** Transition dùng chung (memo để đỡ re-create object) */
function useBaseTransition(duration = 0.6, delay = 0) {
	return useMemo(
		() => ({ duration, ease: "easeOut", delay }),
		[duration, delay],
	);
}

/** Hint GPU để chuyển động mượt */
const smoothStyle = {
	willChange: "transform, opacity",
	transform: "translateZ(0)",
};

/* ============================= */
/*            EFFECTS            */
/* ============================= */

/** Fade + Slide */
export function ScrollFade({
	children,
	delay = 0,
	y = 30,
	x = 0,
	once,
	amount,
	margin,
}) {
	const { ref, controls } = useScrollControls({ once, amount, margin });
	const transition = useBaseTransition(0.6, delay);

	const variants = useMemo(
		() => ({
			hidden: { opacity: 0, x, y },
			visible: { opacity: 1, x: 0, y: 0, transition },
		}),
		[x, y, transition],
	);

	return (
		<motion.div
			ref={ref}
			style={smoothStyle}
			initial="hidden"
			animate={controls}
			variants={variants}
		>
			{children}
		</motion.div>
	);
}

/** Scale-in */
export function ScrollScale({ children, delay = 0, once, amount, margin }) {
	const { ref, controls } = useScrollControls({ once, amount, margin });
	const transition = useBaseTransition(0.6, delay);

	const variants = useMemo(
		() => ({
			hidden: { opacity: 0, scale: 0.9 }, // 0.9 -> 1 mượt hơn 0.8 -> 1
			visible: { opacity: 1, scale: 1, transition },
		}),
		[transition],
	);

	return (
		<motion.div
			ref={ref}
			style={smoothStyle}
			initial="hidden"
			animate={controls}
			variants={variants}
		>
			{children}
		</motion.div>
	);
}

/** Parallax (trượt lên nhẹ) */
export function ScrollParallax({
	children,
	delay = 0,
	yFrom = 50,
	once,
	amount,
	margin,
}) {
	const { ref, controls } = useScrollControls({ once, amount, margin });
	const transition = useBaseTransition(0.8, delay);

	const variants = useMemo(
		() => ({
			hidden: { opacity: 0, y: yFrom },
			visible: { opacity: 1, y: 0, transition },
		}),
		[yFrom, transition],
	);

	return (
		<motion.div
			ref={ref}
			style={smoothStyle}
			initial="hidden"
			animate={controls}
			variants={variants}
		>
			{children}
		</motion.div>
	);
}

/** Staggered reveal (container bao nhiều item con) */
export function ScrollStagger({ children, once, amount, margin, gap = 0.12 }) {
	const { ref, controls } = useScrollControls({ once, amount, margin });

	const variants = useMemo(
		() => ({
			visible: { transition: { staggerChildren: gap } },
			hidden: {},
		}),
		[gap],
	);

	return (
		<motion.div
			ref={ref}
			style={smoothStyle}
			initial="hidden"
			animate={controls}
			variants={variants}
		>
			{children}
		</motion.div>
	);
}

/** Mask / Clip-path reveal */
export function ScrollMask({ children, delay = 0, once, amount, margin }) {
	const { ref, controls } = useScrollControls({ once, amount, margin });
	const transition = useBaseTransition(0.8, delay);

	const variants = useMemo(
		() => ({
			hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
			visible: { clipPath: "inset(0 0% 0 0)", opacity: 1, transition },
		}),
		[transition],
	);

	return (
		<motion.div
			ref={ref}
			style={{ ...smoothStyle, overflow: "hidden" }}
			initial="hidden"
			animate={controls}
			variants={variants}
		>
			{children}
		</motion.div>
	);
}
