import React, {useState} from 'react';

const SearchBar = (props) => {
    const [term,setTerm] = useState("")


    const search = (e) => {
        e.preventDefault();

        props.searchCallback(term);
    }
    return (
        <div>
            <form onSubmit={search}>
                <div className="input-field">
                    <input placeholder="Search" type="text" value={term} onChange={(e) => {setTerm(e.target.value)}}></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;