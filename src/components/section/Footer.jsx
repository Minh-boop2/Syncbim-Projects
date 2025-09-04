import Section from "../common/Section";
import { socials, linksync } from "../../constants";
import "../Effect/Apple.css";
import { syncbimSymbol } from "../../assets";
import { BottomLine } from "../design/Hero";
import TechBackground from "../common/TechBackground";
const Footer = () => {
	const brandHover = {
		Discord: "hover:bg-[#5865F2]/15 dark:hover:bg-[#5865F2]/20",
		Twitter: "hover:bg-[#1DA1F2]/15 dark:hover:bg-[#1DA1F2]/20",
		Instagram: "hover:bg-[#E1306C]/15 dark:hover:bg-[#E1306C]/20",
		Telegram: "hover:bg-[#229ED9]/15 dark:hover:bg-[#229ED9]/20",
		Facebook: "hover:bg-[#1877F2]/15 dark:hover:bg-[#1877F2]/20",
	};
	const brandColor = {
		Discord: "text-[#5865F2]",
		Twitter: "text-[#1DA1F2]",
		Instagram: "text-[#E1306C]",
		Telegram: "text-[#229ED9]",
		Facebook: "text-[#1877F2]",
	};

	const googlePlay = linksync.find((l) => l.product === "Google Play");
	const appStore = linksync.find((l) => l.product === "App Store");

	const quickLinks = [
		{ label: "Trang chủ", href: "/" },
		{ label: "Về chúng tôi", href: "/about" },
		{ label: "Blog", href: "/blog" },
		{ label: "Hỗ trợ / FAQ", href: "/support" },
	];
	const policyLinks = [
		{ label: "Chính sách bảo mật", href: "/privacy" },
		{ label: "Điều khoản sử dụng", href: "/terms" },
		{ label: "Chính sách đổi trả", href: "/refund" },
	];
	const contact = {
		email: "support@vtcode.vn",
		phone: "0123 456 789",
		address: "Tầng X, Tòa nhà Y, Quận Z, TP. HCM",
	};

	const SocialIcon = ({ name, className = "" }) => {
		switch (name) {
			case "Discord":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className={className}
						aria-hidden="true"
					>
						<path d="M20.317 4.369A17.44 17.44 0 0016.558 3a12.06 12.06 0 00-.59 1.21 16.146 16.146 0 00-4-.01A11.58 11.58 0 0011.38 3 17.41 17.41 0 007.62 4.369C4.802 8.53 4.2 12.58 4.494 16.58a17.6 17.6 0 004.285 2.147c.346-.48.653-.989.914-1.523a11.24 11.24 0 01-1.44-.69c.121-.088.239-.18.353-.275a8.2 8.2 0 006.71 0c.115.095.233.187.353.275-.46.27-.95.5-1.46.69.261.534.568 1.042.914 1.523a17.57 17.57 0 004.293-2.153c.357-4.69-.613-8.7-2.993-12.21zM9.75 13.5c-.65 0-1.18-.6-1.18-1.34 0-.74.53-1.35 1.18-1.35.65 0 1.18.61 1.18 1.35 0 .74-.53 1.34-1.18 1.34zm4.5 0c-.65 0-1.18-.6-1.18-1.34 0-.74.53-1.35 1.18-1.35.65 0 1.18.61 1.18 1.35 0 .74-.53 1.34-1.18 1.34z" />
					</svg>
				);
			case "Twitter":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className={className}
						aria-hidden="true"
					>
						<path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.1 1.6-2-.8.5-1.6.8-2.5 1A3.46 3.46 0 0012.6 8c0 .3 0 .6.1.8A9.88 9.88 0 013 5.1a3.48 3.48 0 001.1 4.7c-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.2 2.8 3.6-.5.1-1 .1-1.5 0 .4 1.4 1.8 2.5 3.3 2.5A7 7 0 012 18.4a9.86 9.86 0 005.4 1.6c6.5 0 10-5.4 10-10 0-.2 0-.3 0-.5.7-.5 1.3-1.1 1.6-1.8z" />
					</svg>
				);
			case "Instagram":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className={className}
						aria-hidden="true"
					>
						<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.5a1 1 0 110 2 1 1 0 010-2z" />
					</svg>
				);
			case "Telegram":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className={className}
						aria-hidden="true"
					>
						<path d="M21.9 4.2a1.5 1.5 0 00-2-.1L3.8 11.5a1.1 1.1 0 00.1 2.1l4.5 1.4 1.8 4.6a1.1 1.1 0 002 .1l2.6-3.3 4.4 3.2a1.4 1.4 0 002.2-.9l2.4-12a1.5 1.5 0 00-.9-1.5zM9.3 13.2l8.2-5.1-6.7 6.6-.5 2.5-.9-2.3-2.7-.8 2.6-.9z" />
					</svg>
				);
			case "Facebook":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className={className}
						aria-hidden="true"
					>
						<path d="M13 22v-8h2.7l.4-3H13V8.5c0-.9.3-1.5 1.6-1.5H16V4.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7v3h3v8h3z" />
					</svg>
				);
			default:
				return null;
		}
	};

	return (
		<footer aria-label="Site footer" role="contentinfo">
			<Section className="relative isolate">
				{/* <div className="md: absolute-top flex items-center justify-between px-5 py-[10px] md:-translate-x-20 lg:px-7.5 xl:px-10">
					<a
						className="absolute-top ml-0 flex w-[12rem] md:ml-5 md:pl-16"
						href="/"
					>
						<img
							src={syncbimSymbol}
							width={150}
							height={40}
							alt="SyncBIM"
							className="size-10"
						/>
						<span className="my-auto text-[22px]">
							<span>ync</span>
							<span className="font-semibold">BIM</span>
						</span>
					</a>
				</div> */}

				<div className="container">
					{/* 1 container duy nhất */}
					<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
						{/* Cột 1: Brand & bản quyền */}
						{/* Cột 1: Logo trên chữ */}
						<div className="space-y-3 md:-translate-y-12">
							{/* Logo */}
							<a href="/" className="flex items-center">
								<img
									src={syncbimSymbol}
									width={40}
									height={40}
									alt="SyncBIM"
									className="h-10 w-10"
								/>
								<span className="ml-2 text-[22px]">
									<span>ync</span>
									<span className="font-semibold">BIM</span>
								</span>
							</a>

							{/* Chữ giữ nguyên */}
							<div className="space-y-2">
								<p className="caption text-n-5 dark:text-n-3">
									&#169; {new Date().getFullYear()}. Đã đăng ký bản quyền.
								</p>
								<p className="caption text-n-5 dark:text-n-3">
									Sản phẩm của{" "}
									<span className="font-semibold text-n-7 dark:text-n-1">
										VTCODE
									</span>
								</p>

								<div className="mt-4 space-y-1 text-sm text-n-5 dark:text-n-3">
									<p>
										<a
											className="hover:underline"
											href={`mailto:${contact.email}`}
										>
											{contact.email}
										</a>
									</p>
									<p>
										<a
											className="hover:underline"
											href={`tel:${contact.phone.replace(/\s/g, "")}`}
										>
											{contact.phone}
										</a>
									</p>
									<p>{contact.address}</p>
								</div>
							</div>
						</div>

						{/* Cột 2: Quick links & Policies */}
						<div className="grid grid-cols-2 gap-6 md:gap-10">
							<nav aria-label="Điều hướng nhanh">
								<h4 className="mb-3 text-sm font-semibold text-n-7 dark:text-n-1">
									Liên kết Với Chúng Tôi
								</h4>
								<ul className="space-y-2 text-sm text-n-5 dark:text-n-1">
									{quickLinks.map((l) => (
										<li key={l.href}>
											<a
												href={l.href}
												className="hover:text-n-7 hover:underline dark:hover:text-n-1"
											>
												{l.label}
											</a>
										</li>
									))}
								</ul>
							</nav>
							<nav aria-label="Chính sách">
								<h4 className="mb-3 text-sm font-semibold text-n-7 dark:text-n-1">
									Chính sách
								</h4>
								<ul className="space-y-2 text-sm text-n-5 dark:text-n-1">
									{policyLinks.map((l) => (
										<li key={l.href}>
											<a
												href={l.href}
												className="hover:text-n-7 hover:underline dark:hover:text-n-1"
											>
												{l.label}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</div>

						{/* Cột 3: Store badges + socials */}
						<div className="flex flex-col items-center gap-6 md:items-end">
							<div className="flex flex-wrap items-center gap-4">
								{/* Google Play */}
								<a
									href={googlePlay?.link}
									target="_blank"
									rel="noreferrer"
									className="relative inline-flex items-center overflow-hidden rounded-lg border border-n-3 bg-transparent px-4 py-3 font-semibold text-n-7 hover:border-n-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-n-3/40 dark:border-white/15 dark:text-n-1 dark:hover:bg-white/10"
									aria-label="Tải ứng dụng trên Google Play"
								>
									{/* Light logo */}
									<svg
										className="block h-6 w-6 dark:hidden"
										viewBox="0 0 512 512"
										aria-hidden="true"
									>
										<path
											fill="#32BBFF"
											d="M99.6 8.1a50.2 50.2 0 0 0-38.8-6.7l230.9 230.9 37.4-37.4L99.6 8.1z"
										/>
										<path
											fill="#00CC96"
											d="M32.1 20.1c-6.4 8.6-10.1 19.1-10.1 30.2v411.4c0 11.1 3.7 21.6 10.1 30.2l197.0-197.0L32.1 20.1z"
										/>
										<path
											fill="#FF2D55"
											d="M464.3 212.1l-67.3-37.6-81.5 81.5 81.5 81.5 67.3-37.6c16.1-9 25.7-25.4 25.7-43.9s-9.6-34.9-25.7-43.9z"
										/>
										<path
											fill="#F7B500"
											d="M291.7 279.7L60.8 510.6c3.8.9 7.6 1.4 11.5 1.4 9.7 0 18.8-2.5 27.3-8.1l229.7-128.5-37.6-35.7z"
										/>
									</svg>
									{/* Dark logo */}
									<svg
										className="hidden h-6 w-6 text-white dark:block"
										viewBox="0 0 512 512"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
									</svg>
									<span className="ml-3 flex flex-col items-start leading-none">
										<span className="mb-0.5 text-[10px] uppercase tracking-wide text-n-5 dark:text-n-3">
											Get it on
										</span>
										<span className="title-font font-medium text-n-7 dark:text-n-1">
											{googlePlay?.product ?? "Google Play"}
										</span>
									</span>
								</a>

								{/* App Store */}
								<a
									href={appStore?.link}
									target="_blank"
									rel="noreferrer"
									className="relative inline-flex items-center overflow-hidden rounded-lg border border-n-3 bg-transparent px-4 py-3 font-semibold text-n-7 hover:border-n-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-n-3/40 dark:border-white/15 dark:text-n-1 dark:hover:bg-white/10"
									aria-label="Tải ứng dụng trên App Store"
								>
									<svg
										className="h-6 w-6 text-black dark:text-white"
										viewBox="0 0 305 305"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
										<path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
									</svg>
									<span className="ml-3 flex flex-col items-start leading-none">
										<span className="mb-0.5 text-[10px] uppercase tracking-wide text-n-5 dark:text-n-3">
											Download on the
										</span>
										<span className="title-font font-medium text-n-7 dark:text-n-1">
											{appStore?.product ?? "App Store"}
										</span>
									</span>
								</a>
							</div>

							{/* Socials */}
							<ul className="flex flex-wrap gap-5">
								{socials.map((item) => (
									<a
										key={item.id}
										href={item.url}
										target="_blank"
										rel="noreferrer"
										aria-label={item.title}
										title={item.title}
										className={`flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-gray-300 transition focus:outline-none focus:ring-2 focus:ring-n-3/40 ${brandHover[item.title] ?? "hover:bg-gray-100 dark:hover:bg-white/10"} dark:bg-n-7 dark:ring-white/10`}
									>
										<SocialIcon
											name={item.title}
											className={`h-4 w-4 ${brandColor[item.title] ?? "text-current"} dark:text-white`}
										/>
									</a>
								))}
							</ul>
						</div>
					</div>

					{/* line nhỏ: giảm khoảng cách để không dư */}
					<div className="mt-5 border-t border-n-6/60 pt-4 text-center text-xs text-n-5 dark:border-gray-500 dark:text-n-3">
						Made with ❤️ by{" "}
						<span className="font-medium text-n-7 dark:text-n-1">VTCODE</span>
					</div>
				</div>
			</Section>
		</footer>
	);
};

export default Footer;
