import Section from "../common/Section";
import Arrow from "../../assets/svg/Arrow";
import ClipPath from "../../assets/svg/ClipPath";
import { BottomLine } from "../design/Hero";
import TechBackground from "../common/TechBackground";

// ===== Icons inline (không cần package) =====
const Icon = ({ name }) => {
	const base = "h-5 w-5";
	switch (name) {
		case "Thảo luận": // chat
			return (
				<svg
					viewBox="0 0 24 24"
					className={base}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
				>
					<path d="M21 12a7 7 0 0 1-7 7H8l-5 3 2-5a7 7 0 1 1 16-5Z" />
				</svg>
			);
		case "Đội Ngũ": // users
			return (
				<svg
					viewBox="0 0 24 24"
					className={base}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
				>
					<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
					<circle cx="9" cy="7" r="4" />
					<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
					<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				</svg>
			);
		case "Nhiệm Vụ": // check-square
			return (
				<svg
					viewBox="0 0 24 24"
					className={base}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
				>
					<rect x="3" y="3" width="18" height="18" rx="3" />
					<path d="m9 12 2 2 4-4" />
				</svg>
			);
		case "Tập Tin": // files
			return (
				<svg
					viewBox="0 0 24 24"
					className={base}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
				>
					<path d="M14 2H6a2 2 0 0 0-2 2v12" />
					<path d="M14 2v6h6" />
					<path d="M16 13H8a2 2 0 0 0-2 2v5h10a2 2 0 0 0 2-2v-5a0 0 0 0 0 0 0Z" />
				</svg>
			);
		case "3D Model": // cube
			return (
				<svg
					viewBox="0 0 24 24"
					className={base}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
				>
					<path d="m21 16-9 5-9-5" />
					<path d="m3 8 9-5 9 5-9 5-9-5Z" />
					<path d="m3 8v8l9 5 9-5V8" />
				</svg>
			);
		case "Hoạt Động": // activity
			return (
				<svg
					viewBox="0 0 24 24"
					className={base}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
				>
					<path d="M22 12h-4l-3 7-6-14-3 7H2" />
				</svg>
			);
		case "Phối hợp": // link
			return (
				<svg
					viewBox="0 0 24 24"
					className={base}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
				>
					<path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
					<path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
				</svg>
			);
		case "Báo Cáo": // bar chart
			return (
				<svg
					viewBox="0 0 24 24"
					className={base}
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
				>
					<path d="M3 3v18h18" />
					<rect x="7" y="13" width="3" height="5" rx="1" />
					<rect x="12" y="9" width="3" height="9" rx="1" />
					<rect x="17" y="6" width="3" height="12" rx="1" />
				</svg>
			);
		default:
			return null;
	}
};

// ===== Data (không dùng backgroundUrl SVG để khỏi bị “viền thừa”) =====
const benefits = [
	{
		id: "0",
		title: "Thảo luận",
		text: [
			"Môi trường trực tuyến để trao đổi thông tin, cập nhật tiến độ và giải quyết vấn đề.",
			"Hỗ trợ chủ đề, bình luận, chia sẻ tệp.",
			"Lưu trữ lịch sử thảo luận; có tổng hợp/thống kê nội dung.",
		],
		imageUrl:
			"https://png.pngtree.com/png-clipart/20221002/original/pngtree-project-development-discuss-business-team-png-image_8651212.png",
	},
	{
		id: "1",
		title: "Đội Ngũ",
		text: [
			"Quản lý thành viên: vai trò, trách nhiệm, liên hệ, chuyên môn.",
			"Phân quyền tính năng & dữ liệu theo vai trò.",
			"Theo dõi hiệu quả: thời gian hoạt động, nhiệm vụ hoàn thành.",
		],
		imageUrl:
			"https://unsplash.com/photos/QckxruozjRg/download?force=true&w=1600",
	},
	{
		id: "2",
		title: "Nhiệm Vụ",
		text: [
			"Tạo, giao, quản lý nhiệm vụ; người phụ trách; deadline; ưu tiên.",
			"Theo dõi tiến độ, trạng thái; đánh giá hoàn thành.",
			"Nhắc nhở/cảnh báo nhiệm vụ sắp đến hạn hoặc quá hạn.",
		],
		imageUrl:
			"https://unsplash.com/photos/fQOyF0D0cDU/download?force=true&w=1600",
	},
	{
		id: "3",
		title: "Tập Tin",
		text: [
			"Lưu trữ tập trung: bản vẽ, mô hình, báo cáo, hình ảnh, video.",
			"Quản lý phiên bản; truy hồi lịch sử thay đổi.",
			"Chia sẻ an toàn theo quyền.",
		],
		imageUrl:
			"https://unsplash.com/photos/fhAfLtHToCs/download?force=true&w=1600",
	},
	{
		id: "4",
		title: "3D Model",
		text: [
			"Xem/chia sẻ mô hình 3D trực tuyến.",
			"Hỗ trợ IFC, Revit…",
			"Đo lường, đánh dấu, chú thích mô hình.",
		],
		imageUrl:
			"https://unsplash.com/photos/TZs_q7jH4Ck/download?force=true&w=1600",
	},
	{
		id: "5",
		title: "Hoạt Động",
		text: [
			"Nhật ký hoạt động: thao tác, thời gian, nội dung thay đổi.",
			"Tổng quan hiệu quả cộng tác; phát hiện vấn đề.",
			"Bộ lọc theo thời gian, người thực hiện, loại thao tác.",
		],
		imageUrl:
			"https://unsplash.com/photos/qwtCeJ5cLYs/download?force=true&w=1600",
	},
	{
		id: "6",
		title: "Phối hợp",
		text: [
			"Chat, quản lý quy trình, phân tích dữ liệu dự án.",
			"Đảm bảo nhất quán thông tin; giảm xung đột.",
			"Kết nối hệ thống ngoài để trao đổi dữ liệu.",
		],
		imageUrl:
			"https://unsplash.com/photos/m29D0DvAhF0/download?force=true&w=1600",
	},
	{
		id: "7",
		title: "Báo Cáo",
		text: [
			"Báo cáo tiến độ/hoạt động/nhiệm vụ.",
			"Tùy biến nội dung, định dạng theo dự án.",
			"Xuất PDF / Word / Excel.",
		],
		imageUrl:
			"https://unsplash.com/photos/JKUTrJ4vK00/download?force=true&w=1600",
	},
];

