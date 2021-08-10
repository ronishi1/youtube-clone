import React from 'react';
import Item from './Item';

const List = (props) => {
    let videos = props.videos.map((video) => {
        if(video != props.video){
            return <Item clickVideoCallback={props.clickVideoCallback} key={video.id.videoId} video={video}/>
        }
    })

    return (
        <ul className="collection"> 
            {videos}
        </ul>
    )
}

export default List;