import { useEffect, useState } from "react";
import ErrorBox from "../Error/ErrorBox";
import "./Users.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function Users() {
	const [users, setUsers] = useState([]);
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowEditModal, setIsShowEditModal] = useState(false);
	const [mainUserID, setMainUserID] = useState(null);

	const API_BASE_URL = "http://localhost:3000/api/users";

	useEffect(() => {
		getAllUsers();
	}, []);

	function getAllUsers() {
		fetch(`${API_BASE_URL}`)
			.then((res) => res.json())
			.then((users) => setUsers(users));
	}

	const closeDeleteModal = () => setIsShowDeleteModal(false);
	const closeEditModal = () => setIsShowEditModal(false);

	const removeUser = () => {
		fetch(`${API_BASE_URL}/${mainUserID}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				setIsShowDeleteModal(false);
				getAllUsers();
			});
	};

	const updateUser = (event) => {
		event.preventDefault();
		console.log("اطلاعات آپدیت شد");
		setIsShowEditModal(false);
	};

	return (
		<div className="cms-main">
			{users.length ? (
				<>
					<h1 className="cms-title">لیست کاربران</h1>

					<table className="cms-table">
						<thead>
							<tr>
								<th>نام و نام خانوادگی</th>
								<th>نام کاریری</th>
								<th>رمز عبور</th>
								<th>شماره تماس</th>
								<th>ایمیل</th>
							</tr>
						</thead>

						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<th>
										{user.firsname} {user.lastname}
									</th>
									<th>{user.username}</th>
									<th>{user.password}</th>
									<th>{user.phone}</th>
									<th>{user.email}</th>
									<td>
										<button
											type="button"
											onClick={() => {
												setIsShowDeleteModal(true);
												setMainUserID(user.id);
											}}
										>
											حذف
										</button>
										<button type="button">جزییات</button>
										<button
											type="button"
											onClick={() => {
												setIsShowEditModal(true);
												setMainUserID(user.id);
											}}
										>
											ویرایش
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				<ErrorBox msg="هیچ کاربری یافت نشد!" />
			)}

			{isShowDeleteModal && (
				<DeleteModal
					title="آیا از حذف اطمینان دارید؟"
					cancel={closeDeleteModal}
					submit={removeUser}
				/>
			)}

			{isShowEditModal && (
				<EditModal onClose={closeEditModal} onSubmit={updateUser}>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
							<input
								type="text"
								className="edit-user-info-input"
								placeholder="مقدار جدید را وارد نمایید"
							/>
						</span>
					</div>
				</EditModal>
			)}
		</div>
	);
}
