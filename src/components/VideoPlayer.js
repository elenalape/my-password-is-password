import React from "react";
import VideoDescription from "./VideoDescription";

import security from "../assets/security-dark-blue.png";

const VideoPlayer = ({ selectedLesson }) => {
	if (selectedLesson) {
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
							<h3
								style={{
									textAlign: "center",
									padding: "20px",
								}}
							>
								{selectedLesson.title}
							</h3>
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
				<div className="sixteen wide column">
					<VideoDescription lessonData={selectedLesson.lessonData} />
				</div>
			</div>
		);
	}

	return (
		<div style={{ paddingBottom: "20px" }}>
			<div style={{ paddingTop: "10px" }}>
				<div
					style={{
						contentAlign: "center",
						paddingLeft: "20px",
						paddingRight: "20px",
					}}
				>
					<h5>
						A lot of the things that we do on the computer and on
						the phone are quite secure. Random people can’t easily
						steal your passwords, or take over your device — which
						used to be way more doable in the past!
					</h5>
					<h5>
						But with so many websites, and apps and screens and all
						the <span style={{ color: "green" }}>Agree</span>{" "}
						buttons, we may accidentally be giving away our whole
						life to people we don’t know. And not only when we set
						our password to something extremely easy to guess, like
						"password".
					</h5>
					<h5>
						This video crash course is designed to provide you with
						just the right tools and experience to protect your
						personal data online. Select a topic above and start
						learning!
					</h5>
				</div>
			</div>
			<div
				style={{
					alignItems: "flex-start",
					display: "flex",
					justifyContent: "center",
					paddingTop: "10px",
				}}
			>
				<img
					style={{
						maxWidth: "400px",
						width: "100%",
						heigh: "auto",
					}}
					src={security}
					alt="Logo"
				/>
			</div>
			<p>
				This project is part of coursework for the
				<a href={"http://www.drps.ed.ac.uk/19-20/dpt/cxinfr10077.htm"}>
					{" "}
					Computing in the Classroom module
				</a>{" "}
				at the University of Edinburgh, and the source code for this
				site is available{" "}
				<a href={"https://github.com/elenalape/Privacy-Crash-Course"}>
					here
				</a>
				.
			</p>
		</div>
	);
};

export default VideoPlayer;
