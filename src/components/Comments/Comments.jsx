import { useEffect, useState } from "react";
import ErrorBox from "../Error/ErrorBox";
import "./Comments.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

export default function Comments() {
	const [allComments, setAllComments] = useState([]);
	const [isShowDetailModal, setIsShowDetailModal] = useState(false);
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowEditModal, setIsShowEditModal] = useState(false);
	const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
	const [isShowRejectModal, setIsShowRejectModal] = useState(false);
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
	const closeEditModal = () => setIsShowEditModal(false);
	const closeAcceptModal = () => setIsShowAcceptModal(false);
	const closeRejectModal = () => setIsShowRejectModal(false);

	const rejectComment = () => {
		fetch(`${API_BASE_URL}/reject/${commentID}`, {
			method: "POST",
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				setIsShowRejectModal(false);
				getAllComments();
			});
	};

	const AcceptComment = () => {
		fetch(`${API_BASE_URL}/accept/${commentID}`, {
			method: "POST",
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				setIsShowAcceptModal(false);
				getAllComments();
			});
	};

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

	const updateComment = (event) => {
		event.preventDefault();
		fetch(`${API_BASE_URL}/${commentID}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				body: mainCommentBody,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				setIsShowEditModal(false);
				getAllComments();
			});
	};

	return (
		<div className="cms-main">
			<h1 className="cms-title">لیست کامنت ها</h1>
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
									<button
										type="button"
										onClick={() => {
											setIsShowEditModal(true);
											setMainCommentBody(comment.body);
											setCommmentID(comment.id);
										}}
									>
										ویرایش
									</button>
									<button type="button">پاسخ</button>

									{comment.isAccept === 0 ? (
										<button
											type="button"
											onClick={() => {
												setIsShowAcceptModal(true);
												setCommmentID(comment.id);
											}}
										>
											تایید
										</button>
									) : (
										<button
											type="button"
											onClick={() => {
												setIsShowRejectModal(true);
												setCommmentID(comment.id);
											}}
										>
											رد
										</button>
									)}
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
					<button
						type="button"
						className="text-modal-close-btn"
						onClick={closeDetailsModal}
					>
						بستن
					</button>
				</DetailsModal>
			)}

			{isShowDeleteModal && (
				<DeleteModal
					title="آیا از حذف اطمینان دارید؟"
					cancel={closeDeleteModal}
					submit={deleteComment}
				/>
			)}

			{isShowEditModal && (
				<EditModal onClose={closeEditModal} onSubmit={updateComment}>
					<textarea
						value={mainCommentBody}
						onChange={(event) => setMainCommentBody(body.target.value)}
					></textarea>
				</EditModal>
			)}

			{isShowAcceptModal && (
				<DeleteModal
					title="آیا از تایید اطمینان دارید؟"
					cancel={closeAcceptModal}
					submit={AcceptComment}
				/>
			)}

			{isShowRejectModal && (
				<DeleteModal
					title="آیا از رد اطمینان دارید؟"
					cancel={closeRejectModal}
					submit={rejectComment}
				/>
			)}
		</div>
	);
}
