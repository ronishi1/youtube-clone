import React from 'react';
import Item from './Item';

const List = (props) => {
    let videos = props.videos.map((video) => {
        return <Item key={video.id.videoId} video={video}/>
    })
    return (
        <ul className="collection"> 
            {videos}
        </ul>
    )
}

export default List;