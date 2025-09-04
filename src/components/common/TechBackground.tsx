import React, { useEffect, useMemo, useRef } from "react";

export type TechBackgroundProps = {
	density?: number;
	speed?: number;
	colors?: string[];
	connectDistance?: number;
	sizeRange?: [number, number];
	opacity?: number;
	paused?: boolean;
	className?: string;
	zIndex?: number;
	blendMode?: React.CSSProperties["mixBlendMode"];
	interactive?: boolean;
	twinkle?: boolean;
	layers?: 1 | 2 | 3;
	cursorGlow?: boolean;
};

const prefersReducedMotion = () =>
	typeof window !== "undefined" &&
	window.matchMedia &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);

export default function TechBackground({
	density = 0.4,
	speed = 0.05,
	colors = ["#7dd3fc", "#60a5fa", "#a78bfa", "#f0abfc"],
	connectDistance = 120,
	sizeRange = [0.6, 1.8],
	opacity = 0.7,
	paused = false,
	className = "",
	zIndex = -10,
	blendMode = "screen",
	interactive = true,
	twinkle = true,
	layers = 2,
	cursorGlow = true,
}: TechBackgroundProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const rafRef = useRef<number | null>(null);
	const mouse = useRef<{
		x: number;
		y: number;
		inside: boolean;
		px: number;
		py: number;
	}>({ x: 0, y: 0, inside: false, px: 0, py: 0 });

	const opts = useMemo(
		() => ({
			density,
			speed,
			colors,
			connectDistance,
			sizeRange,
			opacity,
			interactive,
			twinkle,
			layers,
			cursorGlow,
		}),
		[
			density,
			speed,
			colors,
			connectDistance,
			sizeRange,
			opacity,
			interactive,
			twinkle,
			layers,
			cursorGlow,
		],
	);

	useEffect(() => {
		const el = containerRef.current;
		const canvas = canvasRef.current;
		if (!el || !canvas) return;

		const ctx = canvas.getContext("2d", { alpha: true });
		if (!ctx) return;

		let width = 0,
			height = 0,
			dpr = Math.max(1, window.devicePixelRatio || 1);

		type Particle = {
			x: number;
			y: number;
			vx: number;
			vy: number;
			r: number;
			c: string;
			z: number;
			a: number;
			ph: number;
		};

		let particles: Particle[] = [];

		const rnd = (a: number, b: number) => a + Math.random() * (b - a);

		const newParticle = (z: number): Particle => {
			const angle = rnd(0, Math.PI * 2);
			const layerMul = 1 + z * 0.55;
			const spd = rnd(opts.speed * 0.25, opts.speed) / layerMul;
			return {
				x: rnd(0, width),
				y: rnd(0, height),
				vx: Math.cos(angle) * spd,
				vy: Math.sin(angle) * spd,
				r: rnd(opts.sizeRange[0], opts.sizeRange[1]) * layerMul,
				c: opts.colors[Math.floor(Math.random() * opts.colors.length)],
				z,
				a: 1,
				ph: rnd(0, Math.PI * 2),
			};
		};

		const rebuild = () => {
			const rect = el.getBoundingClientRect();
			width = Math.floor(rect.width);
			height = Math.floor(rect.height);
			dpr = Math.max(1, window.devicePixelRatio || 1);
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = width + "px";
			canvas.style.height = height + "px";
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

			const base = (width * height) / 10000;
			const total = Math.round(clamp(base * opts.density, 40, 200));
			particles = [];
			for (let i = 0; i < total; i++) {
				const z = Math.floor(Math.random() * opts.layers);
				particles.push(newParticle(z));
			}
		};

		const onMove = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			mouse.current.x = e.clientX - rect.left;
			mouse.current.y = e.clientY - rect.top;
			mouse.current.inside =
				mouse.current.x >= 0 &&
				mouse.current.y >= 0 &&
				mouse.current.x <= rect.width &&
				mouse.current.y <= rect.height;
		};
		const onLeave = () => (mouse.current.inside = false);

		if (opts.interactive) {
			window.addEventListener("mousemove", onMove);
			window.addEventListener("mouseleave", onLeave);
		}

		const ro = new ResizeObserver(rebuild);
		ro.observe(el);
		rebuild();

		let last = performance.now();

		const step = (now: number) => {
			rafRef.current = requestAnimationFrame(step);
			if (paused || prefersReducedMotion()) return;

			const dt = Math.min(33, now - last);
			last = now;

			ctx.clearRect(0, 0, width, height);

			const maxDist2 = opts.connectDistance * opts.connectDistance;
			const repelR = 120;
			const repel2 = repelR * repelR;

			particles.sort((a, b) => a.z - b.z);

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];

				if (opts.interactive && mouse.current.inside) {
					const dx = p.x - mouse.current.x;
					const dy = p.y - mouse.current.y;
					const d2 = dx * dx + dy * dy;
					if (d2 < repel2 && d2 > 0.01) {
						const f = (1 - d2 / repel2) * 0.9;
						p.vx += (dx / Math.sqrt(d2)) * f * 0.02;
						p.vy += (dy / Math.sqrt(d2)) * f * 0.02;
					}
				}

				p.x += p.vx * (dt * 0.6);
				p.y += p.vy * (dt * 0.6);

				if (p.x < -10) p.x = width + 10;
				if (p.x > width + 10) p.x = -10;
				if (p.y < -10) p.y = height + 10;
				if (p.y > height + 10) p.y = -10;

				let alpha = opts.opacity;
				if (opts.twinkle) {
					p.ph += dt * 0.002 * (1 + p.z * 0.3);
					p.a = 0.8 + 0.2 * Math.sin(p.ph);
					alpha *= p.a;
				}

				ctx.globalAlpha = alpha;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = p.c;
				ctx.fill();

				for (let j = i + 1; j < particles.length; j++) {
					const b = particles[j];
					const dx = p.x - b.x;
					const dy = p.y - b.y;
					const d2 = dx * dx + dy * dy;
					if (d2 < maxDist2) {
						const t = 1 - d2 / maxDist2;
						ctx.strokeStyle = p.c;
						ctx.globalAlpha = alpha * t * 0.6 * (1 - 0.2 * p.z);
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(p.x, p.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
			}

			// Cursor glow directly in canvas
			if (opts.cursorGlow && mouse.current.inside) {
				const g = ctx.createRadialGradient(
					mouse.current.x,
					mouse.current.y,
					0,
					mouse.current.x,
					mouse.current.y,
					180,
				);
				g.addColorStop(0, "rgba(99,102,241,0.18)");
				g.addColorStop(1, "rgba(99,102,241,0)");
				ctx.fillStyle = g;
				ctx.fillRect(0, 0, width, height);
			}

			ctx.globalAlpha = 1;
		};

		rafRef.current = requestAnimationFrame(step);

		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			if (opts.interactive) {
				window.removeEventListener("mousemove", onMove);
				window.removeEventListener("mouseleave", onLeave);
			}
			ro.disconnect();
		};
	}, [opts, paused]);

	return (
		<div
			ref={containerRef}
			className={["pointer-events-none absolute inset-0", className].join(" ")}
			style={{ zIndex }}
			aria-hidden
		>
			<canvas
				ref={canvasRef}
				className="absolute inset-0"
				style={{ mixBlendMode: blendMode }}
			/>
		</div>
	);
}
