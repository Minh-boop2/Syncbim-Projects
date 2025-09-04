import React, { useEffect, useState } from "react";
import FancyButton from "../Effect/FancyButton";

const AddMemberForm = ({ open = true, onSubmit, onClose, initialData }) => {
	const [formData, setFormData] = useState({
		name: initialData?.name || "",
		position: initialData?.position || "",
		image: initialData?.image || "",
	});

	// Esc để đóng modal
	useEffect(() => {
		const onKey = (e) => e.key === "Escape" && onClose?.();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);

	const handleChange = (e) => {
		setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const dataToSend = initialData
			? { ...formData, _id: initialData._id }
			: { ...formData };
		onSubmit?.(dataToSend);
	};

	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose?.();
			}}
		>
			<form
				onSubmit={handleSubmit}
				onClick={(e) => e.stopPropagation()}
				className="form w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-700"
			>
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-xl font-bold text-gray-700 dark:text-blue-600">
						{initialData ? "Chỉnh sửa thành viên" : "Thêm thành viên"}
					</h2>
					<button
						type="button"
						aria-label="Đóng"
						onClick={onClose}
						className="rounded p-2 hover:bg-gray-100"
					>
						✕
					</button>
				</div>

				<input
					type="text"
					name="name"
					placeholder="Tên"
					value={formData.name}
					onChange={handleChange}
					className="mb-3 w-full rounded border bg-white p-2 text-gray-700 dark:bg-gray-600 dark:text-blue-500"
				/>
				<input
					type="text"
					name="position"
					placeholder="Chức vụ"
					value={formData.position}
					onChange={handleChange}
					className="mb-3 w-full rounded border bg-white p-2 text-gray-700 dark:bg-gray-600 dark:text-blue-500"
				/>
				<input
					type="text"
					name="image"
					placeholder="Link ảnh (vd: https://i.pravatar.cc/150?u=abc)"
					value={formData.image}
					onChange={handleChange}
					className="mb-3 w-full rounded border bg-white p-2 text-gray-700 dark:bg-gray-600 dark:text-blue-500"
				/>

				<div className="flex justify-end gap-2">
					<FancyButton
						type="button"
						onClick={onClose}
						className="rounded bg-red-300 px-4 py-2 dark:bg-red-900"
					>
						Hủy
					</FancyButton>
					<FancyButton
						type="submit"
						className="rounded bg-green-300 px-4 py-2 text-white dark:bg-green-900"
					>
						Lưu
					</FancyButton>
				</div>
			</form>
		</div>
	);
};

export default AddMemberForm;
