import React from "react";
import VideoDescription from "./VideoDescription";

import security from "../assets/security-dark-blue.png";

const VideoPlayer = ({ selectedLesson }) => {
	if (selectedLesson) {
		// 560 by 315
		return (
			<div className="ui grid">
				<div className="sixteen wide column">
					<div style={{ display: "flex", justifyContent: "center" }}>
						<div
							style={{
								width: "100%",
								maxWidth: "550px",
							}}
						>
							<h2
								style={{
									textAlign: "center",
									padding: "20px",
								}}
							>
								{selectedLesson.title}
							</h2>
							<div
								style={{
									position: "relative",
									overflow: "hidden",
									paddingTop: "56.25%",
								}}
							>
								<iframe
									style={{
										position: "absolute",
										top: "0",
										left: "0",
										width: "100%",
										height: "100%",
										border: "0",
									}}
									src={selectedLesson.videoUrl}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<div className="ten wide column">
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
