import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
// import VideoCard from "./VideoCard";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const response = await fetch(YOUTUBE_VIDEOS_API);
		const jsonData = await response.json();
		// console.log(jsonData.items);
		setVideos(jsonData?.items);
	};
	return !videos? null: (
		<div className="flex flex-wrap">
			{videos.map((video) =>(
        <Link to={"/watch?v="+video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
		</div>
	);
};

export default VideoContainer;