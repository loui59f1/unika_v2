const SingleProduct = ({ product, index }) => {

    return (
        <>
            <div className="product_image">
                <img src={`../img/${product.firstImage}`} alt={index} />
            </div>
            <div className="content relative">
                <h3>{product.title}</h3>
                <p className="brand fs-13">{product.brand}</p>
                <p className="price">{product.price},00 kr.</p>
            </div>
        </>
    )
}

export default SingleProduct;