const Benefits = () => {
	return (
		<Section id="feature">
			{/* keyframes/animation – nhúng thẳng trong component */}
			<style>{`
        @keyframes spinBorder { to { transform: rotate(360deg); } }
        .border-anim { transform: rotate(0deg); }
        .group:hover .border-anim { animation: spinBorder 6s linear infinite; }
      `}</style>

			<div className="container relative z-2">
				{/* Header */}
				<div className="mx-auto mb-10 text-center">
					<h2 className="h-[3.5rem] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent duration-300 hover:scale-125 md:text-5xl">
						SyncBIM
					</h2>
					<div className="mt-2 inline-block text-black/60 dark:text-white/70">
						Cung Cấp Các Tính Năng Nổi Bật
						<span className="mx-auto mt-2 block h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400/70 to-purple-500/70" />
					</div>
				</div>

				{/* Cards */}
				<div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{benefits.map((item) => (
						<div key={item.id} className="group relative h-full rounded-3xl">
							{/* animated gradient border */}
							<div
								className="pointer-events-none absolute inset-0 rounded-3xl"
								style={{
									background:
										"conic-gradient(from 0deg, rgba(56,189,248,.5), rgba(139,92,246,.5), rgba(236,72,153,.45), rgba(56,189,248,.5))",
									WebkitMask:
										"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
									WebkitMaskComposite: "xor",
									maskComposite: "exclude",
								}}
							>
								<div className="border-anim absolute -inset-0 rounded-3xl group-hover:[animation-duration:3s]" />
							</div>

							{/* card body */}
							<div className="relative flex h-full flex-col rounded-3xl bg-white/80 p-6 shadow-[0_10px_0px_-10px_rgba(0,0,0,.35)] backdrop-blur-xl transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:rotate-[0.35deg] hover:scale-[1.01] hover:shadow-[0_18px_45px_-12px_rgba(14,165,233,.35)] dark:dark:bg-slate-700/60 dark:hover:shadow-[0_18px_45px_-12px_rgba(168,85,247,.35)]">
								{/* soft gradient inside */}
								<div className="pointer-events-none absolute inset-0 hidden rounded-2xl bg-[radial-gradient(120%_80%_at_0%_0%,rgba(56,189,248,.10),transparent_60%),radial-gradient(120%_80%_at_100%_100%,rgba(236,72,153,.10),transparent_60%)] dark:block" />

								{/* icon pill + title */}
								<div className="relative mb-4 flex items-center gap-3">
									<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-slate-800 dark:text-white">
										<Icon name={item.title} />
									</span>
									<Arrow />
									<h5 className="h5 font-semibold tracking-tight text-slate-900 dark:text-white">
										{item.title}
									</h5>
								</div>

								{/* bullets (grow để lấp đầy không gian) */}
								<ul className="flex-1 list-disc space-y-2 pl-5 text-[0.95rem] font-medium leading-relaxed text-slate-800 dark:text-slate-100">
									{item.text.map((des, idx) => (
										<li key={idx}>{des}</li>
									))}
								</ul>

								{/* ảnh nền mờ khi hover */}
								{item.imageUrl && (
									<div className="pointer-events-none overflow-hidden">
										<img
											src={item.imageUrl}
											alt={item.title}
											className="absolute inset-0 h-full w-full rounded-3xl object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-20"
										/>
									</div>
								)}
								<ClipPath />
							</div>

							{/* shadow nền rơi nhẹ */}
							<div className="absolute -bottom-4 left-6 right-6 h-6 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-400/20 opacity-70 blur-xl" />
						</div>
					))}
				</div>
			</div>
			<BottomLine />
		</Section>
	);
};

export default Benefits;
