import React from "react"

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>... loading</div>;
    }

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            {url}
            {video.snippet.title}
            {video.snippet.description}
        </div>
    )
};

export default VideoDetail;