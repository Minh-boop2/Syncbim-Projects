import { useRef } from "react";
import Section from "../common/Section";
import { ScrollParallax } from "react-just-parallax";
import { curve, darkSyncbimPlatform, lightSyncbimPlatform } from "../../assets";
import { heroIcons, linksync } from "../../constants";
import CompanyLogos from "../common/CompanyLogos";
import Notification from "../common/Notification";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import "../Effect/TextHero.css";
import React from "react";

const Hero = () => {
	return (
		<Section>
			<div className="container relative">
				{/* Tiêu đề Hero */}
				<div className="relative z-[60] mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
					<h1 className="h1 mb-6 tracking-tight">
						<span className="relative mb-6 inline-block">
							Sync<span className="font-semibold">BIM</span>
							<img
								src={curve}
								className="absolute left-0 top-full w-full"
								width={624}
								height={28}
								alt="Curve"
							/>
						</span>
						<br />
						<span className="group inline-block max-w-full animate-typingBlink cursor-pointer overflow-hidden whitespace-normal border-r-4 border-blue-500 sm:whitespace-nowrap">
							<h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-[length:200%_200%] bg-clip-text font-bold text-transparent transition-all duration-500 group-hover:bg-[position:100%_0]">
								Nền tảng
							</h1>
							<h2 className="text-slate-700 transition-colors duration-300 group-hover:text-blue-500 dark:text-slate-300">
								Quản lý dự án và Cộng tác
							</h2>
						</span>
					</h1>

					{/* Đoạn mô tả */}
					<p className="dark:black body-1 mx-auto mb-6 inline-block max-w-3xl rounded-xl bg-gradient-to-r from-cyan-200 to-white bg-left bg-no-repeat transition-[background-size] duration-500 ease-out [background-size:0%_100%] hover:[background-size:100%_100%] dark:from-blue-300 lg:mb-8">
						SyncBIM mang đến môi trường cộng tác hiệu quả, giúp các bên liên
						quan trong dự án truy cập, chia sẻ dữ liệu tức thời, đồng thời đảm
						bảo tính bảo mật, thống nhất thông tin, giúp tối ưu hóa quy trình
						làm việc, giảm thiểu sai sót và tiết kiệm thời gian. Nhờ đó, góp
						phần đẩy nhanh tiến độ dự án....
					</p>

					{/* Nút CTA */}
					<div className="mx-auto flex flex-col justify-center gap-3 sm:flex-row">
						{linksync.map(
							(link) =>
								parseInt(link.id) < 3 && (
									<a
										key={link.id}
										href={link.link} // <-- dùng link từ mảng
										target="_blank" // <-- mở tab mới
										rel="noopener noreferrer" // <-- an toàn
										className="group relative z-[70] transform cursor-pointer overflow-hidden rounded border-2 border-gray-400 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:!border-blue-500 hover:!bg-blue-500 hover:!text-white hover:shadow-xl sm:w-[150px]"
									>
										{link.product}
										<span
											className="absolute right-0 top-0 origin-bottom-left -translate-y-full translate-x-1/3 rotate-45 bg-red-800 px-5 py-1 text-center text-xs uppercase tracking-wider text-white group-hover:bg-yellow-500"
											aria-hidden="true"
										>
											New
										</span>
									</a>
								),
						)}
					</div>
				</div>

				{/* Hero Preview */}
				<div className="relative mx-auto max-w-[22rem] sm:max-w-[28rem] md:max-w-5xl xl:mb-24">
					{/* Viền 7 màu mỏng đều 4 cạnh */}
					<div className="relative rounded-2xl bg-conic-gradient p-[2px]">
						{/* Frame bên trong: bo tròn + ẩn tràn để ảnh bo đủ 4 góc */}
						<div className="relative overflow-hidden rounded-[0.9rem] bg-white dark:bg-n-8">
							{/* Tỉ lệ ảnh: mobile 4:3, md:16/9, lg:1024/490 */}
							<div className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[1024/490]">
								{/* Light */}
								<img
									src={lightSyncbimPlatform}
									alt="platform.syncbim.com"
									className="block h-full w-full rounded-[0.9rem] object-contain dark:hidden"
								/>

								{/* Dark */}
								<img
									src={darkSyncbimPlatform}
									alt="platform.syncbim.com"
									className="hidden h-full w-full rounded-[0.9rem] object-contain dark:block"
								/>

								{/* Parallax badges chỉ hiển thị desktop như cũ */}
								<ScrollParallax
									isAbsolutelyPositioned
									className="pointer-events-none"
								>
									<ul className="absolute bottom-[7.5rem] left-[2rem] hidden rounded-2xl border border-n-1/10 bg-slate-300 px-1 py-1 backdrop-blur dark:bg-n-9/40 xl:flex">
										{heroIcons.map((icon, index) => (
											<li className="p-5" key={index}>
												<img src={icon} width={24} height={25} alt={icon} />
											</li>
										))}
									</ul>
								</ScrollParallax>

								<ScrollParallax
									isAbsolutelyPositioned
									className="pointer-events-none bg-slate-50 dark:bg-n-8"
								>
									<Notification
										className="absolute bottom-[3rem] right-[2rem] hidden w-[18rem] bg-slate-50 dark:bg-n-8 xl:flex"
										title="Phối hợp nhóm"
									/>
								</ScrollParallax>
							</div>
						</div>
					</div>
				</div>

				{/* Logo các công ty */}
			</div>
			<BottomLine />
		</Section>
	);
};

export default Hero;
