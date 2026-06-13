import { AiOutlineBell } from "react-icons/ai";
import "./Header.css";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Header() {
	return (
		<div className="header">
			<div className="admin-profile">
				<img src="/images/Seong.webp" alt="Admin Profile" />
				<div>
					<h1>سونگ گی هون</h1>
					<h3>بازیکن شماره 456</h3>
				</div>
			</div>

			<div className="header-left-section">
				<div className="search-box">
					<input type="text" placeholder="جست و جو..." />
					<button type="button">جستجو</button>
				</div>
				<button
					type="button"
					className="header-left-icons"
					aria-label="اعلان‌ها"
				>
					<AiOutlineBell />
				</button>
				<button
					type="button"
					className="header-left-icons"
					aria-label="تغییر تم"
				>
					<BsBrightnessHigh />
				</button>
			</div>
		</div>
	);
}
