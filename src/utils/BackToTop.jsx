import { useState } from "react";

/**
 *
 * @returns Tạo một nút xuất hiện khi người dùng cuộn xuống trang và cho phép họ cuộn trở lại đầu trang.
 */

function BackToTop() {
	const [visible, setVisible] = useState(false);
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 1) {
			setVisible(true);
		} else if (scrolled <= 1) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<div style={{ display: visible ? "inline" : "none" }}>
			<button
				onClick={scrollToTop}
				// aria-label="Back to top"
				className="backToTop"
			>
				{/* <IoIosArrowDropupCircle className={classes.icon} /> */}
				<svg
					className="h-6 w-6 text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m16 17-4-4-4 4m8-6-4-4-4 4"
					/>
				</svg>
			</button>
		</div>
	);
}

export default BackToTop;
