import { company } from "../../constants";
import Heading from "../common/Heading";
import Section from "../common/Section";
import { useState } from "react";
import axios from "axios";
import { BottomLine } from "../design/Hero";
import TechBackground from "../common/TechBackground";
import vtcode from "../../assets/contact/vtcode.jpg";
export default function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		if (!form.email || !form.phone) {
			setError("Vui lòng điền email và điện thoại");
			return;
		}
		// cố gắng post và ktra lỗi
		try {
			const res = await axios.post("http://localhost:5000/api/contacts", form);
			setSuccess(res.data.message);
			setForm({ name: "", email: "", phone: "", message: "" });
		} catch (err) {
			setError(err.response?.data?.message || "Đã có lỗi xảy ra.");
		}
	};

	return (
		<Section
			crosses
			id="contact"
			className="text-bal relative font-bold dark:text-gray-700"
		>
			<Heading
				// tag="Thông tin liên hệ"
				title="Thông tin liên hệ"
				text="Chúng tôi sẵn sàng tiếp nhận mọi đề xuất hoặc chỉ để tìm hiểu về thành viên"
				className="flex flex-col items-center text-gray-700 dark:text-n-1"
			/>

			{/* <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
			<div className="container flex flex-wrap gap-10 md:flex-nowrap">
				{/* Bản đồ */}
				<div className="relative flex w-full items-end justify-center overflow-hidden rounded-xl p-10 md:w-1/2 lg:w-2/3">
					<iframe
						width="100%"
						height="100%"
						className="absolute inset-0"
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4649.079730542517!2d106.71353587570333!3d10.78739865898992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f53388712e7%3A0x9140d35193f5f8c5!2zMjM0IMSQLiBOZy4gVOG6pXQgVOG7kSwgUGjGsOG7nW5nIDIyLCBCw6xuaCBUaOG6oW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1720687048297!5m2!1svi!2s"
					/>

					<div className="absolute right-4 top-4 hidden w-[280px] items-center space-x-3 rounded-xl bg-white/70 p-4 shadow-lg backdrop-blur-md sm:flex">
						<img
							src={vtcode}
							alt="VTCODE Logo"
							className="h-12 w-12 rounded-full border"
						/>
						<div className="hidden text-sm sm:block">
							<p className="font-bold text-gray-800">VTCODE Company</p>
							<p className="text-gray-600">📞 1900 77 99 18</p>
							<p className="text-gray-600">🕒 8:00 - 17:30</p>
							<p className="text-gray-600">📮 info@vtcde.com</p>
						</div>
					</div>

					{/* Đại chỉ Công ty */}
					<div className="relative flex flex-wrap rounded bg-n-1 bg-opacity-60 py-6 shadow-md">
						<div className="px-6 lg:w-1/2">
							<h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
								Địa chỉ:
							</h2>
							<p className="mt-1 text-sm">{company.address}</p>
						</div>
						<div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
							<h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
								Email:
							</h2>
							<a className="text-sm leading-relaxed">{company.email}</a>
							<h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
								Điện thoại:
							</h2>
							<p className="white text-sm leading-relaxed">{company.phone}</p>
						</div>
					</div>
				</div>
				{/* <GradientLight /> */}
				<form
					onSubmit={handleSubmit}
					className="mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3"
				>
					<h2 className="title-font mb-1 text-lg font-semibold text-black dark:font-light dark:text-n-1">
						Phản hồi
					</h2>
					<p className="mb-5 font-extralight leading-relaxed text-black dark:text-n-1/50">
						Nếu bạn có bất cứ sự quan tâm nào về sản phẩm hoặc bất cứ nội dung
						nào của chúng tôi, có thể gửi thông tin theo mẫu sau:
					</p>
					<div className="relative mb-4">
						<label
							htmlFor="name"
							className="text-sm leading-7 text-n-9 dark:text-n-1"
						>
							Họ và Tên
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Họ và Tên"
							value={form.name}
							onChange={handleChange}
							className="w-full rounded border border-gray-300 bg-n-6/5 px-3 py-1 text-xs leading-8 text-n-1/50 text-n-9 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-0 focus:ring-indigo-200 dark:text-n-1"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="email"
							className="text-sm leading-7 text-n-9 dark:text-n-1"
						>
							Điện thoại
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="Điện thoại"
							value={form.phone}
							onChange={handleChange}
							className="w-full rounded border border-gray-300 bg-n-6/5 px-3 py-1 text-xs leading-8 text-n-1/50 text-n-9 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-0 focus:ring-indigo-200 dark:text-n-1"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="email"
							className="text-sm leading-7 text-n-9 dark:text-n-1"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="hopthucuaban@email.com"
							value={form.email}
							onChange={handleChange}
							className="w-full rounded border border-gray-300 bg-n-6/5 px-3 py-1 text-xs leading-8 text-n-1/50 text-n-9 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-0 focus:ring-indigo-200 dark:text-n-1"
						/>
					</div>

					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="text-sm leading-7 text-n-9 dark:text-n-1"
						>
							Tin nhắn:
						</label>
						<textarea
							type="text"
							id="message"
							name="message"
							placeholder="Thông tin lời nhắn"
							value={form.message}
							onChange={handleChange}
							className="h-32 w-full rounded border border-gray-300 bg-n-6/5 px-3 py-1 text-xs leading-8 text-n-1/50 text-n-9 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-0 focus:ring-indigo-200 dark:text-n-1"
						/>
					</div>

					<button
						type="submit"
						class="font-barlow group relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-10 py-3 text-center text-base uppercase text-white outline-offset-4 transition-transform duration-300 ease-in-out focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-white"
					>
						<span class="font-poppins relative z-20 font-bold text-gray-700 dark:text-white">
							Xác Nhận Gửi
						</span>

						<span class="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/2 -translate-x-[75%] rotate-12 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply blur-md transition-transform duration-700 ease-out group-hover:translate-x-[225%] dark:via-white/25 dark:mix-blend-normal"></span>

						<span class="drop-shadow-3xl absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-2 border-t-2 border-sky-300 transition-all duration-300 ease-in-out hover:border-blue-500 dark:border-[#D4EDF9]"></span>

						<span class="drop-shadow-3xl absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-2 border-t-2 border-sky-300 transition-all duration-300 ease-in-out hover:border-blue-500 group-hover:h-[90%] dark:border-[#D4EDF9]"></span>

						<span class="drop-shadow-3xl absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-2 border-l-2 border-sky-300 transition-all duration-300 ease-in-out hover:border-blue-500 group-hover:h-[90%] dark:border-[#D4EDF9]"></span>

						<span class="drop-shadow-3xl absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-2 border-r-2 border-sky-300 transition-all duration-300 ease-in-out hover:border-blue-500 dark:border-[#D4EDF9]"></span>
					</button>

					{error && <p className="mb-2 pt-3 text-xs text-red-500">{error}</p>}
					{success && (
						<p className="mb-2 pt-3 text-xs text-green-500">{success}</p>
					)}

					<p className="mt-3 text-xs font-semibold text-black dark:font-light dark:text-n-1/50">
						Chúng tôi sẽ phản hồi lại trong thời gian sớm nhất.
					</p>
				</form>
			</div>
			<BottomLine />
		</Section>
	);
}
