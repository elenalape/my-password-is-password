import React, { useState } from "react";

const PrivacyForm = () => {
	const [checked, setChecked] = useState(false);
	const handleClick = () => setChecked(!checked);

	const handleSubmit = (e) => {
		if (!checked) {
			e.preventDefault();
			alert("Make sure you've agreed with the Privacy Policy!");
		} else {
			return true;
		}
	};

	return (
		<div className="ui container">
			<br />
			<h2>Course registration form</h2>
			<div className="ui form">
				<form action="/success" onSubmit={handleSubmit}>
					<label for="fname">Full name:</label>
					<br />
					<input type="text" />
					<br />
					<label for="email">Email</label>
					<br />
					<input type="text" />
					<br />
					<br />
					<input
						type="checkbox"
						onClick={handleClick}
						checked={checked}
					/>
					<label for="privacypolicy">
						{"  "}I have read and understood the
						<a href="/agreement" target="_blank">
							{"  "}
							Privacy Policy
						</a>
						.
					</label>
					<br />
					<br />
					<input type="submit" value="Submit" />
				</form>
				<h4>
					<a href="/">Homepage</a>
				</h4>
			</div>
		</div>
	);
};

export default PrivacyForm;
