import { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ErrorBox from "../Error/ErrorBox";

export default function ProductsTable({allProducts, getAllProducts}) {
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowDetailModal, setIsShowDetailModal] = useState(false);
	const [isShowEditModal, setIsShowEditModal] = useState(false);
	const [productId, setProductId] = useState(null);
	const [mainProductInfo, setMainProductInfo] = useState({});

	const [productNewTitle, setProductNewTitle] = useState("");
	const [productNewPrice, setProductNewPrice] = useState("");
	const [productNewCount, setProductNewCount] = useState("");
	const [productNewImg, setProductNewImg] = useState("");
	const [productNewPopularity, setProductNewPopularity] = useState("");
	const [productNewSale, setProductNewSale] = useState("");
	const [productNewColors, setProductNewColors] = useState("");

	const API_BASE_URL = "http://localhost:3000/api/products";

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

		const productNewInfo = {
			title: productNewTitle,
			price: productNewPrice,
			count: productNewCount,
			img: productNewImg,
			popularity: productNewPopularity,
			sale: productNewSale,
			color: productNewColors,
		};
		fetch(`${API_BASE_URL}/${productId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(productNewInfo),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				getAllProducts();
				setIsShowEditModal(false);
			});
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
										onClick={() => {
											setIsShowDetailModal(true);
											setMainProductInfo(product);
										}}
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
											setProductNewTitle(product.title);
											setProductNewPrice(product.price);
											setProductNewSale(product.sale);
											setProductNewPopularity(product.popularity);
											setProductNewImg(product.img);
											setProductNewCount(product.count);
											setProductNewColors(product.colors);
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
			{isShowDetailModal && (
				<DetailsModal onHide={closeDetailsModal}>
					<table className="cms-table">
						<thead>
							<tr>
								<th>محبوبیت</th>
								<th>فروش</th>
								<th>رنگ بندی</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>{mainProductInfo.popularity}%</td>
								<td>{mainProductInfo.sale}</td>
								<td>{mainProductInfo.colors}</td>
							</tr>
						</tbody>
					</table>
				</DetailsModal>
			)}

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
							value={productNewTitle}
							onChange={(event) => setProductNewTitle(event.target.value)}
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="قیمت جدید را وارد کنید"
							className="edit-product-info"
							value={productNewPrice}
							onChange={(event) => setProductNewPrice(event.target.value)}
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="موجودی جدید را وارد کنید"
							className="edit-product-info"
							value={productNewCount}
							onChange={(event) => setProductNewCount(event.target.value)}
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="آدرس کاور جدید را وارد کنید"
							className="edit-product-info"
							value={productNewImg}
							onChange={(event) => setProductNewImg(event.target.value)}
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="محبوبیت جدید را وارد کنید"
							className="edit-product-info"
							value={productNewPopularity}
							onChange={(event) => setProductNewPopularity(event.target.value)}
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="میزان فروش جدید را وارد کنید"
							className="edit-product-info"
							value={productNewSale}
							onChange={(event) => setProductNewSale(event.target.value)}
						/>
					</div>
					<div className="edit-product-form-group">
						<span>
							<AiOutlineDollarCircle />
						</span>
						<input
							type="text"
							placeholder="تعداد رنگ بندی جدید را وارد کنید"
							className="edit-product-info"
							value={productNewColors}
							onChange={(event) => setProductNewColors(event.target.value)}
						/>
					</div>
				</EditModal>
			)}
		</>
	);
}
