import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import "./Products.css";

export default function Products() {
	return (
		<>
			<AddNewProduct />
			<ProductsTable />
		</>
	);
}
