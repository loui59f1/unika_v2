export default function Designer() {
    return (
        <section id="categories" className="relative mt-30">
            <div className="categories_bg">
                <div className="category_list">
                    <div className="category_flex">
                        <div className="item">
                            <img src={`../img/category_1.jpg`} />
                            <p>Hello</p>
                        </div>
                        <div className="item">
                            <img src={`../img/category_3.jpg`} />
                            <p>Hello</p>
                        </div>
                        <div className="item">
                            <img src={`../img/category_2.jpg`} />
                            <p>Hello</p>
                        </div>
                        <div className="item">
                            <img src={`../img/category_1.jpg`} />
                            <p>Hello</p>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className="mb-20 mt-30">Lad dig inspirere</h2>
                        <p>Udforsk vores sortiment ved at bladre gennem kategorier. Du kan også læse vores guide til tidens tendenser inden for indretning og keramik nedenfor.</p>
                        <button className="btn btn_primary mt-30">Se alle produkter</button>
                    </div>
                </div>
            </div>
        </section>
    );
}