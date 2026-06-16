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

	const [userNewFirstname, setUserNewFirstname] = useState("");
	const [userNewLastname, setUserNewLastname] = useState("");
	const [userNewUsername, setUserNewUsername] = useState("");
	const [userNewPassword, setUserNewPassword] = useState("");
	const [userNewPhone, setUserNewPhone] = useState("");
	const [userNewCity, setUserNewCity] = useState("");
	const [userNewEmail, setUserNewEmail] = useState("");
	const [userNewAddress, setUserNewAddress] = useState("");
	const [userNewBuy, setUserNewBuy] = useState("");
	const [userNewScore, setUserNewScore] = useState("");

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
												setUserNewFirstname(user.firsname);
												setUserNewLastname(user.lastname);
												setUserNewUsername(user.username);
												setUserNewPassword(user.password);
												setUserNewPhone(user.phone);
												setUserNewCity(user.city);
												setUserNewEmail(user.email);
												setUserNewAddress(user.address);
												setUserNewBuy(user.buy);
												setUserNewScore(user.score);
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
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewFirstname}
							onChange={(event) => setUserNewFirstname(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewLastname}
							onChange={(event) => setUserNewLastname(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewUsername}
							onChange={(event) => setUserNewUsername(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewPassword}
							onChange={(event) => setUserNewPassword(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewPhone}
							onChange={(event) => setUserNewPhone(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewCity}
							onChange={(event) => setUserNewCity(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewEmail}
							onChange={(event) => setUserNewEmail(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewAddress}
							onChange={(event) => setUserNewAddress(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewBuy}
							onChange={(event) => setUserNewBuy(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
					<div className="edit-user-info-input-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							className="edit-user-info-input"
							value={userNewScore}
							onChange={(event) => setUserNewScore(event.target.value)}
							placeholder="مقدار جدید را وارد نمایید"
						/>
					</div>
				</EditModal>
			)}
		</div>
	);
}
