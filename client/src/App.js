import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
	const lessons = [
		{
			id: 1,
			title: "Lesson 1: something",
			videoUrl: "https://www.youtube.com/embed/kr4qWgLlEZE",
			description: "this is lesson 1",
			studentLink: "",
			teacherLink: "",
		},
		{
			id: 2,
			title: "Lesson 2: something",
			videoUrl: "https://www.youtube.com/embed/kpe5JNOeu0E",
			description: "this is lesson 2",
			studentLink: "",
			teacherLink: "",
		},
		{
			id: 3,
			title: "Lesson 3: something",
			videoUrl: "https://www.youtube.com/embed/Q3KMhMnu1hk",
			description: "this is lesson 3 lol",
			studentLink: "",
			teacherLink: "",
		},
	];

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
			<div>
				<Navbar lessons={lessons} />
			</div>
		</div>
	);
};

export default App;
