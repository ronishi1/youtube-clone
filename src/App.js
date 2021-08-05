import React from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';

const App = () => {
    
    const searchCallback = (term) => {
        // let response = axios.get('https://www.googleapis.com/youtube/v3/',
        // {
        //     params:{
        //         part:"snippet",
        //         maxResults:10,
        //         type:"video",
        //         key:key,
        //     }
        // })
        console.log(term);
    };

    return (
        <div className="container">
            <SearchBar searchCallback={searchCallback}/>
        </div>
    )
}

export default App;