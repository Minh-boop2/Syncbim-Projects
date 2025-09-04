import React from "react";
import "../Effect/GlowCard.css";

const GlowCard = ({ member, onDelete, onEdit }) => {
	return (
		<div className="card bg-cyan-200 text-blue-500 dark:bg-black dark:text-gray-500">
			<img
				src={member.image}
				alt={member.name}
				style={{
					width: "100%",
					height: "140px",
					objectFit: "cover",
					borderRadius: "6px",
				}}
			/>
			<p className="heading mt-2">{member.name}</p>
			<p className="text-sm dark:text-pink-400">{member.position}</p>

			{/* nút sửa ✏️  */}

			<div className="absolute right-2 top-2 flex gap-2">
				<button
					onClick={() => onEdit(member)}
					title="Sửa"
					className="hovebg-yellow-400 rounded-full bg-yellow-500/80 p-1 text-sm transition"
				>
					✏️
				</button>
				{/* nút  xóa 🗑️ */}
				<button
					onClick={() => onDelete(member._id)}
					title="Xoá"
					className="rounded-full bg-red-500/80 p-1 text-sm transition hover:bg-red-400"
				>
					🗑️
				</button>
			</div>
		</div>
	);
};
export default GlowCard;
