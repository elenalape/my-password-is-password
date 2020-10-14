import React from "react";
import VideoDescription from "./VideoDescription";

const VideoPlayer = ({ selectedLesson }) => {
	if (selectedLesson) {
		return (
			<div className="ui grid">
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
		<div style={{ textAlign: "center" }}>
			<div style={{ paddingTop: "40px" }}>
				<p>This is a Computing in the Classroom course.</p>
				<p>This is a Computing in the Classroom course.</p>
			</div>
		</div>
	);
};

export default VideoPlayer;
