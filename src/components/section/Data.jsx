import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../common/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import "../Effect/GlowCard.css";
import GlowCard from "../common/Glowcard";
import AddMemberForm from "../design/AddMember";
import "../Effect/textData.css";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

function Data() {
	const [pendingDeleteId, setPendingDeleteId] = useState(null);

	const handleDeleteMember = (id) => setPendingDeleteId(id);

	const confirmDelete = () => {
		axios
			.delete(`http://localhost:5000/api/team/${pendingDeleteId}`)
			.then(() => {
				setTeam((prev) => prev.filter((mem) => mem._id !== pendingDeleteId));
				setPendingDeleteId(null);
			})
			.catch(console.error);
	};

	const handleAddMember = (newMember) => {
		// gọi localhost 5000 bên database
		axios
			.post("http://localhost:5000/api/team", newMember)
			.then((res) => {
				setTeam([...team, res.data]);
				setShowForm(false);
			})
			.catch((err) => console.error(err));
	};
	//  bật tắt và lưu chữ team
	const [team, setTeam] = useState([]);
	const [showForm, setShowForm] = useState(false);
	useEffect(() => {
		axios
			.get("http://localhost:5000/api/team")
			.then((res) => setTeam(res.data))
			.catch((err) => console.error(err));
	}, []);

	const [editMember, setEditMember] = useState(null);

	//hàm sửa

	const handleEditMember = (member) => {
		setEditMember(member);
		setShowForm(true);
	};

	//lưu sửa
	const handleUpdateMember = (updatedMember) => {
		axios
			.put(`http://localhost:5000/api/team/${updatedMember._id}`, updatedMember)
			.then((res) => {
				setTeam((prev) =>
					prev.map((mem) => (mem._id === updatedMember._id ? res.data : mem)),
				);
				setShowForm(false);
				setEditMember(null);
			})
			.catch((err) => console.error(err));
	};

	//xóa

	return (
		<Section className="relative flex flex-col items-center justify-center px-6 py-16">
			{/* Galaxy nền */}
			<BackgroundCircles />
			<ConfirmDeleteModal
				open={!!pendingDeleteId}
				title="Xóa mục này?"
				message="Hành động này không thể hoàn tác."
				confirmText="Xóa"
				cancelText="Hủy"
				onConfirm={confirmDelete}
				onClose={() => setPendingDeleteId(null)}
			/>
			;
			<div className="relative z-10 flex flex-col items-center text-center text-blue-500">
				<p className="text1 mb-8 text-5xl font-extrabold font-light text-blue-500 dark:text-gray-500">
					MEMBER VTCODE
				</p>
				<div className="sm:grid-col-2 grid w-full max-w-max grid-cols-2 justify-items-center gap-6 md:grid-cols-3">
					{team.map((member, index) => (
						<GlowCard
							key={member._id || index}
							member={member}
							onEdit={handleEditMember}
							onDelete={handleDeleteMember}
						/>
					))}
					{/* thêm nút ở đây */}
					{team.length < 6 && (
						<div
							onClick={() => setShowForm(true)}
							className="card flex cursor-pointer items-center justify-center text-4xl font-bold text-white transition hover:scale-105"
						>
							+
						</div>
					)}
				</div>
				{/* hiện form thêm khi nhấn + */}
				{showForm && (
					<AddMemberForm
						onClose={() => {
							setShowForm(false);
							setEditMember(null);
						}}
						onSubmit={editMember ? handleUpdateMember : handleAddMember}
						initialData={editMember}
					/>
				)}
			</div>
		</Section>
	);
}

export default Data;
