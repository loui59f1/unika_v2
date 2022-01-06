import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Checkout = ({ basket, subtotal, total, setHeaderLight, setBasketModalOn, animate }) => {

    const [userFirstname, setUserFirstname] = useState('');
    const [userLastname, setUserLastname] = useState('');
    const [userAdress, setUserAdress] = useState('');
    const [userExtra, setUserExtra] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userPostalcode, setUserPostalcode] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const setStates = async () => {
            setHeaderLight(false);
            setBasketModalOn(true);
        };
        setStates();
    });

    function handleFirstname(e) {
        setUserFirstname(e.target.value);
    }

    function handleLastname(e) {
        setUserLastname(e.target.value);
    }

    function handleAdress(e) {
        setUserAdress(e.target.value);
    }

    function handleExtra(e) {
        setUserExtra(e.target.value);
    }

    function handlePostalcode(e) {
        setUserPostalcode(e.target.value);
    }

    function handleCity(e) {
        setUserCity(e.target.value);
    }

    function handlePhone(e) {
        setUserPhone(e.target.value);
    }

    function handleEmail(e) {
        setUserEmail(e.target.value);
    }

    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            firstname: userFirstname,
            lastname: userLastname,
            address: userAdress,
            extra: userExtra,
            postalcode: userPostalcode,
            city: userCity,
            phone: userPhone,
            email: userEmail
        };

        const postData = JSON.stringify(data);

        fetch('https://unikaproducts-2d03.restdb.io/rest/orders', {
            method: 'POST',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': 'dc0612be0199a5055d6304a3b9f855163b5b6',
                'content-type': 'application/json'
            },
            body: postData,
        })
            .catch(err => console.log(err))
            .then(data => console.log(data));
    }

    return (
        <section id="checkout" className={`${animate ? 'transition' : ''}`}>
            {basket.length !== 0 && (<div className="beige_bg"></div>)}
            <div className="container checkout_grid">
                <div className="checkout_form">
                    <h2>Checkout/betaling</h2>
                    <br />
                    <form method="POST" id="checkout_form" onSubmit={(e) => {
                        handleSubmit(e);
                        navigate("/order");
                    }}>
                        <div className="form_grid">
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="firstname">Fornavn</label>
                                </div>
                                <div className="mt-1">
                                    <input type="text" name="firstname" id="firstname" onChange={(e) => handleFirstname(e)} />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="lastname">Efternavn</label>
                                </div>
                                <div className="mt-1">
                                    <input type="text" name="lastname" id="lastname" onChange={(e) => handleLastname(e)} />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="flex justify-between">
                                <label htmlFor="adress" className="block">
                                    Gadenavn og nr.
                                </label>
                            </div>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="adress"
                                    id="adress"
                                    className="input border-border-primary"
                                    onChange={(e) => handleAdress(e)}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="flex justify-between">
                                <label htmlFor="extra" className="block">Lejlighed, værelse o.l</label>
                            </div>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="extra"
                                    id="extra"
                                    className="input border-border-primary"
                                    onChange={(e) => handleExtra(e)}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="flex justify-between">
                                <label htmlFor="postalcode" className="block">Postnummer</label>
                            </div>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="postalcode"
                                    id="postalcode"
                                    className="input border-border-primary"
                                    onChange={(e) => handlePostalcode(e)}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="flex justify-between">
                                <label htmlFor="city" className="block">By</label>
                            </div>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    className="input border-border-primary"
                                    onChange={(e) => handleCity(e)}
                                />
                            </div>
                        </div>
                        <div className="form_grid">
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="email" className="block">E-mail</label>
                                </div>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" onChange={(e) => handleEmail(e)} />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="phone" className="block">Telefon</label>
                                    <div className="optional">
                                        <h3 id="extra-description">Valgfri</h3>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <input type="text" name="phone" id="phone" autoComplete="tel" aria-describedby="phone-description" onChange={(e) => handlePhone(e)} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="checkout_sidebar mt-40">
                    <div className="mt-10">
                        <h3>Din ordre</h3>
                        <div className="basket_items">
                            {basket.map((item, index) => (
                                <div className="item relative">
                                    <div className="checkout_product_img">
                                        <img src={`../img/${item.firstImage}`} alt={item.title}></img>
                                    </div>
                                    <div className="checkout_product_content">
                                        <h2>{item.title}</h2>
                                        <p>{item.amount} stk</p>
                                    </div>
                                    <div>
                                        <p className="price jost">{item.amount * item.price},00 kr.</p>
                                    </div>
                                </div>
                            ))}
                            <hr />
                        </div>
                        <div>
                            <div className="relative mb-20">
                                <p>Subtotal</p>
                                <p className="right jost">{subtotal},00 kr.</p>
                            </div>
                            <div className="relative mb-20">
                                <p>Levering</p>
                                <p className="right jost">39,00 kr.</p>
                            </div>
                            <hr />
                            <div className="relative mb-20 mt-20">
                                <p>Total</p>
                                <p className="right total jost">{total},00 kr.</p>
                            </div>
                            <div className="text-right sm:col-span-2">
                                <button type="submit" form="checkout_form" className="btn btn_primary w-full mt-20">Gennemfør køb</button>
                            </div>
                            <div className="mt-40 payment_logos">
                                <img src="../../img/payment_logos.svg" alt="Payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checkout;