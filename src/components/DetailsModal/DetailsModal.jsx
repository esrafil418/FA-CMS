import { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ onHide }) {
	useEffect(() => {
		const checkKey = (event) => {
			if (event.key === "Escape") {
				onHide();
			}
		};
		window.addEventListener("keydown", checkKey);

		return () => {
			window.removeEventListener("keydown", checkKey);
		};
	}, [onHide]);
	return (
		<div className="modal-parent active" onClick={onHide}>
			<div className="detail-modal" onClick={(e) => e.stopPropagation()}>
				<button type="button" onClick={onHide} aria-label="Close details modal">
					×
				</button>
				<table className="cms-table">
					<thead>
						<tr>
							<th>اسم</th>
							<th>قیمت</th>
							<th>محبوبیت</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>لپتاب</td>
							<td>82.000.000</td>
							<td>90</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
