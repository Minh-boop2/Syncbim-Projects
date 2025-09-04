import React from "react";

export default function FancyCard({
	className = "",
	hoverShadowClass = "hover:shadow-[0_18px_45px_-12px_rgba(14,165,233,.35)]",
	children,
}) {
	return (
		// wrapper phải relative + group + rounded + overflow-hidden để bo góc mượt
		<div className="group relative overflow-hidden rounded-2xl">
			{/* animated gradient border: CHỈ dark mode */}
			<div
				className="pointer-events-none absolute inset-0 hidden rounded-2xl p-[1px] dark:block"
				style={{
					background:
						"conic-gradient(from 0deg, rgba(56,189,248,.5), rgba(139,92,246,.5), rgba(236,72,153,.45), rgba(56,189,248,.5))",
					WebkitMask:
						"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
					WebkitMaskComposite: "xor",
					maskComposite: "exclude",
				}}
			>
				<div className="border-anim absolute inset-0 rounded-2xl group-hover:[animation-duration:3s]" />
			</div>

			{/* card body: light giữ nguyên; dark chỉ đổi nền nhẹ, còn border/overlay ẩn khi light */}
			<div
				className={
					[
						"relative flex h-full flex-col rounded-2xl p-6",
						"bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,.35)]",
						"transition-all duration-300 ease-out will-change-transform",
						"hover:-translate-y-1 hover:rotate-[0.35deg] hover:scale-[1.01]",
						hoverShadowClass,
						"dark:bg-slate-700/60",
					].join(" ") + (className ? " " + className : "")
				}
			>
				{/* overlay radial: CHỈ dark mode */}
				<div className="pointer-events-none absolute inset-0 hidden rounded-2xl bg-[radial-gradient(120%_80%_at_0%_0%,rgba(56,189,248,.10),transparent_60%),radial-gradient(120%_80%_at_100%_100%,rgba(236,72,153,.10),transparent_60%)] dark:block" />
				{children}
			</div>
		</div>
	);
}
