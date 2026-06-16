import ReactDOM from "react-dom";
import "./DeleteModal.css";
import { useEffect } from "react";

export default function DeleteModal({ submit, cancel, title }) {
	useEffect(() => {
		const checkKey = (event) => {
			if (event.key === "Escape") {
				cancel();
			}
		};
		window.addEventListener("keydown", checkKey);

		return () => {
			window.removeEventListener("keydown", checkKey);
		};
	}, [cancel]);
	return ReactDOM.createPortal(
		<div className="modal-parent active">
			<div className="delete-modal">
				<h1>{title}</h1>
				<div className="delete-modal-btn">
					<button
						type="button"
						className="delete-btn delete-modal-accept-btn"
						onClick={() => submit()}
					>
						بله
					</button>
					<button
						type="button"
						className="delete-btn delete-modal-reject-btn"
						onClick={() => cancel()}
					>
						خیر
					</button>
				</div>
			</div>
		</div>,

		document.getElementById("modal-parent"),
	);
}
