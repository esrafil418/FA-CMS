import { useEffect, useState } from "react";
import ErrorBox from "../Error/ErrorBox";
import "./Comments.css";

export default function Comments() {
	const [allComments, setAllComments] = useState([]);

	const API_BASE_URL = "http://localhost:3000/api/comments";

	useEffect(() => {
		fetch(API_BASE_URL)
			.then((res) => res.json())
			.then((comments) => setAllComments(comments));
	}, []);
	return (
		<div>
			<ErrorBox msg="هیچ کامنتی یافت نشد!" />
			<table className="cms-table">
				<thead>
					<tr>
						<th>اسم کاربر</th>
						<th>محصول</th>
						<th>کامنت</th>
						<th>تاریخ</th>
						<th>ساعت</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>علی</td>
						<td>آیفون 13</td>
						<td>
							<button type="button">مشاهده متن</button>
						</td>
						<td>1405-01-01</td>
						<td>16:30</td>
						<td>
							<button type="button">حذف</button>
							<button type="button">ویرایش</button>
							<button type="button">پاسخ</button>
							<button type="button">تایید</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
