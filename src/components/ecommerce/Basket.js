import { useEffect } from "react";

import { Link } from 'react-router-dom';

const Basket = ({ basket, subtotal, total, setHeaderLight, onRemove, setBasketModalOn, animate }) => {

    useEffect(() => {
        const setStates = async () => {
            setHeaderLight(false);
            setBasketModalOn(true);
        };
        setStates();
    });

    return (
        <section id="basket" className={`${animate ? 'transition' : ''}`}>
            {basket.length !== 0 && (<div className="beige_bg"></div>)}
            <div className="container">
                <div className="basket_grid">
                    <div className="order">
                        <h2 className="mb-10">Varer i indkøbskurv</h2>
                        {basket.length === 0 && <div>
                            <div>
                                <p>Indkøbskurven er tom</p>
                            </div>
                        </div>}
                        {basket && basket.map((item, index) => (
                            <div className="basket_item" key={index}>
                                <Link to={`/product/id=${item.id}`}>
                                    <div className="basket_image">
                                        <img src={`../img/${item.firstImage}`} alt={item.title}></img>
                                    </div>
                                </Link>
                                <div>
                                    <div className="">
                                        <h3 className="mb-10 item_basket_price">{item.price * item.amount},00 kr.</h3>
                                        <h3 className="brand_name mt-15">{item.brand}</h3>
                                        <Link to={`/product/id=${item.id}`} className="title_link">
                                            <h2 className="fs-18 basket_title">{item.title}</h2>
                                        </Link>
                                    </div>
                                    <div className="remove_icon">
                                        <img onClick={() => onRemove(item)} src={`../img/remove_icon.jpg`} alt=""></img>
                                    </div>
                                    <div className="amount_container mt-10">
                                        <p>Antal: {item.amount}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="basket_sidebar">
                        {basket.length !== 0 && (
                            <>
                                <h3>Din ordre</h3>
                                <div className="mt-20">
                                    <div className="sidebar_text">
                                        <p>Subtotal</p>
                                        <p className="float_right price">{subtotal},00 kr.</p>
                                    </div>

                                    <div className="sidebar_text">
                                        <p>Levering</p>
                                        <p className="float_right price">39,00 kr.</p>
                                    </div>

                                    <div className="sidebar_text total flex justify-between">
                                        <p>Total</p>
                                        <p className="total price">{total},00 kr.</p>
                                    </div>
                                    <div className="row">
                                        <Link to="/checkout">
                                            <button className="mt-30 btn btn_primary w-full">
                                                Checkout
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Basket;