import FancyButton from "../Effect/FancyButton";

export default function ConfirmDeleteModal({
	open = false,
	title = "Xóa mục này?",
	message = "Hành động này không thể hoàn tác.",
	confirmText = "Xóa",
	cancelText = "Hủy",
	onConfirm = () => {},
	onClose = () => {},
}) {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
			<div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
				<h2 className="mb-2 text-lg font-bold">{title}</h2>
				<p className="mb-4 text-gray-600 dark:text-gray-300">{message}</p>
				<div className="flex justify-end gap-2">
					<FancyButton
						onClick={onClose}
						className="rounded bg-gray-200 px-4 py-2 dark:bg-gray-600"
					>
						{cancelText}
					</FancyButton>
					<FancyButton
						onClick={onConfirm}
						className="bg-red-500 px-4 py-2 text-white dark:bg-red-900"
					>
						{confirmText}
					</FancyButton>
				</div>
			</div>
		</div>
	);
}
