import React from 'react';

const VideoViewer = (props) => {
    if(!props.video){
        return <div>temp</div>
    }
    const source = `http://www.youtube.com/embed/${props.video.id.videoId}`

    return (
        <div>
             <div className="video-container">
                <iframe src={source} frameBorder="0" allowFullScreen></iframe>
            </div>
            <h6>{props.video.snippet.title}</h6>
            <div>
                {props.video.snippet.channelTitle}
            </div>
        </div>
    )
}

export default VideoViewer;