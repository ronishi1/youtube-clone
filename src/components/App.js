import React, {useState} from 'react';
import SearchBar from './SearchBar';
import List from './List';
import axios from 'axios';

const App = () => {
    const [videos,setVideos] = useState([]);

    
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
    };

    return (
        <div className="container">
            <SearchBar searchCallback={searchCallback}/>
            <div className="row">
                <div className="col s7">
                    Hello World
                </div>
                <div className="col s5">
                    <List videos={videos}/>
                </div>
            </div>
        </div>
    )
}

export default App;