import ReactDOM from "react-dom";
import "./DeleteModal.css";

export default function DeleteModal() {
	return ReactDOM.createPortal(
		<div className="delete-modal">
			<h1>آیااز حذف اطمینان دارید؟</h1>
			<div className="delete-modal-btn">
				<button type="button" className="delete-btn delete-modal-accept-btn">
					بله
				</button>
				<button type="button" className="delete-btn delete-modal-reject-btn">
					خیر
				</button>
			</div>
		</div>,

		document.getElementById("modal-parent"),
	);
}
