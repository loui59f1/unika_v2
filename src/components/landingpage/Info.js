export default function Info() {
    return (
        <section id="info" className="relative">
            <div className="info_container mt-30">
                <div className="info_img">
                    <img src={`../img/info_img.jpg`}></img>
                </div>
                <div className="text_content">
                    <h3>Et unikt hjem</h3>
                    <h2 className="mb-20">Marinski Heartmades</h2>
                    <p>Hos Unika K håndplukker vi keramik fra udvalgte designere, med en passion for håndværket. </p>
                    <p className="mt-20 mb-30">Bæredygtighed, høj kvalitet og smukt design er alle fællesnævnere for vores.</p>
                    <div className="icon_container mt-30">
                        <div className="iconbox">
                            <img src={`../img/coffee_icon_1.svg`} className="mb-20" />
                            <p>Håndlavet keramik i høj kvaliiet</p>
                        </div>
                        <div className="iconbox">
                            <img src={`../img/coffee_icon_2.svg`} width="90" className="mb-20" />
                            <p className="-mt-25">Håndlavet keramik i høj kvaliiet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}