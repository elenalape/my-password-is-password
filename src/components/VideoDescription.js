import React from "react";

const VideoDescription = ({ lessonData }) => {
	// lessonData is a functional component, hence the instantiation below
	// todo: pour lessonData into some json and use the VideoDescription to parse and format it
	return <div style={{ paddingTop: "10px" }}>{lessonData()}</div>;
};

export default VideoDescription;
