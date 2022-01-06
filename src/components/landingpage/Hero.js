import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div id="hero">
            <span className="overlay"></span>
            <div className="hero_content">
                <div className="hello">
                    <h1>Hver kop er unik</h1>
                    <p>Nytænkning, høj kvalitet og smukt design har højeste prioritet i vores keramikeres arbejde. Det er vi vilde med.</p>
                    <div className='buttons'>
                        <Link to="/productlist"><button className="btn btn_primary">Se udvalget</button></Link>
                        <Link to="/about"><button className="btn btn_secondary">Læs mere</button></Link>
                    </div>
                </div>
            </div>
            <video className='videoTag' autoPlay loop muted>
                <source src={`../img/hero_landing.mp4`} type='video/mp4' />
            </video>
        </div>
    );
}