import { useEffect } from "react";
import HeroSmall from "./HeroSmall";
import Newsletter from "../landingpage/Newsletter";

const Order = ({ setHeaderLight, heroTitle, setHeroTitle, basket, setBasketModalOn, setIsMobileMenuOpen, animate }) => {

    useEffect(() => {
        const setStates = async () => {
            setHeaderLight(true);
            setHeroTitle("Tak for din ordre!");
            setBasketModalOn(false);
            setIsMobileMenuOpen(false);
        };
        setStates();
    });

    return (
        <div className={`${animate ? 'transition' : ''}`}>
            <HeroSmall heroTitle={heroTitle} />
            <section id="order">
                <div className="container">
                    <div>
                        <div className="order_complete">
                            <h2>Din ordre vil nu blive behandlet, og du vil modtage en ordrebekræftelse snarest.</h2>
                            <h3>Ordrenummer: 11452</h3>
                        </div>
                        <div className="user_info flex row justify-between">
                            <ul>
                                <li>Marianne Jakobsen</li>
                                <li>Niels Finsens Alle 71, 4. TH</li>
                                <li>2860 Søborg</li>
                                <li>Danmark</li>
                            </ul>
                            <ul>
                                <li>Betalingsmåde: Visa Dankort</li>
                                <li>**** **** **** 3591</li>
                                <li>Levering:</li>
                                <li>Afhentning, MD Pakkeshop, GLS</li>
                            </ul>
                        </div>
                        <div className="order_summary">
                            <h2>Ordre oversigt</h2>
                            {basket.map((product, index) => (
                                <div className="summary_item" key={index}>
                                    <div className="order_image">
                                        <img src={`../img/${product.firstImage}`} alt={product.title}></img>
                                    </div>
                                    <div>
                                        <div className="">
                                            <h3 className="mb-10 item_summary_price price">{product.price * product.amount},00 kr.</h3>
                                            <h3 className="brand_name mt-15">{product.brand}</h3>
                                            <h2 className="fs-18 product_title">{product.title}</h2>
                                        </div>
                                        <div className="amount_container mt-10">
                                            <p>Antal: {product.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
        </div>
    )
}

export default Order;