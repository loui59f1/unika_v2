import { useEffect } from "react";
import HeroSmall from "../ecommerce/HeroSmall";

const Contact = ({ heroTitle, setHeroTitle, setHeaderLight, animate }) => {

    useEffect(() => {
        const setStates = async () => {
            setHeroTitle("Kontakt os");
            setHeaderLight(true);
        };
        setStates();
    });

    return (
        <div className={`${animate ? 'transition' : ''}`}>
            <HeroSmall heroTitle={heroTitle} />
            <section id="contact" className="relative">
                <div className="beige_bg"></div>
                <div className="container">
                    <div className="sidebar">
                        <h3>Customer Care</h3>
                        <ul>
                            <li>Handelsbetingelser</li>
                            <li>Kundeservice</li>
                            <li>Persondatapolitik</li>
                            <li>Levering</li>
                            <li>Reklamation</li>
                        </ul>
                    </div>
                    <div className="info">
                        <h3 className="mb-20">Let's get in touch</h3>
                        <p>Søllerødgårdsvej 19B</p>
                        <p>2840 Holte, DK</p>
                        <div className="contact_info">
                            <span>+45 61 66 70 00</span>
                            <span>info@unika.dk</span>
                        </div>
                    </div>
                    <div className="contact_img relative">
                        <img src={`../img/contact_img.jpg`} alt="" />
                        <div className="contact_logo">
                            <img src={`../img/contact_logo.svg`} alt="" />
                        </div>
                    </div>
                </div>
                <div className="form_container pb-40">
                    <form>
                        <h2 className="mb-40">Send os en besked</h2>
                        <div className="flex row mb-20">
                            <div className="mr-20">
                                <label htmlFor="name">Fornavn</label>
                                <input type="text" id="name" />
                            </div>
                            <div>
                                <label htmlFor="lastname">Efternavn</label>
                                <input type="text" id="lastname" />
                            </div>
                        </div>
                        <div className="mb-20">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="mb-20">
                            <label htmlFor="phone">Telefon</label>
                            <input type="phone" id="phone" />
                        </div>
                        <div className="mb-20">
                            <label htmlFor="message">Besked</label>
                            <input type="text" id="message" />
                        </div>
                        <button type="submit" className="mt-20 btn btn_secondary btn_inverse">Send besked</button>
                    </form>
                    <div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;