import { useEffect, useState } from "react";
import ErrorBox from "../Error/ErrorBox";
import "./Comments.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Comments() {
	const [allComments, setAllComments] = useState([]);
	const [isShowDetailModal, setIsShowDetailModal] = useState(false);
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [mainCommentBody, setMainCommentBody] = useState("");
	const [commentID, setCommmentID] = useState(null);

	const API_BASE_URL = "http://localhost:3000/api/comments";

	useEffect(() => {
		getAllComments();
	}, []);

	function getAllComments() {
		fetch(API_BASE_URL)
			.then((res) => res.json())
			.then((comments) => {
				setAllComments(comments);
			});
	}

	const closeDetailsModal = () => setIsShowDetailModal(false);
	const closeDeleteModal = () => setIsShowDeleteModal(false);

	const deleteComment = () => {
		fetch(`${API_BASE_URL}/${commentID}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				setIsShowDeleteModal(false);
				getAllComments();
			});
	};

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
									<button
										type="button"
										onClick={() => {
											setIsShowDeleteModal(true);
											setCommmentID(comment.id);
										}}
									>
										حذف
									</button>
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

			{isShowDeleteModal && (
				<DeleteModal cancel={closeDeleteModal} submit={deleteComment} />
			)}
		</div>
	);
}
