import React, { useState, useEffect } from 'react';
import '../pages css/searchBar.scss';
import Fuse from 'fuse.js';
import axios from 'axios';
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';


export default function SearchBar(){

    const [results, setResults] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");
    const sortedSearchResults = searchResults.sort((resultA, resultB) => {
        return resultA.score - resultB.score;
      });
    
    //useEffects are to perform side-effects or things that don't directly target the output
    //in this case we are using to fetch data 
    useEffect(() => {
        /*
        basically means fetchclubs = async function() {}
        */
        const fetchClubs = async () => { 
            //making GET request to thie link which triggers our server's GET function
            await axios.get(`http://localhost:3001/api/data`)
                .then(res /*on resolved*/ => {
                setResults(res.data.data);
                //console.log("here");
                //console.log("all clubs", res.data.data);
            }
        )}
        fetchClubs();
    }, []);

    function onSearch({ currentTarget }) {
        setQuery(currentTarget.value);
        const res = fuse.search(query, {limit: 5});
        //console.log("query ",query);
        //console.log("searhc res", res);
        setSearchResults(res);
    }
    
    const options = {
        // isCaseSensitive: false,
         includeScore: true,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
         threshold: 0.3,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
          "club_name"
            ]
      };

    let fuse = new Fuse(results, options);
    const base = "/clublist";
          
    return (
        <section style={{height:'auto', width:"100% "}}>
            <div className="search-container">
                <input type="text" id="search-bar" value={query} onChange={onSearch} placeholder="Search for a club" />
                <a href="#"><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
            </div>
            {(sortedSearchResults.length > 0) && (query) && (
                <ul className="list-group">
                {sortedSearchResults.map(({ item }) => {
                    return (
                    <li className="list-group-item" key={item.club_id}>
                        <Link to={`${base}/${item.club_id}`} state = {item}>
                            <Typography variant="body1">{item.club_name}</Typography>
                        </Link>
                    </li>
                    );
                })}
                </ul>
            )}
        </section>
    );
}

/*

import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';

    const base = "/clublist";
          
            {(sortedSearchResults.length > 0) && (query) && (
                <section>
                {sortedSearchResults.map(({ item }) => {
                    return (
                        <Link to={`${base}/${item.club_id}`} state = {item}>
                        <div className='clubListBox'>
                            <Typography variant="h6">{item.club_name}</Typography>
                        </div>
                    </Link>
                    );
                })}
                </section>
            )}
    );
}*/