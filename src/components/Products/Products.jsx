import { useEffect, useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import "./Products.css";

export default function Products() {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		getAllProducts();
	}, []);

	const API_BASE_URL = "http://localhost:3000/api/products";

	const getAllProducts = async () => {
		await fetch(API_BASE_URL)
			.then((res) => res.json())
			.then(setAllProducts)
			.catch(console.error);
	};

	return (
		<>
			<AddNewProduct getAllProducts={getAllProducts} />
			<ProductsTable
				allProducts={allProducts}
				getAllProducts={getAllProducts}
			/>
		</>
	);
}
