import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { syncbimSymbol } from "../../assets";
import MenuSvg from "../../assets/svg/MenuSvg";
import { navigation } from "../../constants";
import useTheme from "../../utils/useTheme";
import { HamburgerMenu } from "../design/Header";
import Sun from "../../assets/svg/Sun";
import Moon from "../../assets/svg/Moon";
import "../Effect/MenuHeader.css";

const SCROLL_DELTA = 8; // ngưỡng tối thiểu để tính là cuộn
const REVEAL_AT_TOP = 80; // luôn hiện khi ở gần top

const Header = () => {
	const pathname = useLocation();
	const [openNavigation, setOpenNavigation] = useState(false);
	const [colorTheme, setColorTheme] = useTheme();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false,
	);

	//  ẩn/hiện theo hướng cuộn
	const [show, setShow] = useState(true);
	const lastYRef = useRef(0);
	const tickingRef = useRef(false);
	const headerRef = useRef(null);
	{
		/* Overlay tối phía sau menu (click để đóng) */
	}
	{
		openNavigation && (
			<button
				aria-label="Close menu"
				onClick={handleClick}
				className="fixed inset-0 z-40 bg-black/40 lg:hidden"
			/>
		);
	}
	// chừa chỗ cho header fixed (đỡ che nội dung)
	useEffect(() => {
		const h = headerRef.current?.offsetHeight || 60;
		document.documentElement.style.setProperty("--header-h", `${h}px`);
	}, []);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY;
			if (!tickingRef.current) {
				window.requestAnimationFrame(() => {
					const lastY = lastYRef.current;
					const diff = Math.abs(y - lastY);

					// hiện khi ở gần top
					if (y < REVEAL_AT_TOP) setShow(true);
					// đang mở menu => luôn hiện
					else if (openNavigation) setShow(true);
					// nếu cuộn đủ ngưỡng thì mới xử lý hướng
					else if (diff > SCROLL_DELTA) {
						const goingDown = y > lastY;
						setShow(!goingDown); // xuống: ẩn, lên: hiện
					}

					lastYRef.current = y;
					tickingRef.current = false;
				});
				tickingRef.current = true;
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [openNavigation]);

	const toggleNavigation = () => {
		if (openNavigation) {
			setOpenNavigation(false);
			enablePageScroll();
		} else {
			setOpenNavigation(true);
			setShow(true); // mở menu thì ép hiện header
			disablePageScroll();
		}
	};

	const handleClick = () => {
		if (!openNavigation) return;
		enablePageScroll();
		setOpenNavigation(false);
	};

	const handleMode = () => {
		setColorTheme(colorTheme);
		setDarkSide(!darkSide);
	};

	return (
		<div
			ref={headerRef}
			className={`fixed left-0 top-0 z-50 w-full bg-n-1 dark:bg-n-8 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "" : "shadow-lg backdrop-blur-sm"} transition-transform duration-300 will-change-transform ${show ? "translate-y-0" : "-translate-y-full"}`}
		>
			<div className="flex items-center justify-between bg-n-1 px-5 py-[10px] dark:bg-n-8 lg:px-7.5 xl:px-10">
				<a className="ml-5 flex w-[12rem]" href="/">
					<img
						src={syncbimSymbol}
						width={150}
						height={40}
						alt="SyncBIM"
						className="size-10"
					/>
					<span className="my-auto ml-2 -translate-x-2 text-[22px]">
						<span>ync</span>
						<span className="font-semibold">BIM</span>
					</span>
				</a>

				{/* Danh mục */}
				<nav
					className={`${openNavigation ? "flex" : "hidden"} fixed bottom-0 left-0 right-0 top-[60px] grow bg-n-1 dark:bg-n-8 lg:static lg:mx-auto lg:flex`}
				>
					<div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
						<ul className="flex flex-col items-center gap-5 lg:flex-row">
							{navigation.map((item) => (
								<li key={item.id} className="group relative">
									<a
										href={item.href}
										onClick={handleClick}
										className={`relative block text-2xl uppercase text-n-8 transition-colors hover:text-blue-800 dark:text-n-1/70 ${
											item.onlyMobile ? "lg:hidden" : ""
										} px-6 text-center lg:text-sm ${
											item.url === pathname.hash
												? "z-2 lg:text-n-1"
												: "lg:text-n-8 lg:dark:text-n-1/70"
										} hover:font-semibold dark:hover:text-n-1 lg:leading-5 hover:lg:text-blue-800`}
									>
										<div className="flex items-center">
											{item.title}
											{!!item.subItems.length && (
												<svg
													className="ms-3 h-2.5 w-2.5"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 10 6"
												>
													<path
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="m1 1 4 4 4-4"
													/>
												</svg>
											)}
										</div>
									</a>

									{!!item.subItems.length && (
										<div className="absolute top-full z-50 mt-1 hidden w-full rounded-md bg-n-6 p-2 font-light shadow-md group-hover:block">
											<ul className="ul flex flex-col gap-4">
												{item.subItems.map((subItem) => (
													<li
														key={subItem.id}
														className="ul group relative px-2 py-1"
													>
														<a
															href={subItem.href}
															className="ul block text-xs uppercase text-n-1/60 hover:text-n-1"
														>
															{subItem.title}
														</a>
														<span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-[#ce4f20] transition-transform duration-300 ease-out group-hover:scale-x-100" />
													</li>
												))}
											</ul>
										</div>
									)}
								</li>
							))}
						</ul>
					</div>
					<HamburgerMenu />
				</nav>

				<div className="ml-auto mr-5 flex w-[12rem] flex-none justify-end gap-3">
					<button px="px-3" onClick={handleMode} className="size-[40px]">
						{darkSide ? (
							<Sun className="m-auto h-5 w-5 group-hover:text-n-1 dark:text-n-1/50" />
						) : (
							<Moon className="m-auto h-5 w-5 text-n-8/50 group-hover:text-color-1" />
						)}
					</button>

					<button
						className="my-auto flex size-[40px] lg:ml-auto lg:hidden"
						px="px-3"
						onClick={toggleNavigation}
					>
						<MenuSvg openNavigation={openNavigation} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
