import { AiOutlineProduct, AiOutlineStock } from "react-icons/ai";
import "./AddNewProduct.css";
import { TbChartBarPopular } from "react-icons/tb";
import { IoIosColorPalette } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { RiStockLine } from "react-icons/ri";
import { useState } from "react";

export default function AddNewProduct({ getAllProducts }) {
	const [newProductTitle, setNewProductTitle] = useState("");
	const [newProductPrice, setNewProductPrice] = useState("");
	const [newProductCount, setNewProductCount] = useState("");
	const [newProductPopularity, setNewProductPopularity] = useState("");
	const [newProductSale, setNewProductSale] = useState("");
	const [newProductImg, setNewProductImg] = useState("");
	const [newProductColors, setNewProductColors] = useState("");

	const API_BASE_URL = "http://localhost:3000/api/products";

	const newProductInfo = {
		title: newProductTitle,
		price: newProductPrice,
		count: newProductCount,
		img: newProductImg,
		popularity: newProductPopularity,
		sale: newProductSale,
		colors: newProductColors,
	};

	const addNewProduct = () => {
		event.preventDefault();
		fetch(API_BASE_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProductInfo),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				getAllProducts();
				emptyInput();
			});
	};

	function emptyInput() {
		setNewProductTitle("");
		setNewProductPrice("");
		setNewProductCount("");
		setNewProductPopularity("");
		setNewProductSale("");
		setNewProductImg("");
		setNewProductColors("");
	}

	return (
		<div className="products-main">
			<h1 className="products-title">افزودن محصول جدید</h1>
			<form action="#" className="add-products-form">
				<div className="add-products-form-wrap">
					<div className="add-products-form-group">
						<AiOutlineProduct className="icon" />
						<input
							type="text"
							placeholder="اسم محصول را بنویسید"
							className="add-products-input"
							value={newProductTitle}
							onChange={(event) => setNewProductTitle(event.target.value)}
						/>
					</div>
					<div className="add-products-form-group">
						<IoPricetagsOutline className="icon" />
						<input
							type="text"
							placeholder="قیمت محصول را بنویسید"
							className="add-products-input"
							value={newProductPrice}
							onChange={(event) => setNewProductPrice(event.target.value)}
						/>
					</div>
					<div className="add-products-form-group">
						<AiOutlineStock className="icon" />
						<input
							type="text"
							placeholder="موجودی محصول را بنویسید"
							className="add-products-input"
							value={newProductCount}
							onChange={(event) => setNewProductCount(event.target.value)}
						/>
					</div>
					<div className="add-products-form-group">
						<CiImageOn className="icon" />
						<input
							type="text"
							placeholder="آدرس عکس محصول را بنویسید"
							className="add-products-input"
							value={newProductImg}
							onChange={(event) => setNewProductImg(event.target.value)}
						/>
					</div>
					<div className="add-products-form-group">
						<TbChartBarPopular className="icon" />
						<input
							type="text"
							placeholder="میزان محبوبیت محصول را بنویسید"
							className="add-products-input"
							value={newProductPopularity}
							onChange={(event) => setNewProductPopularity(event.target.value)}
						/>
					</div>
					<div className="add-products-form-group">
						<RiStockLine className="icon" />
						<input
							type="text"
							placeholder="میزان فروش محصول را بنویسید"
							className="add-products-input"
							value={newProductSale}
							onChange={(event) => setNewProductSale(event.target.value)}
						/>
					</div>
					<div className="add-products-form-group">
						<IoIosColorPalette className="icon" />
						<input
							type="text"
							placeholder="تعداد رنگ بندی محصول را بنویسید"
							className="add-products-input"
							value={newProductColors}
							onChange={(event) => setNewProductColors(event.target.value)}
						/>
					</div>
				</div>
				<button
					type="button"
					className="add-product-submit"
					onClick={addNewProduct}
				>
					ثبت محصول
				</button>
			</form>
		</div>
	);
}
