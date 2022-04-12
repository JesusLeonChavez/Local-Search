import { useState } from "react";
import SearchBox from "./Search/components/SearchBox/SearchBox";
import SearchResult from "./Search/components/SearchResult/SearchResult";

import data from "../data/users.json";

import "./style.css"


export default function Search(){
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([])     

    const handleCloseSearch = () => {
        setIsAtTop(!isAtTop);
        setResults([]);
    }

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);

        if(data?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filterData = data.filter((value) =>  (
                    value.name.toLowerCase().includes(searchTextMinus) || 
                    value.phone.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus)
                )
            );

            setResults(filterData);
        }
    }

    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox 
                onSearch={handleSearchClick}
                onClose={handleCloseSearch}
                isSearching={isAtTop}
            />
            <SearchResult 
                results={results}
                isSearching={isAtTop}
            />
        </div>
    );
}