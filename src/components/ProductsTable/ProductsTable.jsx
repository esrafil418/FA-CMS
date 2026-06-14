import { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function ProductsTable() {
	const [isShowModal, setIsShowModal] = useState(false);
	const deleteModalCancelAction = () => {
		setIsShowModal(false);
	};
	const deleteModalSubmitAction = () => {
		setIsShowModal(false);
	};
	return (
		<>
			<table className="products-table">
				<tr className="products-table-heading-tr">
					<th>عکس</th>
					<th>اسم</th>
					<th>قیمت</th>
					<th>موجودی</th>
				</tr>

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
						<button type="button" className="products-table-btn">
							جزییات
						</button>
						<button
							type="button"
							className="products-table-btn"
							onClick={() => setIsShowModal(true)}
						>
							حذف
						</button>
						<button type="button" className="products-table-btn">
							ویرایش
						</button>
					</td>
				</tr>
			</table>

			{isShowModal && (
				<DeleteModal
					submit={deleteModalSubmitAction}
					cancel={deleteModalCancelAction}
				/>
			)}
		</>
	);
}
