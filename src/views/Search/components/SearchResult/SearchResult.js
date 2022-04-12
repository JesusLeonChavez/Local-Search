import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";

import "./SearchResult.css"

export default function SearchResult ({ results, isSearching }) {
    return (
        <div className="search-Results">
            {!results?.length && isSearching && <p>NO EXISTE RESULTADOS</p>}
            {results?.map((value) => {
                return (
                    <SearchResultsItem key={value.id} {...value}/>
                );
            })}
        </div>
    );
}