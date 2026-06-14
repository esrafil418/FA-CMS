import { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ onHide }) {
	useEffect(() => {
		const checkKey = (event) => {
			console.log(event);
			if (event.keyCode === "Escape") {
				onHide();
			}
		};
		window.addEventListener("keydown", checkKey);

		return window.removeEventListener("keydown", checkKey);
	});
	return (
		<div className="modal-parent active">
			<div className="detail-modal">
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
