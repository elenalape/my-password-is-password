import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const Navbar = ({ lessons }) => {
	const [selectedLesson, setSelectedLesson] = useState(null);

	return (
		<div>
			<div className="ui four item menu">
				<a className="item" onClick={() => setSelectedLesson(null)}>
					Overview
				</a>
				<a
					className="item"
					onClick={() => setSelectedLesson(lessons[0])}
				>
					T&Cs and Privacy Policy?
				</a>
				<a
					className="item"
					onClick={() => setSelectedLesson(lessons[1])}
				>
					Choosing a Password
				</a>
				<a
					className="item"
					onClick={() => setSelectedLesson(lessons[2])}
				>
					Let's go Phishing
				</a>
			</div>
			<div>
				<VideoPlayer selectedLesson={selectedLesson} />
			</div>
		</div>
	);
};

export default Navbar;
