import { Link } from "react-router-dom";

export default function Intro() {
    return (
        <section id="intro" className="relative">
            <div className="beige_bg"></div>
            <div className="container">
                <div className="subheading_container">
                    <h3>Et unikt hjem</h3>
                </div>
                <div className="intro_grid">
                    <div className="intro_image">
                        <img src={`../img/intro_img_2.jpg`} alt="" />
                    </div>
                    <div className="intro_content">
                        <h2 className="mb-20">Håndlavet keramik til hverdagen</h2>
                        <p>Hos Unika K finder du udelukkende keramik, der er håndlavet med omtanke og sjæl af de dygtigste keramikere - både danske og udenlandske. De er drevet af selve håndværket. Nytænkning, høj kvalitet og smukt design har højeste prioritet i deres arbejde. Det er vi vilde med.</p>
                        <div className="btn_container mt-30">
                            <Link to="/productlist"><button className="btn_small">Se udvalget</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}