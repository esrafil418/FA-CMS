import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./EditModal.css";

export default function EditModal({
	children,
	onClose = () => {},
	onSubmit = () => {},
}) {
	useEffect(() => {
		const checkKey = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", checkKey);

		return () => {
			window.removeEventListener("keydown", checkKey);
		};
	}, [onClose]);
	return ReactDOM.createPortal(
		<div className="modal-parent active">
			<form className="edit-modal-form">
				<h1>اطلاعات جدید را وارد نمایید</h1>
				{children}
				<button type="button" className="edit-modal-submit" onClick={onSubmit}>
					ثبت اطلاعات جدید
				</button>
			</form>
		</div>,
		document.getElementById("modal-parent"),
	);
}
