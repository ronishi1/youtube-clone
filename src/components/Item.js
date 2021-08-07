import React from 'react';
import './Item.css';

const Item = (props) => {
    return (
        <li className="collection-item video-item">
            <img className="thumbnail" src={props.video.snippet.thumbnails.medium.url} />
            <div className="item-text">
                <div className="item-title">
                    {props.video.snippet.title.substring(0,30)}...
                </div>
                <div className="item-channel">
                    {props.video.snippet.channelTitle}
                </div>
            </div>

        </li>
    )
}

export default Item;