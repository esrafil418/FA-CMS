import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ErrorBox from "../Error/ErrorBox";
import "./Products.css";

export default function Products() {
	return (
		<>
			<AddNewProduct />
			<ErrorBox msg="هیچ محصولی یافت نشد!" />;
		</>
	);
}
