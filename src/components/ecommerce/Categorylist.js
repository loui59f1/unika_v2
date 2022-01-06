import { useEffect, useState } from "react";
import SingleProduct from './SingleProduct'
import Filter from './Filter'
import Sorting from './Sorting'
import HeroSmall from "./HeroSmall";
import { categories } from '../../categories';
import { designers } from '../../designers';

import { Link } from 'react-router-dom';

const Categorylist = ({ products, onAdd, onRemove, heroTitle, setHeroTitle, setHeaderLight, setBasketModalOn, animate }) => {
    const [sortSelected, setSortSelected] = useState('popular');
    const [filteredProducts, setFilteredProducts] = useState([]);
    // const [searchValue, setSearchValue] = useState()

    // Rydder op i søgning og tager højde for store, små bogstaver og mellemrum.
    const toTitleCase = (string) => {
        return string
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };


    // Henter det search input efter ? i url:
    let queryParams = new URLSearchParams(window.location.search);
    let search = queryParams.get('search');

    if (search === '' | search === null) {
        search = 'Produkter';
    }

    let searchValue = toTitleCase(search);
    // ex: Kopper, Tallerkener, Helle Grej

    console.log(search);


    useEffect(() => {
        const handleSearchOnLoad = () => {
            // Hvilken søgning er der tale om?
            if (categories.some(i => i.name === searchValue)) {
                console.log("Searchvalue is a category");
                setHeroTitle(searchValue);
            } else if (designers.some(i => i.name === searchValue)) {
                console.log("Searchvalue is a brand");
                setHeroTitle(searchValue);
            } else {
                console.log("Searchvalue is something else");
                setHeroTitle("Produkter");
            }

        };

        handleSearchOnLoad();
    });

    //

    const [checkedBrands, setCheckedBrands] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);

    //

    const [designerChecked, setDesignerChecked] = useState(
        new Array(designers.length).fill(false)
    );
    const [categoryChecked, setCategoryChecked] = useState(
        new Array(categories.length).fill(false)
    );


    // find index på søgte kategori
    const categoryIndex = categories.findIndex(checkCategory);
    const designerIndex = designers.findIndex(checkCategory);

    function checkCategory(category) {
        return category.name === searchValue;
    }


    useEffect(() => {
        const handleStatesOnLoad = () => {
            setHeaderLight(true);
            setBasketModalOn(true);

            // opdaterer checkbox, men skal nulstilles når der gås til ny side.
            categoryChecked[categoryIndex] = true;
            designerChecked[designerIndex] = true;

            // setCheckedCategories(selectedCategory);
        };

        // if (categoryIndex === -1) {
        //     return null;
        // } else {
        //     setCategoryChecked[0] = ;
        // }

        handleStatesOnLoad();
    });



    const handleDesignerChange = (position) => {
        // Find true or false value on checked, sets array to designerChecked (true, false, false)
        const updatedCheckedState = designerChecked.map((item, index) => {
            if (index === position) {
                return !item;
            } else {
                return item;
            }
        });
        setDesignerChecked(updatedCheckedState);
    };

    const handleCategoryChange = (position) => {
        const updatedCheckedState = categoryChecked.map((item, index) => {
            if (index === position) {
                return !item;
            } else {
                return item;
            }
        });
        setCategoryChecked(updatedCheckedState);
    };

    const handleSortChange = (e) => {
        setSortSelected(e.target.value);
    };

    useEffect(() => {
        const designerState = designerChecked.map((data, index) => {
            const brandIndex = index;
            const brandName = designers.filter(({ name }, index) => index === brandIndex);
            const name = brandName[0].name;

            return { checked: data, name }
        });


        const checkedYes = designerState.filter((item) => item.checked === true);
        const brandNames = checkedYes.map((brand) => {
            return brand.name;
        })
        setCheckedBrands(brandNames);

    }, [designerChecked]);

    useEffect(() => {
        const categoryState = categoryChecked.map((data, index) => {
            const categoryIndex = index;
            const categoryName = categories.filter(({ category }, index) => index === categoryIndex);
            const category = categoryName[0].name;

            return { checked: data, category }
        });
        const checkedYes = categoryState.filter((item) => item.checked === true);
        const categoryNames = checkedYes.map((brand) => {
            return brand.category;
        })
        setCheckedCategories(categoryNames);

    }, [categoryChecked]);

    useEffect(() => {
        if (filteredProducts.length === 0) {
            setFilteredProducts(products.sort((a, b) => a[sortSelected].localeCompare(b[sortSelected])));
        } else {
            setFilteredProducts(products.sort((a, b) => a[sortSelected].localeCompare(b[sortSelected])));
            setFilteredProducts(filteredProducts.sort((a, b) => a[sortSelected].localeCompare(b[sortSelected])));
        }
    }, [filteredProducts, products, sortSelected]);

    useEffect(() => {

        if (checkedCategories.length > 0 & checkedBrands.length === 0) {
            setFilteredProducts(products.filter((product) => checkedCategories.includes(product.category)));
        } else if (checkedCategories.length === 0 & checkedBrands.length > 0) {
            setFilteredProducts(products.filter((product) => checkedBrands.includes(product.brand)));
        } else if (checkedCategories.length === 1 & checkedBrands.length === 1) {
            setFilteredProducts(products.filter((product) => product.category.includes(checkedCategories) & checkedBrands.includes(product.brand)));
        } else if (checkedCategories.length > 1 & checkedBrands.length === 1) {
            const filteredBrand = products.filter((product) => product.brand === checkedBrands[0]);
            setFilteredProducts(filteredBrand.filter((product) => checkedCategories.includes(product.category)));
        } else if (checkedCategories.length === 1 & checkedBrands.length > 1) {
            setFilteredProducts(products.filter((product) => checkedBrands.includes(product.brand) & product.category === checkedCategories[0]));
        } else if (checkedCategories.length > 1 & checkedBrands.length > 1) {
            setFilteredProducts(products.filter((product) => checkedBrands.includes(product.brand) & checkedCategories.includes(product.category)));
        } else {
            setFilteredProducts([]);
        }

    }, [checkedCategories, checkedBrands, sortSelected, products]);


    return (
        <div className={`${animate ? 'transition' : ''}`}>
            <HeroSmall heroTitle={heroTitle} />
            <section id="productlist">
                <div className="container">
                    <Sorting handleSortChange={handleSortChange} sortSelected={sortSelected} />
                    <div className="sidebar_grid">
                        <Filter handleDesignerChange={handleDesignerChange} handleCategoryChange={handleCategoryChange} designers={designers} categories={categories} products={products} designerChecked={designerChecked} categoryChecked={categoryChecked} />
                        <div className="product_list bg-pink-200">
                            {filteredProducts.length < 1 && products.map((product, index) => (
                                <Link to={`/product/id=${product.id}`} className="single_product" key={index} >
                                    <SingleProduct product={product} onAdd={onAdd} onRemove={onRemove} />
                                </Link>
                            ))}
                            {filteredProducts.length > 1 && filteredProducts.map((product, index) => (
                                <Link to={`/product/id=${product.id}`} className="single_product" key={index} >
                                    <SingleProduct product={product} onAdd={onAdd} onRemove={onRemove} className="relative" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categorylist;