import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import Orders from "./components/Orders/Orders";
import Off from "./components/Off/Off";

export default function App() {
	return (
		<>
			<Sidebar />

			<div className="main">
				<Header />

				<Routes>
					<Route path="/products" element={<Products />} />
					<Route path="/comments" element={<Comments />} />
					<Route path="/users" element={<Users />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/off" element={<Off />} />
				</Routes>
			</div>
		</>
	);
}
