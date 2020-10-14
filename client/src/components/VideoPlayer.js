import React from "react";
import VideoDescription from "./VideoDescription";

import security from "../assets/security-dark-blue.png";

const VideoPlayer = ({ selectedLesson }) => {
	if (selectedLesson) {
		return (
			<div className="ui grid" style={{ paddingTop: "40px" }}>
				<div className="eight wide column">
					<iframe
						height="315"
						width="560"
						src={selectedLesson.video}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="two wide column">
					<VideoDescription
						description={selectedLesson.description}
					/>
				</div>
			</div>
		);
	}

	return (
		<div style={{ paddingTop: "40px" }}>
			<div style={{ textAlign: "center" }}>
				<p>
					This is a Computing in the Classroom course. This is a
					Computing in the Classroom course. This is a Computing in
					the Classroom course. This is a Computing in the Classroom
					course. This is a Computing in the Classroom course. This is
					a Computing in the Classroom course.
				</p>
				<p>This is a Computing in the Classroom course.</p>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					paddingTop: "10px",
				}}
			>
				<img
					style={{
						width: "100%",
						maxWidth: "400px",
						heigh: "auto",
					}}
					src={security}
					alt="Logo"
				/>
			</div>
		</div>
	);
};

export default VideoPlayer;
