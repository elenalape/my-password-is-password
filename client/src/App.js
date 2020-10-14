import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
	const lessons = [
		{
			id: 1,
			video: "https://www.youtube.com/embed/kr4qWgLlEZE",
			description: "this is lesson 1",
			studentLink: "",
			teacherLink: "",
		},
		{
			id: 2,
			video: "https://www.youtube.com/embed/kpe5JNOeu0E",
			description: "this is lesson 2",
			studentLink: "",
			teacherLink: "",
		},
		{
			id: 3,
			video: "https://www.youtube.com/embed/Q3KMhMnu1hk",
			description: "this is lesson 3 lol",
			studentLink: "",
			teacherLink: "",
		},
	];

	return (
		<div className="ui container">
			<div
				className="ui"
				style={{ padding: "50px", textAlign: "center" }}
			>
				<h1>My Password is ********</h1>
				<h3>Personal data privacy crash course</h3>
			</div>
			<div>
				<Navbar lessons={lessons} />
			</div>
		</div>
	);
};

export default App;
