import { useEffect, useState } from "react";
import ErrorBox from "../Error/ErrorBox";
import "./Users";

export default function Users() {
	const [users, setUsers] = useState([]);

	const API_BASE_URL = "http://localhost:3000/api/users";

	useEffect(() => {
		fetch(`${API_BASE_URL}`)
			.then((res) => res.json())
			.then((users) => setUsers(users));
	}, []);

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
										{user.firstname}
										{user.lastname}
									</th>
									<th>{user.username}</th>
									<th>{user.password}</th>
									<th>{user.phone}</th>
									<th>{user.email}</th>
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				<ErrorBox msg="هیچ کاربری یافت نشد!" />
			)}
		</div>
	);
}
