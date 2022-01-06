import { Link } from "react-router-dom";
import SingleProduct from "../ecommerce/SingleProduct";

export default function ProductList({ products, onAdd, onRemove }) {
    return (
        <section id="popular_products" className="relative">
            <div className="beige_bg_2"></div>
            <div className="container bg-blue-200 mb-30">
                <h2 className="mb-20">Populære produkter</h2>
                <div className="products_grid bg-red-500">
                    {products.filter(product => product.popular.includes('1')).map((product, index) => (
                        <Link to={`/product/id=${product.id}`} className="single_product" key={index} >
                            <SingleProduct product={product} onAdd={onAdd} onRemove={onRemove} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}