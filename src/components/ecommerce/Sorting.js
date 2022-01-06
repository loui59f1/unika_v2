const Sorting = ({ sortSelected, handleSortChange }) => {

    return (
        <div className="sorting_container mt-30">
            <label htmlFor="sort">Sorter:</label>
            <select id="sort" value={sortSelected} onChange={(e) => handleSortChange(e)}>
                <option value="popular">Popularitet</option>
                <option value="news">Nyheder</option>
                <option value="brand">Designer</option>
                <option value="price">Pris</option>
            </select>
        </div>
    )
}

export default Sorting;