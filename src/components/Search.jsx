import React from 'react'
import Card from './Card';
import Navbar from './Navbar';
import { useState } from 'react';
function Search(props) {
    const { books } = props
    const [search, setSearch] = useState("");
    const handleChange = event => {
        setSearch(event.target.value);
        console.log(search);
    }
    const [results, setResults] = useState();
    const handleClick = () => {
        const searchResults = books.filter(book => {
            return book.name.toLowerCase().includes(search.toLowerCase()) || book.email.toLowerCase().includes(search.toLowerCase()) ? book : false
        })
        setResults(searchResults);
        console.log(results);
    }
    return (
        <div id="search">
            <Navbar />
            <br/>
            <div className="search-bar text-center">
                <input type="text" onChange={handleChange} value={search} />
                <span onClick={handleClick}><i className="fa-solid fa-magnifying-glass ms-2"></i></span>
            </div>
            <br/>

            {results && results.map(result => 
                <Card heading={result.name}/>    
            )}
        </div>
    );
};
export default Search;
