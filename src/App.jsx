import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
	const router = useRoutes(routes);
	return (
		<>
			<Sidebar />
			<div className="main">
				<Header />

				{router}
			</div>
		</>
	);
}
