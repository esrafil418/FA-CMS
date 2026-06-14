import { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ErrorBox from "../Error/ErrorBox";

export default function ProductsTable() {
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowDetailModal, setIsShowDetailModal] = useState(false);
	const [isShowEditModal, setIsShowEditModal] = useState(false);
	const [allProducts, setAllProducts] = useState([]);
	const [productId, setProductId] = useState(null);

	const API_BASE_URL = "http://localhost:3000/api/products";

	const getAllProducts = async () => {
		await fetch(API_BASE_URL)
			.then((res) => res.json())
			.then(setAllProducts)
			.catch(console.error);
	};

	useEffect(() => {
		getAllProducts();
	}, []);

	const deleteModalCancelAction = () => {
		setIsShowDeleteModal(false);
	};

	const deleteModalSubmitAction = () => {
		fetch(`${API_BASE_URL}/${productId}`, { method: "DELETE" })
			.then((res) => res.json())
			.then((data) => {
				console.log("Response body:", data);
				setIsShowDeleteModal(false);
				getAllProducts();
			})
			.catch((error) => {
				console.error(" Delete error:", error);
				setIsShowDeleteModal(false);
				getAllProducts();
			});
	};

	const closeDetailsModal = () => {
		setIsShowDetailModal(false);
	};

	const updateProductInfo = (event) => {
		event.preventDefault();
		console.log("edited");
	};
	return (
		<>
			{allProducts.length ? (
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
						{allProducts.map((product) => (
							<tr key={product.id} className="products-table-tr">
								<td>
									<img
										src={product.img}
										alt={product.title}
										className="products-table-img"
									/>
								</td>

								<td className="">{product.title}</td>
								<td className="">{product.price}</td>
								<td className="">{product.count}</td>

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
										onClick={() => {
											setProductId(product.id);
											setIsShowDeleteModal(true);
										}}
									>
										حذف
									</button>
									<button
										type="button"
										className="products-table-btn"
										onClick={() => {
											setIsShowEditModal(true);
											setProductId(product.id);
										}}
									>
										ویرایش
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<ErrorBox msg="هیچ محصولی یافت نشد!" />
			)}

			{isShowDeleteModal && (
				<DeleteModal
					submit={deleteModalSubmitAction}
					cancel={deleteModalCancelAction}
				/>
			)}
			{isShowDetailModal && <DetailsModal onHide={closeDetailsModal} />}
			{isShowEditModal && (
				<EditModal
					onClose={() => setIsShowEditModal(false)}
					onSubmit={updateProductInfo}
				>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="عنوان جدید را وارد کنید"
							className="edit-product-info"
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="عنوان جدید را وارد کنید"
							className="edit-product-info"
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="عنوان جدید را وارد کنید"
							className="edit-product-info"
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="عنوان جدید را وارد کنید"
							className="edit-product-info"
						/>
					</div>
				</EditModal>
			)}
		</>
	);
}
