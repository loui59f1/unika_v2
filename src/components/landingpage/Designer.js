import { Link } from "react-router-dom";

export default function Designer() {
    return (
        <section id="designer" className="relative mt-30 pb-60">
            <div className="designer_bg mt-40"></div>
            <div className="handmade_graphic">
                <img src={`../img/handmade_graphic.svg`} alt="" />
            </div>
            <div className="container mt-30">
                <div className="designer_grid">
                    <div className="text_content">
                        <h3 className="pink">Mød en keramiker<span className="vertical_line"></span></h3>
                        <h2>Marinski Heartmades</h2>
                        <p>Hos Unika K håndplukker vi keramik fra udvalgte designere, med en passion for håndværket. Bæredygtighed, høj kvalitet og smukt design er alle fællesnævnere for vores. Romans design er farverigt, friskt og altid opløftende at kigge på. Marinski Heartmades er bosat i Grækenland, og har et farverigt udtryk vi sjældent har set. Derfor er vi de eneste i DK der forhandler Marinski produkter.</p>
                        <p className="mt-20 mb-30">Se udvalget nedenfor og bliv forført at et farverigt og eksklusivt univers af produkter.</p>
                        <Link to="/productlist"><button className="btn btn_secondary btn_inverse">Se produkter</button></Link>
                    </div>
                    <div className="designer_img">
                        <img src={`../img/marinski_img.jpg`} alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    );
}