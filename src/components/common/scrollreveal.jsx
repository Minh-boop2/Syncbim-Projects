import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ScrollReveal({
	children,
	delay = 0,
	y = 30,
	x = 0,
	once = true, // true = chỉ chạy 1 lần
	amount = 0.15, // phần trăm phần tử vào viewport để kích hoạt
	preloadOffset = "0px 0px -10% 0px", // preload sớm hơn khi cuộn
}) {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: once,
		threshold: amount,
		rootMargin: preloadOffset,
	});

	useEffect(() => {
		controls.start(inView ? "visible" : "hidden");
	}, [controls, inView]);

	const variants = {
		hidden: { opacity: 0, x, y, willChange: "opacity, transform" },
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			willChange: "auto",
			transition: { duration: 0.6, ease: "easeOut", delay },
		},
	};

	return (
		<LazyMotion features={domAnimation}>
			<m.div ref={ref} initial="hidden" animate={controls} variants={variants}>
				{children}
			</m.div>
		</LazyMotion>
	);
}
