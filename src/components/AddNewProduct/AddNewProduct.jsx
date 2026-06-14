import { AiOutlineProduct, AiOutlineStock } from "react-icons/ai";
import "./AddNewProduct.css";
import { TbChartBarPopular } from "react-icons/tb";
import { IoIosColorPalette } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { RiStockLine } from "react-icons/ri";

export default function AddNewProduct() {
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
						/>
					</div>
					<div className="add-products-form-group">
						<IoPricetagsOutline className="icon" />
						<input
							type="text"
							placeholder="قیمت محصول را بنویسید"
							className="add-products-input"
						/>
					</div>
					<div className="add-products-form-group">
						<AiOutlineStock className="icon" />
						<input
							type="text"
							placeholder="موجودی محصول را بنویسید"
							className="add-products-input"
						/>
					</div>
					<div className="add-products-form-group">
						<CiImageOn className="icon" />
						<input
							type="text"
							placeholder="آدرس عکس محصول را بنویسید"
							className="add-products-input"
						/>
					</div>
					<div className="add-products-form-group">
						<TbChartBarPopular className="icon" />
						<input
							type="text"
							placeholder="میزان محبوبیت محصول را بنویسید"
							className="add-products-input"
						/>
					</div>
					<div className="add-products-form-group">
						<RiStockLine className="icon" />
						<input
							type="text"
							placeholder="میزان فروش محصول را بنویسید"
							className="add-products-input"
						/>
					</div>
					<div className="add-products-form-group">
						<IoIosColorPalette className="icon" />
						<input
							type="text"
							placeholder="تعداد رنگ بندی محصول را بنویسید"
							className="add-products-input"
						/>
					</div>
				</div>
				<button type="button" className="add-product-submit">
					ثبت محصول
				</button>
			</form>
		</div>
	);
}
