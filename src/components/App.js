import React, {useState} from 'react';
import SearchBar from './SearchBar';
import List from './List';
import axios from 'axios';
import VideoViewer from './VideoViewer';

const App = () => {
    const [videos,setVideos] = useState([]);
    const [video,setVideo] = useState(null);

    
    const searchCallback = async (term) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search',
        {
            params:{
                part:"snippet",
                maxResults:10,
                type:"video",
                q:term,
                key:key,
            }
        })
        console.log(response.data.items);
        setVideos(response.data.items);
        setVideo(response.data.items[0]);
    };

    const clickVideoCallback = (video) => {
        setVideo(video);
    }

    return (
        <div className="container">
            <SearchBar searchCallback={searchCallback}/>
            <div className="row">
                <div className="col s7">
                    <VideoViewer video={video}/>
                </div>
                <div className="col s5">
                    <List videos={videos} video={video} clickVideoCallback={clickVideoCallback}/>
                </div>
            </div>
        </div>
    )
}

export default App;