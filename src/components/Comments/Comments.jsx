import { useEffect, useState } from "react";
import ErrorBox from "../Error/ErrorBox";
import "./Comments.css";
import DetailsModal from "../DetailsModal/DetailsModal";

export default function Comments() {
	const [allComments, setAllComments] = useState([]);
	const [isShowDetailModal, setIsShowDetailModal] = useState(false);
	const [mainCommentBody, setMainCommentBody] = useState("");

	const API_BASE_URL = "http://localhost:3000/api/comments";

	useEffect(() => {
		fetch(API_BASE_URL)
			.then((res) => res.json())
			.then((comments) => {
				setAllComments(comments);
			});
	}, []);

	const closeDetailsModal = () => setIsShowDetailModal(false);

	return (
		<div>
			{allComments.length ? (
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
						{allComments.map((comment) => (
							<tr key={comment.id}>
								<td>{comment.userID}</td>
								<td>{comment.productID}</td>
								<td>
									<button
										type="button"
										onClick={() => {
											setMainCommentBody(comment.body);
											setIsShowDetailModal(true);
										}}
									>
										مشاهده متن
									</button>
								</td>
								<td>{comment.date}</td>
								<td>{comment.hour}</td>
								<td>
									<button type="button">حذف</button>
									<button type="button">ویرایش</button>
									<button type="button">پاسخ</button>
									<button type="button">تایید</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<ErrorBox msg="هیچ کامنتی یافت نشد!" />
			)}

			{isShowDetailModal && (
				<DetailsModal onHide={closeDetailsModal}>
					<p className="text-modal">{mainCommentBody}</p>
				</DetailsModal>
			)}
		</div>
	);
}
