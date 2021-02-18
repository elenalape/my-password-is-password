import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Lesson1 from "./lessons/Lesson1.js";
import Lesson2 from "./lessons/Lesson2.js";
import Lesson3 from "./lessons/Lesson3.js";

const Navbar = () => {
	// todo: move the following const out of Navbar
	// lessonData is a functional component, we'll instantiate it in VideoDescription
	const lessons = [
		{
			id: 3,
			title: "Spot Phishing",
			videoUrl: "https://www.youtube.com/embed/7ieCcOATNEE",
			lessonData: Lesson3,
		},
		{
			id: 2,
			title: "Terms and Conditions & Privacy Policy",
			videoUrl: "https://www.youtube.com/embed/CSBRggn5NNc",
			lessonData: Lesson2,
		},
		{
			id: 1,
			title: "All About Passwords",
			videoUrl: "https://www.youtube.com/embed/r9hdUuziP30",
			lessonData: Lesson1,
		},
	];

	const [selectedLesson, setSelectedLesson] = useState(null);

	return (
		<div className="ui container">
			<div
				className="ui"
				style={{
					paddingTop: "50px",
					paddingBottom: "20px",
					textAlign: "center",
				}}
			>
				<h1>My Password is ********!</h1>
				<hr />
				<h3>A crash course on privacy</h3>
			</div>
			<div className="ui four item menu">
				<a className="item" onClick={() => setSelectedLesson(null)}>
					Overview
				</a>
				<a
					className="item"
					onClick={() => setSelectedLesson(lessons[1])}
				>
					Hacking Passwords
				</a>
				<a
					className="item"
					onClick={() => setSelectedLesson(lessons[0])}
				>
					What is Privacy Policy?
				</a>
				<a
					className="item"
					onClick={() => setSelectedLesson(lessons[2])}
				>
					Phishing
				</a>
			</div>
			<div>
				<VideoPlayer selectedLesson={selectedLesson} />
			</div>
		</div>
	);
};

export default Navbar;
