import { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";

export default function ProductsTable() {
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowDetailModal, setIsShowDetailModal] = useState(false);
	const deleteModalCancelAction = () => {
		setIsShowDeleteModal(false);
	};
	const deleteModalSubmitAction = () => {
		setIsShowDeleteModal(false);
	};

	const closeDetailsModal = () => {
		setIsShowDetailModal(false);
	};
	return (
		<>
			<table className="products-table">
				<thead>
					<tr className="products-table-heading-tr">
						<th>عکس</th>
						<th>اسم</th>
						<th>قیمت</th>
						<th>موجودی</th>
					</tr>
				</thead>
				<tbody>
					<tr className="products-table-tr">
						<td>
							<img
								src="/images/Seong.webp"
								alt="example"
								className="products-table-img"
							/>
						</td>

						<td className="">نمونه تست</td>
						<td className="">100 هزار تومان</td>
						<td className="">45</td>

						<td>
							<button
								type="button"
								className="products-table-btn"
								onClick={() => setIsShowDetailModal(true)}
							>
								جزییات
							</button>
							<button
								type="button"
								className="products-table-btn"
								onClick={() => setIsShowDeleteModal(true)}
							>
								حذف
							</button>
							<button type="button" className="products-table-btn">
								ویرایش
							</button>
						</td>
					</tr>
				</tbody>
			</table>

			{isShowDeleteModal && (
				<DeleteModal
					submit={deleteModalSubmitAction}
					cancel={deleteModalCancelAction}
				/>
			)}
			{isShowDetailModal && <DetailsModal onHide={closeDetailsModal} />}
		</>
	);
}
