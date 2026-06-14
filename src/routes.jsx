import Products from "./components/Products/Products";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import Orders from "./components/Orders/Orders";
import Off from "./components/Off/Off";

const routes = [
	{ path: "/products", element: <Products /> },
	{ path: "/comments", element: <Comments /> },
	{ path: "/users", element: <Users /> },
	{ path: "/orders", element: <Orders /> },
	{ path: "/off", element: <Off /> },
];

export default routes;
