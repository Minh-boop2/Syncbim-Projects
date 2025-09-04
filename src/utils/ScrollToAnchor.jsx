import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			// khi đổi route mà không có hash → cuộn về đầu
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}

		const id = decodeURIComponent(hash.replace("#", ""));
		const el = document.getElementById(id);
		if (!el) return;

		// đợi DOM/layout ổn định 1 frame rồi cuộn
		const rAF = requestAnimationFrame(() => {
			el.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
		return () => cancelAnimationFrame(rAF);
	}, [pathname, hash]);

	return null;
}

export default ScrollToAnchor;
