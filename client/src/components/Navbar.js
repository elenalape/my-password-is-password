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
					Lesson 1
				</a>
				<a
					className="item"
					onClick={() => setSelectedLesson(lessons[1])}
				>
					Lesson 2
				</a>
				<a
					className="item"
					onClick={() => setSelectedLesson(lessons[2])}
				>
					Lesson 3
				</a>
			</div>
			<div>
				<VideoPlayer selectedLesson={selectedLesson} />
			</div>
		</div>
	);
};

export default Navbar;
