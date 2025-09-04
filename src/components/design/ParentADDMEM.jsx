import React, { useState, useEffect } from "react";

const AddMemberForm = ({ open = true, onSubmit, onClose, initialData }) => {
	const [formData, setFormData] = useState({
		name: initialData?.name || "",
		position: initialData?.position || "",
		image: initialData?.image || "",
	});

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
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose?.();
			}}
		>
			<form
				onSubmit={handleSubmit}
				onClick={(e) => e.stopPropagation()}
				className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
			>
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-xl font-bold">
						{initialData ? "Chỉnh sửa thành viên" : "Thêm thành viên"}
					</h2>
					<button
						type="button"
						onClick={onClose}
						aria-label="Đóng"
						className="rounded p-2 hover:bg-gray-100"
					>
						✕
					</button>
				</div>

				<input
					name="name"
					placeholder="Tên"
					value={formData.name}
					onChange={handleChange}
					className="mb-3 w-full rounded border p-2"
				/>
				<input
					name="position"
					placeholder="Chức vụ"
					value={formData.position}
					onChange={handleChange}
					className="mb-3 w-full rounded border p-2"
				/>

				<input
					name="image"
					placeholder="Link ảnh"
					value={formData.image}
					onChange={handleChange}
					className="mb-4 w-full rounded border p-2"
				/>

				<div className="flex justify-end gap-2">
					<button
						type="button"
						onClick={onClose}
						className="rounded bg-gray-200 px-4 py-2"
					>
						Hủy
					</button>
					<button
						type="submit"
						className="rounded bg-blue-600 px-4 py-2 text-white"
					>
						Lưu
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddMemberForm;
