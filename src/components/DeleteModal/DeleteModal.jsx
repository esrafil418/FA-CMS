import ReactDOM from "react-dom";
import "./DeleteModal.css";

export default function DeleteModal({ submit, cancel }) {
	return ReactDOM.createPortal(
		<div className="modal-parent active">
			<div className="delete-modal">
				<h1>آیااز حذف اطمینان دارید؟</h1>
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
