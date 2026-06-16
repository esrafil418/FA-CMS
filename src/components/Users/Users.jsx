import { useEffect, useState } from "react";
import ErrorBox from "../Error/ErrorBox";
import "./Users";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Users() {
	const [users, setUsers] = useState([]);
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
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
										<button type="button">ویرایش</button>
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
		</div>
	);
}
