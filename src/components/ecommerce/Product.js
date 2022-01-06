import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';

const Product = ({ onAdd, onRemove, products, setHeroTitle, setHeaderLight, setBasketModalOn, animate }) => {
    const brandDescription = [
        {
            brand: 'Marinski Heartmades',
            description: 'Hånddrejet porcelæn i keramik og med striber i kongeblå. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare.',
            image: 'brand_marinski.jpg'
        },
        {
            brand: 'Ditte Fischer',
            description: 'Hånddrejet porcelæn i keramik og med striber i kongeblå. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare.',
            image: 'brand_image.jpg'
        },
        {
            brand: 'Unika K Design',
            description: 'Hånddrejet porcelæn i keramik og med striber i kongeblå. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare.',
            image: 'brand_image.jpg'
        },
        {
            brand: 'Eva Brandt',
            description: 'Hånddrejet porcelæn i keramik og med striber i kongeblå. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare.',
            image: 'brand_image.jpg'
        },
        {
            brand: 'Made a Mano',
            description: 'Hånddrejet porcelæn i keramik og med striber i kongeblå. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare.',
            image: 'brand_image.jpg'
        },
        {
            brand: 'Ann-Louise Roman',
            description: 'Hånddrejet porcelæn i keramik og med striber i kongeblå. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare.',
            image: 'brand_image.jpg'
        },
        {
            brand: 'Helle Grej',
            description: 'Hånddrejet porcelæn i keramik og med striber i kongeblå. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare. Kombinationen af hvidt, blødt porcelæn og de blå detaljer giver et forfriskende look til en ellers basal vare.',
            image: 'brand_image.jpg'
        }
    ]

    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(1);
    const [btnText, setBtnText] = useState("Læg i kurv");

    const handleClickUp = () => {
        setCount(count + 1);
    };

    const handleClickDown = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    };

    const handleAddToCart = () => {
        onAdd(product, count);
        setBtnText("Produkt tilføjet!");
        setTimeout(function () {
            setBtnText("Læg i kurv");
        }, 2000);
    }

    const [activeImageSrc, setActiveImageSrc] = useState({
        src: ""
    });

    const urlId = useParams().id;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `../data.json`,
            );
            const json = await res.json();
            const idProduct = json.products.find(item => item.id === urlId)
            setProduct(idProduct);
        };
        fetchData();
    }, [urlId]);

    useEffect(() => {
        const setStates = async () => {
            setHeroTitle(product.title);
            setHeaderLight(false);
            setBasketModalOn(true);
        };
        setStates();
    });

    useEffect(() => {
        const firstImage = product.firstImage;
        setActiveImageSrc(firstImage);
    }, [product])

    return (
        <section id="product" className={`${animate ? 'transition' : ''}`}>
            <div className="beige_bg"></div>
            <div className="breadcrumbs">
                <ul>
                    <li><Link to="/productlist">Alle produkter</Link></li>
                    <li><Link to="/productlist">Kopper</Link></li>
                    <li>Latte kop</li>
                </ul>
            </div>
            <div className="container">
                <div className='product_container' key={product.id}>
                    <div className="image_container">
                        <img className='product_image' src={`../img/${activeImageSrc}`} alt='' />
                        <div className="images">
                            {product.firstImage &&
                                <div className="image_thumbnail" onClick={() => setActiveImageSrc(product.firstImage)}>
                                    <img src={`../img/${product.firstImage}`} alt='' />
                                </div>
                            }
                            {product.secondImage &&
                                <div className="image_thumbnail" onClick={() => setActiveImageSrc(product.secondImage)}>
                                    <img src={`../img/${product.secondImage}`} alt='' />
                                </div>
                            }
                            {product.thirdImage &&
                                <div className="image_thumbnail" onClick={() => setActiveImageSrc(product.thirdImage)}>
                                    <img src={`../img/${product.thirdImage}`} alt='' />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="product_column">
                        <div className="flex justify-between top_product">
                            <h3 className='brand fs-13'>{product.brand}</h3>
                            <div className="right_column">
                                <h3 className="price">{product.price},00 kr.</h3>
                                <p>Varenr: {product.id}</p>
                            </div>
                        </div>
                        <h1 className="mb-10">{product.title}</h1>
                        <p className="mb-40">{product.short_description}</p>
                        <div className="stock_container">
                            <div className="stock">
                                <>
                                    {product.stock &&
                                        <>
                                            <p>På lager</p>
                                            <span className="in_stock_icon"></span>
                                        </>
                                    }
                                    {!product.stock &&
                                        <>
                                            <p>Udsolgt</p>
                                            <span className="not_in_stock_icon"></span>
                                        </>
                                    }
                                </>
                            </div>
                            <div className="delivery">
                                <p>Levering inden for 2-4 hverdage</p>
                            </div>
                        </div>
                        <div className="button flex">
                            <div className="flex input_amount mr-20">
                                <button onClick={() => handleClickDown(product)}>-</button>
                                <input type="text" value={count} onChange={() => setCount(count)} />
                                <button onClick={() => handleClickUp(product)}>+</button>
                            </div>
                            <ButtonArea btnText={btnText} handleAddToCart={handleAddToCart} product={product} count={count} />
                        </div>
                        <div className="usp">
                            <div className="item handcraft">
                                <span className="usp_icon_handcraft"></span>
                                <h3>Håndlavet og håndplukket keramik</h3>
                            </div>
                            <div className="item delivery">
                                <span className="usp_icon_delivery"></span>
                                <h3>Fri levering ved køb over 499 kr.</h3>
                            </div>
                        </div>
                        <div className="product_accordion"></div>
                    </div>
                </div>
            </div>
            <div className="brand_section">
                <div className="container">
                    {brandDescription.filter((item) => item.brand.includes(`${product.brand}`)).map((brand, index) => (
                        <div className="brand_container" key={index}>
                            <div className="content flex column justify-center">
                                <div className="subheading mb-20">
                                    <h3 className="pink">Mød keramikeren bag<span className="vertical_line"></span></h3>
                                </div>
                                <h2>{brand.brand}</h2>
                                <p className="mt-20">{brand.description}</p>
                                <Link to="/productlist">
                                    <button className="btn btn_secondary btn_inverse mt-40">Se alle produkter fra {brand.brand}</button>
                                </Link>
                            </div>
                            <div className="image">
                                <img src={`../img/${brand.image}`} alt='' />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="popular container mb-40">
                <div className="flex mb-10">
                    <h3 className="mb-30">Lignende produkter</h3>
                </div>
                <div className="popular_products">
                    {products.filter(item => item.brand.includes(`${product.brand}`)).slice(0, 4).map((product, index) => (
                        <Link to={`/product/id=${product.id}`} className="single_product" key={index} >
                            <SingleProduct product={product} onAdd={onAdd} onRemove={onRemove} className="relative" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

const ButtonArea = (props) =>
    <>
        {/* <AnimateOnChange animationIn="fadeIn" animationOut="fadeOut" className="ml-20 w-full" baseClassName="AddToCart"> */}
        <button id="addtocart" className={`btn btn_secondary btn_inverse mr-none w-full ${props.btnText === "Produkt tilføjet!" ? 'bg-red' : ''}`} onClick={() => props.handleAddToCart(props.product, props.count)}>{props.btnText}</button>
        {/* </AnimateOnChange> */}
    </>

export default Product;