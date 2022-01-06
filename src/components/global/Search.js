const Search = ({ searchQuery, setSearchQuery, headerLight }) => {

    // Her sender vi en search request til /categorylist/?=category

    return (
        <>
            <div className={`search_container ${headerLight === true ? "light_header" : "dark_header"}`}>
                <form action="/categorylist/" method="get">
                    <input
                        value={searchQuery}
                        onInput={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        className="input_search"
                        placeholder="Søg efter produkt eller designer"
                        id="header-search"
                        name="search"
                    />
                    <button type="submit" className="search_btn"><span className="search_icon"></span></button>
                </form>
            </div>
        </>
    );
}

export default Search;