import "./SearchResultsItem.css"

export default function SearchResultsItem({name, email}){
    return(
        <div className="search-Results-Item">
                <p>{name}</p>
                <p>{email}</p>
            </div>
    );
}