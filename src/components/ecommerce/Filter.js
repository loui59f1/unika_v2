const Filter = ({ categories, designers, categoryChecked, designerChecked, handleDesignerChange, handleCategoryChange }) => {

    return (
        <div className="filter_sidebar">
            <h2>Filtrering</h2>
            <div>
                <h3>Kategori</h3>
                <ul className="categories_container">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <input type="checkbox" id={`checkbox-category-${index}`} name="test" value={category.name} checked={categoryChecked[index]} onChange={() => handleCategoryChange(index)} />
                            <label htmlFor={`checkbox-category-${index}`}>{category.name}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-20">
                <h3>Designere</h3>
                <ul className="designers_container">
                    {designers.map((designer, index) => (
                        <li key={index}>
                            <input type="checkbox" id={`checkbox-${index}`} name="test" value={designer.name} checked={designerChecked[index]} onChange={() => handleDesignerChange(index)} />
                            <label htmlFor={`checkbox-${index}`}>{designer.name}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filter;